// NIHSS Score Calculator
// Javascript to load a bootstrap-styled calculator on a page
// created 21/Aug/2022 Dean Jenkins

// This code has been released under the following license.
// Creative Commons Attribution 4.0 International (CC BY 4.0)
// https://creativecommons.org/licenses/by/4.0/



function NIHSS()
{
    var NIHSS1a=getvaluefromradio("tblable_calc_form_1a");
    var NIHSS1b=getvaluefromradio("tblable_calc_form_1b");
    var NIHSS1c=getvaluefromradio("tblable_calc_form_1c");
    var NIHSS2=getvaluefromradio("tblable_calc_form_2");
    var NIHSS3=getvaluefromradio("tblable_calc_form_3");
    var NIHSS4=getvaluefromradio("tblable_calc_form_4");
    var NIHSS5a=getvaluefromradio("tblable_calc_form_5a");
    var NIHSS5b=getvaluefromradio("tblable_calc_form_5b");
    var NIHSS6a=getvaluefromradio("tblable_calc_form_6a");
    var NIHSS6b=getvaluefromradio("tblable_calc_form_6b");
    var NIHSS7=getvaluefromradio("tblable_calc_form_7");
    var NIHSS8=getvaluefromradio("tblable_calc_form_8");
    var NIHSS9=getvaluefromradio("tblable_calc_form_9");
    var NIHSS10=getvaluefromradio("tblable_calc_form_10");
    var NIHSS11=getvaluefromradio("tblable_calc_form_11");

    var score = parseFloat(NIHSS1a + NIHSS1b + NIHSS1c + NIHSS2 + NIHSS3 + NIHSS4 + NIHSS5a + NIHSS5b + NIHSS6a + NIHSS6b + NIHSS7 + NIHSS8 + NIHSS9 + NIHSS10 + NIHSS11);
    document.getElementById("tblable_calc_form_score").innerHTML = score.toString();

    var summaryhtml="";

    if (score==0) {
        summaryhtml = summaryhtml + "No stroke symptoms";
        $('#result').removeClass();
        $('#result').addClass("alert alert-success");
    };
    if (score>0 && score<5) {
        summaryhtml = summaryhtml + "Minor stroke";
        $('#result').removeClass();
        $('#result').addClass("alert alert-warning");
    };
    if (score>4 && score<16) {
        summaryhtml = summaryhtml + "Moderate stroke";
        $('#result').removeClass();
        $('#result').addClass("alert alert-warning");
    };
    if (score>15 && score<21) {
        summaryhtml = summaryhtml + "Moderate to severe stroke";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    };
    if (score>20) {
        summaryhtml = summaryhtml + "Severe stroke";
        $('#result').removeClass();
        $('#result').addClass("alert alert-danger");
    };

    document.getElementById("tblable_calc_form_comment").innerHTML = summaryhtml;
}

function resetCalc() {
    uncheckradio("tblable_calc_form_1a");
    checkradio("tblable_calc_form_1a0");
    uncheckradio("tblable_calc_form_1b");
    checkradio("tblable_calc_form_1b0");
    uncheckradio("tblable_calc_form_1c");
    checkradio("tblable_calc_form_1c0");
    uncheckradio("tblable_calc_form_2");
    checkradio("tblable_calc_form_20");
    uncheckradio("tblable_calc_form_3");
    checkradio("tblable_calc_form_30");
    uncheckradio("tblable_calc_form_4");
    checkradio("tblable_calc_form_40");
    uncheckradio("tblable_calc_form_5a");
    checkradio("tblable_calc_form_5a0");
    uncheckradio("tblable_calc_form_5b");
    checkradio("tblable_calc_form_5b0");
    uncheckradio("tblable_calc_form_6a");
    checkradio("tblable_calc_form_6a0");
    uncheckradio("tblable_calc_form_6b");
    checkradio("tblable_calc_form_6b0");
    uncheckradio("tblable_calc_form_7");
    checkradio("tblable_calc_form_70");
    uncheckradio("tblable_calc_form_8");
    checkradio("tblable_calc_form_80");
    uncheckradio("tblable_calc_form_9");
    checkradio("tblable_calc_form_90");
    uncheckradio("tblable_calc_form_10");
    checkradio("tblable_calc_form_100");
    uncheckradio("tblable_calc_form_11");
    checkradio("tblable_calc_form_110");
}


var calculatorHTML = '' +
'<div class="calculator" id="tblable_calc">' +

'  <div name="hform" id="tblable_calc_form">' +

headerBlurb("NIH Stroke Scale","A clinical tool to measure the impairment caused by a stroke. This scale requires training to fully explain the tasks and to apply consistently please visit the NIH website (link below) or seek local advice from your stroke team.","Select option to calculate score") +

simpleheader("Level of Consciousness") +
simpleradio("tblable_calc_form_1a0","tblable_calc_form_1a","0","Alert, keenly responsive. (0)","NIHSS();") +
simpleradio("tblable_calc_form_1a1","tblable_calc_form_1a","1","Not alert but arousable by minor stimulation to obey, answer, or respond. (1)","NIHSS();") +
simpleradio("tblable_calc_form_1a2","tblable_calc_form_1a","2","Not alert requires repeated stimulation to attend, or is obtunded and requires strong or painful stimulation to make movements (not stereotyped). (2)","NIHSS();") +
simpleradio("tblable_calc_form_1a3","tblable_calc_form_1a","3","Responds only with reflex motor or autonomic effects, or totally unresponsive, flaccid, and areflexic. (3)","NIHSS();") +

simpleheader("Level of Consciousness - month and age") +
simpleradio("tblable_calc_form_1b0","tblable_calc_form_1b","0","Answers both questions correctly. (0)","NIHSS();") +
simpleradio("tblable_calc_form_1b1","tblable_calc_form_1b","1","Answers one question correctly. (1)","NIHSS();") +
simpleradio("tblable_calc_form_1b2","tblable_calc_form_1b","2","Answers neither question correctly. (2)","NIHSS();") +

simpleheader("Level of Consciousness - eyes and grip") +
simpleradio("tblable_calc_form_1c0","tblable_calc_form_1c","0","Performs both tasks correctly. (0)","NIHSS();") +
simpleradio("tblable_calc_form_1c1","tblable_calc_form_1c","1","Performs one task correctly. (1)","NIHSS();") +
simpleradio("tblable_calc_form_1c2","tblable_calc_form_1c","2","Performs neither task correctly. (2)","NIHSS();") +

simpleheader("Best Gaze") +
simpleradio("tblable_calc_form_20","tblable_calc_form_2","0","Normal. (0)","NIHSS();") +
simpleradio("tblable_calc_form_21","tblable_calc_form_2","1","Partial gaze palsy; gaze is abnormal in one or both eyes, but forced deviation or total gaze paresis is not present. (1)","NIHSS();") +
simpleradio("tblable_calc_form_22","tblable_calc_form_2","2","Forced deviation, or total gaze paresis is not overcome by the oculocephalic maneuver. (2)","NIHSS();") +

simpleheader("Visual") +
simpleradio("tblable_calc_form_30","tblable_calc_form_3","0","No visual loss. (0)","NIHSS();") +
simpleradio("tblable_calc_form_31","tblable_calc_form_3","1","Partial hemianopia. (1)","NIHSS();") +
simpleradio("tblable_calc_form_32","tblable_calc_form_3","2","Complete hemianopia. (2)","NIHSS();") +
simpleradio("tblable_calc_form_33","tblable_calc_form_3","3","Bilateral hemianopia (blind including cortical blindness). (3)","NIHSS();") +

simpleheader("Facial Palsy") +
simpleradio("tblable_calc_form_40","tblable_calc_form_4","0","Normal symmetrical movements. (0)","NIHSS();") +
simpleradio("tblable_calc_form_41","tblable_calc_form_4","1","Minor paralysis (flattened nasolabial fold, asymmetry on smiling). (1)","NIHSS();") +
simpleradio("tblable_calc_form_42","tblable_calc_form_4","2","Partial paralysis (total or near-total paralysis of lower face). (2)","NIHSS();") +
simpleradio("tblable_calc_form_43","tblable_calc_form_4","3","Complete paralysis of one or both sides (absence of facial movement in the upper and lower face). (3)","NIHSS();") +

simpleheader("Motor Arm - Left Arm") +
simpleradio("tblable_calc_form_5a0","tblable_calc_form_5a","0","No drift; limb holds 90 (or 45) degrees for full 10 seconds. (0)","NIHSS();") +
simpleradio("tblable_calc_form_5a1","tblable_calc_form_5a","1","Drift; limb holds 90 (or 45) degrees, but drifts down before full 10 seconds; does not hit bed or other support. (1)","NIHSS();") +
simpleradio("tblable_calc_form_5a2","tblable_calc_form_5a","2","Some effort against gravity; limb cannot get to or maintain (if cued) 90 (or 45) degrees, drifts down to bed, but has some effort against gravity. (2)","NIHSS();") +
simpleradio("tblable_calc_form_5a3","tblable_calc_form_5a","3","No effort against gravity; limb falls. (3)","NIHSS();") +
simpleradio("tblable_calc_form_5a4","tblable_calc_form_5a","4","No movement. (4)","NIHSS();") +
simpleradio("tblable_calc_form_5aun","tblable_calc_form_5a","0","Amputation or joint fusion. (0)","NIHSS();") +

simpleheader("Motor Arm - Right Arm") +
simpleradio("tblable_calc_form_5b0","tblable_calc_form_5b","0","No drift; limb holds 90 (or 45) degrees for full 10 seconds. (0)","NIHSS();") +
simpleradio("tblable_calc_form_5b1","tblable_calc_form_5b","1","Drift; limb holds 90 (or 45) degrees, but drifts down before full 10 seconds; does not hit bed or other support. (1)","NIHSS();") +
simpleradio("tblable_calc_form_5b2","tblable_calc_form_5b","2","Some effort against gravity; limb cannot get to or maintain (if cued) 90 (or 45) degrees, drifts down to bed, but has some effort against gravity. (2)","NIHSS();") +
simpleradio("tblable_calc_form_5b3","tblable_calc_form_5b","3","No effort against gravity; limb falls. (3)","NIHSS();") +
simpleradio("tblable_calc_form_5b4","tblable_calc_form_5b","4","No movement. (4)","NIHSS();") +
simpleradio("tblable_calc_form_5bun","tblable_calc_form_5b","0","Amputation or joint fusion. (0)","NIHSS();") +

simpleheader("Motor Leg - Left Leg") +
simpleradio("tblable_calc_form_6a0","tblable_calc_form_6a","0","No drift; leg holds 30-degree position for full 5 seconds. (0)","NIHSS();") +
simpleradio("tblable_calc_form_6a1","tblable_calc_form_6a","1","Drift; leg falls by the end of the 5-second period but does not hit the bed. (1)","NIHSS();") +
simpleradio("tblable_calc_form_6a2","tblable_calc_form_6a","2","Some effort against gravity; leg falls to bed by 5 seconds but has some effort against gravity. (2)","NIHSS();") +
simpleradio("tblable_calc_form_6a3","tblable_calc_form_6a","3","No effort against gravity; limb falls. (3)","NIHSS();") +
simpleradio("tblable_calc_form_6a4","tblable_calc_form_6a","4","No movement. (4)","NIHSS();") +
simpleradio("tblable_calc_form_6aun","tblable_calc_form_6a","0","Amputation or joint fusion. (0)","NIHSS();") +

simpleheader("Motor Leg - Right Leg") +
simpleradio("tblable_calc_form_6b0","tblable_calc_form_6b","0","No drift; leg holds 30-degree position for full 5 seconds. (0)","NIHSS();") +
simpleradio("tblable_calc_form_6b1","tblable_calc_form_6b","1","Drift; leg falls by the end of the 5-second period but does not hit the bed. (1)","NIHSS();") +
simpleradio("tblable_calc_form_6b2","tblable_calc_form_6b","2","Some effort against gravity; leg falls to bed by 5 seconds but has some effort against gravity. (2)","NIHSS();") +
simpleradio("tblable_calc_form_6b3","tblable_calc_form_6b","3","No effort against gravity; limb falls. (3)","NIHSS();") +
simpleradio("tblable_calc_form_6b4","tblable_calc_form_6b","4","No movement. (4)","NIHSS();") +
simpleradio("tblable_calc_form_6bun","tblable_calc_form_6b","0","Amputation or joint fusion. (0)","NIHSS();") +

simpleheader("Limb Ataxia") +
simpleradio("tblable_calc_form_70","tblable_calc_form_7","0","Absent. (0)","NIHSS();") +
simpleradio("tblable_calc_form_71","tblable_calc_form_7","1","Present in one limb. (1)","NIHSS();") +
simpleradio("tblable_calc_form_72","tblable_calc_form_7","2","Present in two limbs. (2)","NIHSS();") +
simpleradio("tblable_calc_form_7un","tblable_calc_form_7","0","Amputation or joint fusion. (0)","NIHSS();") +

simpleheader("Sensory") +
simpleradio("tblable_calc_form_80","tblable_calc_form_8","0","Normal; no sensory loss. (0)","NIHSS();") +
simpleradio("tblable_calc_form_81","tblable_calc_form_8","1","Mild-to-moderate sensory loss; patient feels pinprick is less sharp or is dull on the affected side; or there is a loss of superficial pain with pinprick, but patient is aware of being touched. (1)","NIHSS();") +
simpleradio("tblable_calc_form_82","tblable_calc_form_8","2","Severe or total sensory loss; patient is not aware of being touched in the face, arm, and leg. (2)","NIHSS();") +

simpleheader("Best Language (use scene, objects, and sentences below)") +
simpleradio("tblable_calc_form_90","tblable_calc_form_9","0","No aphasia; normal. (0)","NIHSS();") +
simpleradio("tblable_calc_form_91","tblable_calc_form_9","1","Mild-to-moderate aphasia; some obvious loss of fluency or facility of comprehension, without significant limitation on ideas expressed or form of expression. Reduction of speech and/or comprehension, however, makes conversation about provided materials difficult or impossible. For example, in conversation about provided materials, examiner can identify picture or naming card content from patient’s response. (1)","NIHSS();") +
simpleradio("tblable_calc_form_92","tblable_calc_form_9","2","Severe aphasia; all communication is through fragmentary expression; great need for inference, questioning, and guessing by the listener. Range of information that can be exchanged is limited; listener carries burden of communication. Examiner cannot identify materials provided from patient response. (2)","NIHSS();") +
simpleradio("tblable_calc_form_93","tblable_calc_form_9","3","Mute, global aphasia; no usable speech or auditory comprehension. (3)","NIHSS();") +

image('js/scales/NIHSS-scene.png') +
image('js/scales/NIHSS-objects-traced.png') +
image('js/scales/NIHSS-sentences.png',1) +


simpleheader("Dysarthria (use words below)") +
simpleradio("tblable_calc_form_100","tblable_calc_form_10","0","Normal. (0)","NIHSS();") +
simpleradio("tblable_calc_form_101","tblable_calc_form_10","1","Mild-to-moderate dysarthria; patient slurs at least some words and, at worst, can be understood with some difficulty. (1)","NIHSS();") +
simpleradio("tblable_calc_form_102","tblable_calc_form_10","2","Severe dysarthria; patient’s speech is so slurred as to be unintelligible in the absence of or out of proportion to any dysphasia, or is mute/anarthric. (2)","NIHSS();") +
simpleradio("tblable_calc_form_10un","tblable_calc_form_10","0","Intubated or other physical barrier. (0)","NIHSS();") +

image('js/scales/NIHSS-words.png',1) +

simpleheader("Extinction and Inattention") +
simpleradio("tblable_calc_form_110","tblable_calc_form_11","0","No abnormality. (0)","NIHSS();") +
simpleradio("tblable_calc_form_111","tblable_calc_form_11","1","Visual, tactile, auditory, spatial, or personal inattention, or extinction to bilateral simultaneous stimulation in one of the sensory modalities. (1)","NIHSS();") +
simpleradio("tblable_calc_form_112","tblable_calc_form_11","2","Profound hemi-inattention or extinction to more than one modality; does not recognize own hand or orients to only one side of space. (2)","NIHSS();") +



'    <div id="result" class="alert alert-success">' +
'        <div><b>NIHSS Scale score = <span id="tblable_calc_form_score"></span></b>. ' +
'        <span id="tblable_calc_form_comment"></span></div>' +
'    </div>' +

'    <div class="reset">' +
'        <input value="Reset" class="btn btn-secondary" onclick="resetCalc(); NIHSS(); return false;" type="reset">' +
'    </div>' +

'  </div><!-- end hform -->' +

'</div><!-- end calculator -->' +
'<p class="small">Source <a href="https://www.ninds.nih.gov/stroke-scales-and-related-information">National Institutes of Health: Stroke Scales and Related Information. 2019.</a></p>' +
'';

function calcHTML() {
    document.write('<div id="calc"></div>');

    document.getElementById("calc").innerHTML = calculatorHTML;
}

calcHTML();
resetCalc(); // required to set the default radio button
NIHSS();
