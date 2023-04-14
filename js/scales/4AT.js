// 4AT test for delirium
// Javascript to load a bootstrap-styled calculator on a page
// created 14/Apr/2023 Dean Jenkins

// Since I don't like the way some websites covet these trivial algorithms
// and try to monetize them by licensing them or pushing adverts this
// code has been released under the following license.
// Creative Commons Attribution 4.0 International (CC BY 4.0)
// https://creativecommons.org/licenses/by/4.0/

function AT4()
{
    var A1=getvaluefromradio("tblable_calc_form_Alertness");
    var A2=getvaluefromradio("tblable_calc_form_AMT4");
    var A3=getvaluefromradio("tblable_calc_form_Attention");
    var A4=getvaluefromradio("tblable_calc_form_Acute");

    var score = parseFloat(A1 + A2 + A3 + A4);
    if (score>-1) {
        document.getElementById("tblable_calc_form_score").innerHTML = score.toString();
    } else {
        document.getElementById("tblable_calc_form_score").innerHTML = "Score error";
        $('#result').removeClass();
        $('#result').addClass("alert alert-secondary");
    }

    var summaryhtml="";

    if (score==0) {
        summaryhtml = summaryhtml + "Delirium or severe cognitive impairment unlikely.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score>0 && score <4) {
        summaryhtml = summaryhtml + "Possible cognitive impairment.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-warning");
    }
    if (score>3) {
        summaryhtml = summaryhtml + "Possible delirium +/- cognitive impairment.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }

    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    uncheckradio("tblable_calc_form_Alertness");
    checkradio("tblable_calc_form_Alertness0");
    uncheckradio("tblable_calc_form_AMT4");
    checkradio("tblable_calc_form_AMT40");
    uncheckradio("tblable_calc_form_Attention");
    checkradio("tblable_calc_form_Attention0");
    uncheckradio("tblable_calc_form_Acute");
    checkradio("tblable_calc_form_Acute0");
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

headerBlurb("4AT","The 4 'A's Test for delirium","Tick the best responses to document score") +

simpleheader("Alertness. If asleep, attempt to wake with speech or a gentle touch on the shoulder. Ask the patient to state their name and address to assist rating.") +
simpleradio("tblable_calc_form_Alertness0","tblable_calc_form_Alertness","0","Normal (fully alert, but not agitated, throughout assessment). (0)","AT4();") +
simpleradio("tblable_calc_form_Alertness1","tblable_calc_form_Alertness","0","Mild sleepiness for &lt;10 seconds after waking, then normal. (0)","AT4();") +
simpleradio("tblable_calc_form_Alertness2","tblable_calc_form_Alertness","4","Clearly abnormal. (4)","AT4();") +

simpleheader("AMT4. Age, date of birth, place (name of the hospital or building), current year.") +
simpleradio("tblable_calc_form_AMT40","tblable_calc_form_AMT4","0","No mistakes. (0)","AT4();") +
simpleradio("tblable_calc_form_AMT41","tblable_calc_form_AMT4","1","1 mistake. (1)","AT4();") +
simpleradio("tblable_calc_form_AMT42","tblable_calc_form_AMT4","2","2 or more mistakes/untestable. (2)","AT4();") +

simpleheader("Attention. Ask the patient: 'Please tell me the months of the year in backwards order, starting at December.' To assist initial understanding one prompt of 'what is the month before December?' is permitted. ") +
simpleradio("tblable_calc_form_Attention0","tblable_calc_form_Attention","0","Achieves 7 months or more correctly. (0)","AT4();") +
simpleradio("tblable_calc_form_Attention1","tblable_calc_form_Attention","1","Starts but scores &lt;7 months / refuses to start. (1)","AT4();") +
simpleradio("tblable_calc_form_Attention2","tblable_calc_form_Attention","2","Untestable (cannot start because unwell, drowsy, inattentive). (2)","AT4();") +

simpleheader("Acute change or fluctuating course. Evidence of significant change or fluctuation in alertness, cognition, other mental function (eg. paranoia, hallucinations) arising over the last 2 weeks and still evident in the last 24hrs.  ") +
simpleradio("tblable_calc_form_Acute0","tblable_calc_form_Acute","0","No. (0)","AT4();") +
simpleradio("tblable_calc_form_Acute1","tblable_calc_form_Acute","4","Yes. (4)","AT4();") +

'    <div id="result" class="alert alert-success">' +
'        <div><b>4AT = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); AT4(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="https://www.the4at.com/">the4AT.com</a> a website by Alasdair MacLullich (accessed April 2023)</p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
resetCalc(); // required to set the default radio button
AT4();
