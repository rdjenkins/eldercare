#!/usr/bin/python

import os, shutil
from distutils.dir_util import copy_tree
import sys

print "Making HTML files for the scales"

# set up some variables
scales = ['wells','has-bled','cha2ds2-vasc','amt','frax','qfracture','abcd2','curb-65']
scale_template = 'go-scales_template.html'
scalecounter = 0
skipped = 0
js_swap_string = "XXXXXXXXXX.js"
path_to_android_app_folder = "/home/dean/AndroidStudioProjects/Eldercare/app/src/main/assets/"

# read the template
print "Using template '" + scale_template + "'"
f = open(scale_template)
template = f.read()
f.close()

# check template is OK
if template.find(js_swap_string) == -1:
    print "Fatal error: template swap string '" + js_swap_string + "' not found."
    sys.exit()

# create the scales files
for x in scales:
    msg = "   " + x + " "
    if os.path.isfile('js/scales/'+x+'.js'):
        scale = open("scale_" + x + ".html","w")
        scale.write(template.replace(js_swap_string,x + ".js",1))
        scale.close()
        msg = msg + "... done 'scale_" + x + ".html'"
        scalecounter = scalecounter + 1
    else:
        msg = msg + " ... skipped as no 'js/scales/"+x+".js'"
        skipped = skipped + 1
    print msg

# generate a report
report = "Finished. "

if skipped == 0:
    report = report + ""
elif skipped == 1:
    report = report + "1 scale skipped. "
else:
    report = report + str(skipped) + " scales skipped. "

if scalecounter == 1:
    report = report + "1 scale created. "
else:
    report = report + str(scalecounter) + " scales done. "

print report

# print reminder
print "remember to copy the files to the App(s)"

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
    os.unlink(path_to_android_app_folder + "go-scales.py")
    os.unlink(path_to_android_app_folder + scale_template)
else:
    print "You chose No!"

raw_input("Hit ENTER to exit ") # python 2
