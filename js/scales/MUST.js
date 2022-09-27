// MUST Score Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 19/Aug/2022 Dean Jenkins

// Since I don't like the way some websites covet these trivial algorithms
// and try to monetize them by licensing them or pushing adverts this
// code has been released under the following license.
// Creative Commons Attribution 4.0 International (CC BY 4.0)
// https://creativecommons.org/licenses/by/4.0/


function MUST()
{
    var BMI=getvaluefromradio("tblable_calc_form_BMI");
    var weightloss=getvaluefromradio("tblable_calc_form_weightloss");
    var acute=getvaluefromcheckbox("tblable_calc_form_acute");

    var score = parseFloat(BMI + weightloss + acute);
    document.getElementById("tblable_calc_form_score").innerHTML = score.toString();

    var summaryhtml="";

    if (score==0) {
        summaryhtml = summaryhtml + "Low risk. Routine clinical care. Repeat screening hospital weekly, care homes monthly, community annually for special groups e.g. age >75 years";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score==1) {
        summaryhtml = summaryhtml + "Moderate risk. Observe. Document dietary intake for 3 days if subject in hospital or care home. If improved or adequate intake - little clinical concern: if no improvement - clinical concern: follow local policy. Repeat screening hospital weekly, care home at least monthly, community at least every 2 - 3 months.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-warning");
    }
    if (score>1) {
        summaryhtml = summaryhtml + "High risk. Treat. Refer to dietitian, Nutritional Support Team or implement local policy Improve and increase overall nutritional intake Monitor and review care plan Hospital – weekly, Care Home – monthly, Community – monthly";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }

    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    uncheckradio("tblable_calc_form_BMI");
    checkradio("tblable_calc_form_BMI0");
    uncheckradio("tblable_calc_form_weightloss");
    checkradio("tblable_calc_form_weightloss0");
    uncheck("tblable_calc_form_acute");
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

headerBlurb("MUST score","Malnutrition Universal Screening Tool","Tick or select all that apply") +

simpleheader("BMI") +
simpleradio("tblable_calc_form_BMI0","tblable_calc_form_BMI","0","BMI kg/m<sup>2</sup>&gt;20(>30 Obese) (0)","MUST();") +
simpleradio("tblable_calc_form_BMI1","tblable_calc_form_BMI","1","BMI kg/m<sup>2</sup>&gt;18.5 - 20 (1)","MUST();") +
simpleradio("tblable_calc_form_BMI2","tblable_calc_form_BMI","2","BMI kg/m<sup>2</sup>>&lt18.5 (2)","MUST();") +
simpleheader("Weight loss") +
simpleradio("tblable_calc_form_weightloss0","tblable_calc_form_weightloss","0","Unplanned weight loss past 3 - 6 months &lt;5% (0)","MUST();") +
simpleradio("tblable_calc_form_weightloss1","tblable_calc_form_weightloss","1","Unplanned weight loss past 3 - 6 months 5-10% (1)","MUST();") +
simpleradio("tblable_calc_form_weightloss2","tblable_calc_form_weightloss","2","Unplanned weight loss past 3 - 6 months &gt;10% (2)","MUST();") +
simpleheader("Acute illness") +
simplecheckbox("tblable_calc_form_acute","2","acutely ill and there has been or is likely to be no nutritional intake for &gt;5 days (2)","MUST();") +

'    <div id="result" class="alert alert-success">' +
'        <div><b>MUST score score = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); MUST(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="https://www.bapen.org.uk/pdfs/must/must-report.pdf">Elia M. The ‘MUST’report. Nutritional screening of adults: a multidisciplinary responsibility. 2003.</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
resetCalc(); // required to set the default radio button
MUST();
