// ALONE Score Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 5/Nov/2017 Dean Jenkins

// This code has been released under the following license.
// Creative Commons Attribution 4.0 International (CC BY 4.0)
// https://creativecommons.org/licenses/by/4.0/



function ALONE()
{
    var A=getvaluefromradio("tblable_calc_form_A");
    var L=getvaluefromradio("tblable_calc_form_L");
    var O=getvaluefromradio("tblable_calc_form_O");
    var N=getvaluefromradio("tblable_calc_form_N");
    var E=getvaluefromradio("tblable_calc_form_E");

    var score = parseFloat(A + L + O + N + E);
    document.getElementById("tblable_calc_form_score").innerHTML = score.toString();

    var summaryhtml="";

    if (score<7) {
        summaryhtml = summaryhtml + "Normal. Does not indicate severe loneliness";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score>7) {
        summaryhtml = summaryhtml + "May indicate severe loneliness";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }

    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    uncheckradio("tblable_calc_form_A");
    uncheckradio("tblable_calc_form_L");
    uncheckradio("tblable_calc_form_O");
    uncheckradio("tblable_calc_form_N");
    uncheckradio("tblable_calc_form_E");
}


var calculatorHTML = '' +
'<div class="calculator" id="tblable_calc">' +

'  <div name="hform" id="tblable_calc_form">' +

headerBlurb("ALONE scale","A Clinical Measure of Loneliness","Select option to calculate score") +

selectradio([["tblable_calc_form_A0","1","Yes"],["tblable_calc_form_A1","2","Sometimes"],["tblable_calc_form_A2","3","No"]],"tblable_calc_form_A","A Are you emotionally Appealing to others?","ALONE();") +

selectradio([["tblable_calc_form_L0","3","Yes"],["tblable_calc_form_L1","2","Sometimes"],["tblable_calc_form_L2","1","No"]],"tblable_calc_form_L","L Are you Lonely?","ALONE();") +

selectradio([["tblable_calc_form_O0","1","Yes"],["tblable_calc_form_O1","2","Sometimes"],["tblable_calc_form_O2","3","No"]],"tblable_calc_form_O","O Are you Outgoing/friendly?","ALONE();") +

selectradio([["tblable_calc_form_N0","3","Yes"],["tblable_calc_form_N1","2","Sometimes"],["tblable_calc_form_N2","1","No"]],"tblable_calc_form_N","N Do you feel you have No friends?","ALONE();") +

selectradio([["tblable_calc_form_E0","3","Yes"],["tblable_calc_form_E1","2","Sometimes"],["tblable_calc_form_E2","1","No"]],"tblable_calc_form_E","E Are you Emotionally upset (sad)?","ALONE();") +

'    <div id="result" class="alert alert-success">' +
'        <div><b>ALONE Scale score = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); ALONE(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9098380/">Deol ES, Yamashita K, Elliott S, Malmstorm TK, Morley JE. Validation of the ALONE Scale: A Clinical Measure of Loneliness. The journal of nutrition, health & aging. 2022 May 12:1-4.</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
resetCalc(); // required to set the default radio button
ALONE();
