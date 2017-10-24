#!/usr/bin/python

# A script for creating the static HTML pages for the scales
# Finds the list of Javascript scales from the js/scales directory
# Create HTML pages for them
# Then it creates Javascript files for the guidelines using org-mode encoded sources in the js/guidelines folder.
# It then offers to copy files to Android Studio Project assets folder
# created Dean Jenkins 8/Oct/2017

#### set up some variables ####
# path to Android Studio Project (modify as required)
path_to_android_app_folder = "/home/dean/AndroidStudioProjects/Eldercare/app/src/main/assets/"
###############################

import os, shutil, datetime
from distutils.dir_util import copy_tree
import sys, cgi, re
import Orgnode

#### set up some functions ####
# method for getting filenames from a directory
# top directory os.walk trick adapted from https://stackoverflow.com/questions/3207219/how-do-i-list-all-files-of-a-directory#3207973
def filenamesbyextension(path,extension):
    extension = "." + extension.lstrip(".") # in case this function is called with a dot or not
    fullfilenames = []
    for (dirpath, dirnames, filenames) in os.walk(path):
        fullfilenames.extend(filenames)
        break
    filenames = []
    for name in fullfilenames:
        if name.endswith(extension): # return only those with the extension
            filenames.append(re.sub(extension+'$', '', name))
    return filenames

# command line colour codes from https://stackoverflow.com/a/27265453/4066963
def red(string):
    W  = '\033[0m'  # white (normal)
    R  = '\033[31m' # red
    return R + string + W

def green(string):
    W  = '\033[0m'  # white (normal)
    G  = '\033[32m' # green
    return G + string + W
###############################

print "Making HTML files for the scales"

# scales to be included
scales = filenamesbyextension('js/scales','js')
# guidelines to be included
guidelines = filenamesbyextension('js/guidelines','txt')
# HTML template
scale_template = 'go-scales_template.html'
scalecounter = 0
scale_skipped = 0
guideline_template = 'go-guidelines_template.html'
guideline_template_js = 'go-guidelines_template.js'
guidelinecounter = 0
guideline_skipped = 0
js_swap_string = "XXXXXXXXXX.js"

#### do the scales ####
# read scale template
print "Using template '" + scale_template + "'"
f = open(scale_template)
template = f.read()
f.close()

# check scale template is OK
if template.find(js_swap_string) == -1:
    print red("Fatal error: template swap string '" + js_swap_string + "' not found.")
    sys.exit()

# create the scales files
for x in scales:
    msg = "   " + x + " "
    if os.path.isfile('js/scales/'+x+'.js'):
        scale = open("scale_" + x + ".html","w")
        scale.write(template.replace(js_swap_string,x + ".js",1))
        scale.close()
        msg = msg + green("... done 'scale_" + x + ".html'")
        scalecounter = scalecounter + 1
    else:
        msg = msg + red(" ... scale skipped as no 'js/scales/"+x+".js'")
        scale_skipped = scale_skipped + 1
    print msg

# generate a report
report = "Finished. "

if scale_skipped == 0:
    report = report + ""
elif scale_skipped == 1:
    report = report + "1 scale skipped. "
else:
    report = report + str(scale_skipped) + " scales skipped. "

if scalecounter == 1:
    report = report + "1 scale created. "
else:
    report = report + str(scalecounter) + " scales done. "

print report

#### do the guidelines ####
# read guideline template HTML
print "Using template '" + guideline_template + "'"
f = open(guideline_template)
template = f.read()
f.close()

# check guideline template HTML is OK
if template.find(js_swap_string) == -1:
    print red("Fatal error: template swap string '" + js_swap_string + "' not found.")
    sys.exit()

# read guideline template JS
print "Using template '" + guideline_template_js + "'"
f = open(guideline_template_js)
template_js = f.read()
f.close()

# check guideline template JS is OK
if template_js.find(js_swap_string) == -1:
    print red("Fatal error: template swap string '" + js_swap_string + "' not found.")
    sys.exit()

def htmlentities(string):
    string = cgi.escape(string) # HTML entities
    string = re.sub(r"'","\\'",string)
    string = re.sub(r'\[\[(.*?)\]\[(.*?)\]\]',r'<a href="\1">\2</a>',string) # find and code org-mod encoded hyperlinks
    return string

# create the guidelines files
for x in guidelines:
    msg = "   " + x + " "
    if os.path.isfile('js/guidelines/'+x+'.txt'):
        # get the guideline text file in org-mode format
        nodelist = Orgnode.makelist('js/guidelines/'+x+'.txt')
        guidelinehtml = ""
        headernumber = 0
        for n in nodelist:
            # make HTML headings tags
            guidelinehtml += '<h' + str(n.Level()) + ' data-target="#glb_' + str(headernumber) + '" data-toggle="collapse" style="cursor: pointer;">' # HTML Heading tag open. The inline style required for forcing iOS to behave.
            guidelinehtml +=  htmlentities(n.Heading())
            guidelinehtml += "</h" + str(n.Level()) + ">\n" # HTML Heading tag close
            # if there is a body below a heading then make it in to HTML too
            bodylist = []
            # collect the list items
            for line in n.Body().split('\n'):
                if len(line) > 0:
                    bodylist.append("<p>"+htmlentities(line)+"</p>\n")
            # only if there are list items make a HTML unordered list
            # (this forces ignoring of blank lines in the guideline file)
            if len(bodylist) > 0:
                guidelinehtml += '<div id="glb_' + str(headernumber) + '" class="collapse">'
                #guidelinehtml += "<ul>" # not using lists at the moment (looks ugly)
                for item in bodylist:
                    guidelinehtml += item
                #guidelinehtml += "</ul>" # not using lists at the moment (looks ugly)
                guidelinehtml += '</div>'
            headernumber = headernumber + 1
        # make guidelinehtml safe for javascript
        guidelinehtml = guidelinehtml.replace("'","\'")
        guidelinehtmllines = guidelinehtml.split("\n")
        # wrap the html into a Javascript document.write() lines
        jsinsert = ""
        for line in guidelinehtmllines:
            if line != "":
                jsinsert += "document.write('" + line + "');\n"
        # put the Javascript link into the HTML page
        guideline = open("guideline_" + x + ".html","w")
        guideline.write(template.replace(js_swap_string,"guideline_" + x + ".js",1))
        guideline.close()
        # create the Javascript source file
        guideline_js = open("js/guidelines/guideline_" + x + ".js","w")
        guideline_js.write(template_js.replace(js_swap_string,jsinsert,1))
        guideline_js.close()

        msg = msg + green("... done 'guideline_" + x + ".html'")
        guidelinecounter = guidelinecounter + 1
    else:
        msg = msg + red(" ... guideline skipped as no 'js/guidelines/"+x+" .txt'")
        guideline_skipped = guideline_skipped + 1
    print msg

# generate a report
report = "Finished. "

if guideline_skipped == 0:
    report = report + ""
elif guideline_skipped == 1:
    report = report + "1 guideline skipped. "
else:
    report = report + str(guideline_skipped) + " guideline skipped. "

if guidelinecounter == 1:
    report = report + "1 guideline created. "
else:
    report = report + str(guidelinecounter) + " guidelines done. "

print report

print "Updating version date"

# read about file
f = open('about.html')
aboutfile = f.read()
f.close()

# check about file has detectable swap string
if aboutfile.find('Version: ') == -1:
    print red("Fatal error: about.html does not contain 'Version: ' not found.")
    sys.exit()
else:
    today = datetime.date.today()
    aboutfile = re.sub(r'Version: .*?</p>','Version: ' + today.strftime('%d %B %Y') + '</p>',aboutfile)
    about_new = open("about.html","w")
    about_new.write(aboutfile)
    about_new.close()

# print reminder
print "remember to copy the files to the App(s)"

if os.path.isdir(path_to_android_app_folder):
    print "Android App folder path exists"    

    choice = raw_input("Copy to Android? y/n ") # python 2
    if choice == "y" or choice == "Y":
        print "You chose Yes!"
        print "Deleteing contents of " + path_to_android_app_folder
        for the_file in os.listdir(path_to_android_app_folder):
            file_path = os.path.join(path_to_android_app_folder, the_file)
            try:
                if os.path.isfile(file_path):
                    os.unlink(file_path)
                elif os.path.isdir(file_path):
                    shutil.rmtree(file_path)
            except Exception as e:
                print(e)
        from_directory = os.curdir
        print "Copying from " + from_directory + " to " + path_to_android_app_folder
        copy_tree(from_directory, path_to_android_app_folder)
        # remove files that are not needed in the Android App assets folder
        shutil.rmtree(path_to_android_app_folder + ".git")
        os.unlink(path_to_android_app_folder + "go-scales.py")
        os.unlink(path_to_android_app_folder + "Orgnode.py")
        os.unlink(path_to_android_app_folder + "Orgnode.pyc")
        os.unlink(path_to_android_app_folder + scale_template)
        os.unlink(path_to_android_app_folder + guideline_template)
        os.unlink(path_to_android_app_folder + guideline_template_js)
    else:
        print "You chose No!"
else:
    if path_to_android_app_folder !="":
        print red("Android App folder '" + path_to_android_app_folder + "' does not exist. Skipping.")
    else:
        print red("Android App folder not defined. Skipping.")

raw_input("Hit ENTER to exit ") # python 2
