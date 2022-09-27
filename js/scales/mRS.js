// Modified Rankin Score Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 31/Aug/2022 Dean Jenkins

// Since I don't like the way some websites covet these trivial algorithms
// and try to monetize them by licensing them or pushing adverts this
// code has been released under the following license.
// Creative Commons Attribution 4.0 International (CC BY 4.0)
// https://creativecommons.org/licenses/by/4.0/


function mRS()
{

    var mRS=getvaluefromradio("tblable_calc_form_mRS");

    var score = parseFloat(mRS);
    document.getElementById("tblable_calc_form_score").innerHTML = score.toString();

    var summaryhtml="";

    if (score<3) {
        summaryhtml = summaryhtml + "Slight or no disability";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score>2 && score <5) {
        summaryhtml = summaryhtml + "Moderate disability";
        $('#result').removeClass();
        $('#result').addClass("alert alert-warning");
    }
    if (score==5) {
        summaryhtml = summaryhtml + "Severe disability";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }
    if (score==6) {
        summaryhtml = summaryhtml + "Dead";
        $('#result').removeClass();
        $('#result').addClass("alert alert-secondary");
    }

    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    uncheckradio("tblable_calc_form_mRS");
    checkradio("tblable_calc_form_mRS0");
}


var calculatorHTML = '' +
'<div class="calculator" id="tblable_calc">' +

'  <div name="hform" id="tblable_calc_form">' +

headerBlurb("Modified Rankin Score","A measure of disability","Select option to calculate the score") +


simpleradio("tblable_calc_form_mRS0","tblable_calc_form_mRS","0","No symptoms. (0).","mRS();") +
simpleradio("tblable_calc_form_mRS1","tblable_calc_form_mRS","1","No significant disability. Able to carry out all usual activities, despite some symptoms. (1).","mRS();") +
simpleradio("tblable_calc_form_mRS2","tblable_calc_form_mRS","2","Slight disability. Able to look after own affairs without assistance, but unable to carry out all previous activities. (2).","mRS();") +
simpleradio("tblable_calc_form_mRS3","tblable_calc_form_mRS","3","Moderate disability. Requires some help, but able to walk unassisted. (3).","mRS();") +
simpleradio("tblable_calc_form_mRS4","tblable_calc_form_mRS","4","Moderately severe disability. Unable to attend to own bodily needs without assistance, and unable to walk unassisted. (4).","mRS();") +
simpleradio("tblable_calc_form_mRS5","tblable_calc_form_mRS","5","Severe disability. Requires constant nursing care and attention, bedridden, incontinent. (5).","mRS();") +
simpleradio("tblable_calc_form_mRS6","tblable_calc_form_mRS","6","Dead. (6).","mRS();") +

'    <div id="result" class="alert alert-success">' +
'        <div><b>Modified Rankin Score = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); mRS(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="https://doi.org/10.1177/003693305700200401">Rankin J (May 1957). "Cerebral vascular accidents in patients over the age of 60. II. Prognosis". Scott Med J 2 (5): 200–15</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
resetCalc(); // required to set the default radio button
mRS();
