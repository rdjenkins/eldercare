// ROSIER Score Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 28/Aug/2022 Dean Jenkins

// Since I don't like the way some websites covet these trivial algorithms
// and try to monetize them by licensing them or pushing adverts this
// code has been released under the following license.
// Creative Commons Attribution 4.0 International (CC BY 4.0)
// https://creativecommons.org/licenses/by/4.0/


function ROSIER()
{
    var loc=getvaluefromcheckbox("tblable_calc_form_loc");
    var seizure=getvaluefromcheckbox("tblable_calc_form_seizure");
    var facial=getvaluefromradio("tblable_calc_form_facial");
//    var grip=getvaluefromradio("tblable_calc_form_grip");
    var arm=getvaluefromcheckbox("tblable_calc_form_arm");
    var leg=getvaluefromcheckbox("tblable_calc_form_leg");
    var speech=getvaluefromcheckbox("tblable_calc_form_speech");
    var visual=getvaluefromcheckbox("tblable_calc_form_visual");

    var score = parseFloat(loc + seizure + facial + arm + leg+ speech + visual);
    document.getElementById("tblable_calc_form_score").innerHTML = score.toString();

    var summaryhtml="";

    if (score>0) {
        summaryhtml = summaryhtml + "Stroke likely. Admit to stroke unit / refer to stroke team. Sensitivity 92%, Specificity 86% for stroke.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }
    if (score==0) {
        summaryhtml = summaryhtml + "Stroke a possible diagnosis. Seek local advice.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-warning");
    }
    if (score<0) {
        summaryhtml = summaryhtml + "Stroke less likely";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }

    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    uncheck("tblable_calc_form_loc");
    uncheck("tblable_calc_form_seizure");
    uncheck("tblable_calc_form_facial");
//    uncheck("tblable_calc_form_grip");
    uncheck("tblable_calc_form_arm");
    uncheck("tblable_calc_form_leg");
    uncheck("tblable_calc_form_speech");
    uncheck("tblable_calc_form_visual");
}

function headerBlurb(title,oneliner,instruction) {
    var html='<h2>' + title + '</h2>' +
'<p>' + oneliner + '</p>' +
'<p class="font-italic">' + instruction + '</p>'
    return html;
}

function simplecheckbox(varname,value,labeltext,onclick) {
    var html = '    <div class="row1">' +
'        <div class="col1">' +
'            <input id="' + varname + '" value="'+ value +'" onclick="'+ onclick +'" type="checkbox">' +
'            <label for="' + varname + '">' + labeltext + '</label>' +
'        </div>' +
'    </div>'
    return html;
}

function simpleradio(varid,varname,value,labeltext,onclick) {
    var html = '    <div class="row1">' +
'        <div class="col1">' +
'            <input id="' + varid + '" name="' + varname + '" value="'+ value +'" onclick="'+ onclick +'" type="radio">' +
'            <label for="' + varid + '">' + labeltext + '</label>' +
'        </div>' +
'    </div>'
    return html;
}


var calculatorHTML = '' +
'<div class="calculator" id="tblable_calc">' +

'  <div name="hform" id="tblable_calc_form">' +

headerBlurb("ROSIER score","Recognition of stroke in the emergency room. Note: If blood sugar < 3.5 mmol/l correct first and then assess ROSIER score.","Tick all that apply") +


simplecheckbox("tblable_calc_form_loc","-1","Has there been loss of consciousness or syncope? (-1)","ROSIER();") +
simplecheckbox("tblable_calc_form_seizure","-1","Has there been seizure activity? (-1)","ROSIER();") +
simplecheckbox("tblable_calc_form_facial","1","Asymmetric facial weakness (1)","ROSIER();") +
//simplecheckbox("tblable_calc_form_grip","1","Asymmetric grip weakness (1)","ROSIER();") +
simplecheckbox("tblable_calc_form_arm","1","Asymmetric arm weakness (1)","ROSIER();") +
simplecheckbox("tblable_calc_form_leg","1","Asymmetric leg weakness (1)","ROSIER();") +
simplecheckbox("tblable_calc_form_speech","1","Speech disturbance (1)","ROSIER();") +
simplecheckbox("tblable_calc_form_visual","1","Visual field defect (1)","ROSIER();") +


'    <div id="result" class="alert alert-success">' +
'        <div><b>ROSIER score = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); ROSIER(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="https://doi.org/10.1016/s1474-4422(05)70201-5">Nor AM, Davis J et al. (2005)</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
resetCalc(); // required to set the default radio button
ROSIER();
