// Glasgow Coma Scale Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 1/Sep/2022 Dean Jenkins

// Since I don't like the way some websites covet these trivial algorithms
// and try to monetize them by licensing them or pushing adverts this
// code has been released under the following license.
// Creative Commons Attribution 4.0 International (CC BY 4.0)
// https://creativecommons.org/licenses/by/4.0/

function GCS()
{
    var E=getvaluefromradio("tblable_calc_form_E");
    var V=getvaluefromradio("tblable_calc_form_V");
    var M=getvaluefromradio("tblable_calc_form_M");

    var score = parseFloat(E + V + M);
    if (E>0 && V>0 && M>0) {
        document.getElementById("tblable_calc_form_score").innerHTML = score.toString();
    } else {
        document.getElementById("tblable_calc_form_score").innerHTML = "Score not relevant";
        $('#result').removeClass();
        $('#result').addClass("alert alert-secondary");
    }

    var summaryhtml="";

    var GCSsummary = "(E=";
    if (E==0) {
        GCSsummary = GCSsummary + "NT, ";
    } else {
        GCSsummary = GCSsummary + E.toString() + ", ";
    }
    if (V==0) {
        GCSsummary = GCSsummary + "V=NT, ";
    } else {
        GCSsummary = GCSsummary + "V=" + V.toString() + ", ";
    }    
    if (M==0) {
        GCSsummary = GCSsummary + "M=NT)";
    } else {
        GCSsummary = GCSsummary + "M=" + M.toString() + ")";
    }    

    if (score==15) {
        summaryhtml = summaryhtml + "Normal.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    }
    if (score==3 && E!=0 && V!=0 && M!=0) {
        summaryhtml = summaryhtml + "Deep coma.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    }
    if (score<15 && score>0 && score!=3) {
        summaryhtml = summaryhtml + "Coma.";
        $('#result').removeClass();
        $('#result').addClass("alert alert-warning");
    }

    document.getElementById("tblable_calc_form_comment").innerHTML = GCSsummary + " " + summaryhtml;
}

function resetCalc() {
    uncheckradio("tblable_calc_form_E");
    checkradio("tblable_calc_form_E0");
    uncheckradio("tblable_calc_form_V");
    checkradio("tblable_calc_form_V0");
    uncheckradio("tblable_calc_form_M");
    checkradio("tblable_calc_form_M0");
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

headerBlurb("GCS","Glasgow Coma Scale","Tick the best responses to document score") +

simpleheader("Eye opening") +
simpleradio("tblable_calc_form_E4","tblable_calc_form_E","4","Open before stimulus. Spontaneous (4)","GCS();") +
simpleradio("tblable_calc_form_E3","tblable_calc_form_E","3","After spoken or shouted request. To sound (3)","GCS();") +
simpleradio("tblable_calc_form_E2","tblable_calc_form_E","2","After finger tip stimulus. To pressure (2)","GCS();") +
simpleradio("tblable_calc_form_E1","tblable_calc_form_E","1","No opening at any time, no interfering factor. None (1)","GCS();") +
simpleradio("tblable_calc_form_E0","tblable_calc_form_E","0","Closed by local factor. Non testable (NT)","GCS();") +

simpleheader("Verbal response") +
simpleradio("tblable_calc_form_V5","tblable_calc_form_V","5","Correctly gives name, place and date. Orientated (5)","GCS();") +
simpleradio("tblable_calc_form_V4","tblable_calc_form_V","4","Not orientated but communication coherently. Confused (4)","GCS();") +
simpleradio("tblable_calc_form_V3","tblable_calc_form_V","3","Intelligible single words. Words (3)","GCS();") +
simpleradio("tblable_calc_form_V2","tblable_calc_form_V","2","Only moans / groans. Sounds (2)","GCS();") +
simpleradio("tblable_calc_form_V1","tblable_calc_form_V","1","No audible response, no interfering factor. None (1)","GCS();") +
simpleradio("tblable_calc_form_V0","tblable_calc_form_V","0","Factor interferring with communication. Non testable (NT)","GCS();") +

simpleheader("Best motor response") +
simpleradio("tblable_calc_form_M6","tblable_calc_form_M","6","Obey 2-part request. Obeys commands (6)","GCS();") +
simpleradio("tblable_calc_form_M5","tblable_calc_form_M","5","Brings hand above clavicle to stimulus on head neck. Localising (5)","GCS();") +
simpleradio("tblable_calc_form_M4","tblable_calc_form_M","4","Bends arm at elbow rapidly but features not predominantly abnormal. Normal flexion (4)","GCS();") +
simpleradio("tblable_calc_form_M3","tblable_calc_form_M","3","Bends arm at elbow, features clearly predominantly abnormal. Abnormal flexion (3)","GCS();") +
simpleradio("tblable_calc_form_M2","tblable_calc_form_M","2","Extends arm at elbow. Extension (2)","GCS();") +
simpleradio("tblable_calc_form_M1","tblable_calc_form_M","1","No movement in arms / legs, no interfering factor. None (1)","GCS();") +
simpleradio("tblable_calc_form_M0","tblable_calc_form_M","0","Paralysed or other limiting factor. Non testable (NT)","GCS();") +


'    <div id="result" class="alert alert-success">' +
'        <div><b>GCS = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); GCS(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="https://www.glasgowcomascale.org/">The Glasgow structured approach to assessment of the Glasgow Coma Scale</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
resetCalc(); // required to set the default radio button
GCS();
