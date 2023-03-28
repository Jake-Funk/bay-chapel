var num = 0
var dnum = 0

function getstarted() {
    const questionContainer = document.getElementById("question-container")
    questionContainer.classList.remove("hide")
    
    var introSection = document.getElementById("intro");
    introSection.classList.add("hide")
    
    var intro = document.getElementById("intro");
    intro.setAttribute("class", "hide");

    const selfBtn = document.getElementById('getstarted')
    selfBtn.setAttribute('class', 'hide')
}

var input_children = []
var radioinputs = document.getElementsByClassName("radioinputs");

var making_progress = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            var probar = document.getElementById("progbar");
            probar.value += 1.3;
        }
    };
})();


function next() {
    num++;
    window.scrollTo({top: 0, behavior: 'smooth'})
    var probar = document.getElementById("progbar");
    probar.value += 12.5;
    if (num > 0) {
        var bkbtn = document.getElementById("back_button");
        bkbtn.setAttribute("class", "back_button btn")
    }
    if (num > 6) {
        var nxtbtn = document.getElementById("next_button");
        nxtbtn.setAttribute("class", "btn hide");
        var resultsbtn = document.getElementById("get_results");
        resultsbtn.setAttribute("class", "btn");
    }
    switch (num) {
        case 1:
            document.getElementById("set1").setAttribute("class", "hide");
            document.getElementById("set2").setAttribute("class", "set1");
            break;
        case 2:
            document.getElementById("set2").setAttribute("class", "hide");
            document.getElementById("set3").setAttribute("class", "set1");
            break;
        case 3:
            document.getElementById("set3").setAttribute("class", "hide");
            document.getElementById("set4").setAttribute("class", "set1");
            break;
        case 4:
            document.getElementById("set4").setAttribute("class", "hide");
            document.getElementById("set5").setAttribute("class", "set1");
            break;
        case 5:
            document.getElementById("set5").setAttribute("class", "hide");
            document.getElementById("set6").setAttribute("class", "set1");
            break;
        case 6:
            document.getElementById("set6").setAttribute("class", "hide");
            document.getElementById("set7").setAttribute("class", "set1");
            break;
        case 7:
            document.getElementById("set7").setAttribute("class", "hide");
            document.getElementById("set8").setAttribute("class", "set1");
            break;
    }
}
function back() {
    num--;
    var probar = document.getElementById("progbar");
    probar.value -= 12.5;
    document.getElementById("gift_error_message").setAttribute("class", "hide")
    if (num < 1) {
        var bkbtn = document.getElementById("back_button");
        bkbtn.setAttribute("class", "btn hide");
    }
    if (num < 8) {
        var nextbtn = document.getElementById("next_button");
        nextbtn.setAttribute("class", "next_button btn");
        var resultsbtn = document.getElementById("get_results");
        resultsbtn.setAttribute("class", "hide");
    }
    switch (num) {
        case 0:
            document.getElementById("set1").setAttribute("class", "set1");
            document.getElementById("set2").setAttribute("class", "hide");
            break;
        case 1:
            document.getElementById("set2").setAttribute("class", "set1");
            document.getElementById("set3").setAttribute("class", "hide");
            break;
        case 2:
            document.getElementById("set3").setAttribute("class", "set1");
            document.getElementById("set4").setAttribute("class", "hide");
            break;
        case 3:
            document.getElementById("set4").setAttribute("class", "set1");
            document.getElementById("set5").setAttribute("class", "hide");
            break;
        case 4:
            document.getElementById("set5").setAttribute("class", "set1");
            document.getElementById("set6").setAttribute("class", "hide");
            break;
        case 5:
            document.getElementById("set6").setAttribute("class", "set1");
            document.getElementById("set7").setAttribute("class", "hide");
            break;
        case 6:
            document.getElementById("set7").setAttribute("class", "set1");
            document.getElementById("set8").setAttribute("class", "hide");
            break;
    }
}

function getresults() {
    try {
    var A_score = parseInt(document.querySelector('input[name="q1"]:checked').value) + parseInt(document.querySelector('input[name="q25"]:checked').value) + parseInt(document.querySelector('input[name="q49"]:checked').value);
    var B_score = parseInt(document.querySelector('input[name="q2"]:checked').value) + parseInt(document.querySelector('input[name="q26"]:checked').value) + parseInt(document.querySelector('input[name="q50"]:checked').value);
    var C_score = parseInt(document.querySelector('input[name="q3"]:checked').value) + parseInt(document.querySelector('input[name="q27"]:checked').value) + parseInt(document.querySelector('input[name="q51"]:checked').value);
    var D_score = parseInt(document.querySelector('input[name="q4"]:checked').value) + parseInt(document.querySelector('input[name="q28"]:checked').value) + parseInt(document.querySelector('input[name="q52"]:checked').value);
    var E_score = parseInt(document.querySelector('input[name="q5"]:checked').value) + parseInt(document.querySelector('input[name="q29"]:checked').value) + parseInt(document.querySelector('input[name="q53"]:checked').value);
    var F_score = parseInt(document.querySelector('input[name="q6"]:checked').value) + parseInt(document.querySelector('input[name="q30"]:checked').value) + parseInt(document.querySelector('input[name="q54"]:checked').value);
    var G_score = parseInt(document.querySelector('input[name="q7"]:checked').value) + parseInt(document.querySelector('input[name="q31"]:checked').value) + parseInt(document.querySelector('input[name="q55"]:checked').value);
    var H_score = parseInt(document.querySelector('input[name="q8"]:checked').value) + parseInt(document.querySelector('input[name="q32"]:checked').value) + parseInt(document.querySelector('input[name="q56"]:checked').value);
    var I_score = parseInt(document.querySelector('input[name="q9"]:checked').value) + parseInt(document.querySelector('input[name="q33"]:checked').value) + parseInt(document.querySelector('input[name="q57"]:checked').value);
    var J_score = parseInt(document.querySelector('input[name="q10"]:checked').value) + parseInt(document.querySelector('input[name="q34"]:checked').value) + parseInt(document.querySelector('input[name="q58"]:checked').value);
    var K_score = parseInt(document.querySelector('input[name="q11"]:checked').value) + parseInt(document.querySelector('input[name="q35"]:checked').value) + parseInt(document.querySelector('input[name="q59"]:checked').value);
    var L_score = parseInt(document.querySelector('input[name="q12"]:checked').value) + parseInt(document.querySelector('input[name="q36"]:checked').value) + parseInt(document.querySelector('input[name="q60"]:checked').value);
    var M_score = parseInt(document.querySelector('input[name="q13"]:checked').value) + parseInt(document.querySelector('input[name="q37"]:checked').value) + parseInt(document.querySelector('input[name="q61"]:checked').value);
    var N_score = parseInt(document.querySelector('input[name="q14"]:checked').value) + parseInt(document.querySelector('input[name="q38"]:checked').value) + parseInt(document.querySelector('input[name="q62"]:checked').value);
    var O_score = parseInt(document.querySelector('input[name="q15"]:checked').value) + parseInt(document.querySelector('input[name="q39"]:checked').value) + parseInt(document.querySelector('input[name="q63"]:checked').value);
    var P_score = parseInt(document.querySelector('input[name="q16"]:checked').value) + parseInt(document.querySelector('input[name="q40"]:checked').value) + parseInt(document.querySelector('input[name="q64"]:checked').value);
    var Q_score = parseInt(document.querySelector('input[name="q17"]:checked').value) + parseInt(document.querySelector('input[name="q41"]:checked').value) + parseInt(document.querySelector('input[name="q65"]:checked').value);
    var R_score = parseInt(document.querySelector('input[name="q18"]:checked').value) + parseInt(document.querySelector('input[name="q42"]:checked').value) + parseInt(document.querySelector('input[name="q66"]:checked').value);
    var S_score = parseInt(document.querySelector('input[name="q19"]:checked').value) + parseInt(document.querySelector('input[name="q43"]:checked').value) + parseInt(document.querySelector('input[name="q67"]:checked').value);
    var T_score = parseInt(document.querySelector('input[name="q20"]:checked').value) + parseInt(document.querySelector('input[name="q44"]:checked').value) + parseInt(document.querySelector('input[name="q68"]:checked').value);
    var U_score = parseInt(document.querySelector('input[name="q21"]:checked').value) + parseInt(document.querySelector('input[name="q45"]:checked').value) + parseInt(document.querySelector('input[name="q69"]:checked').value);
    var V_score = parseInt(document.querySelector('input[name="q22"]:checked').value) + parseInt(document.querySelector('input[name="q46"]:checked').value) + parseInt(document.querySelector('input[name="q70"]:checked').value);
    var W_score = parseInt(document.querySelector('input[name="q23"]:checked').value) + parseInt(document.querySelector('input[name="q47"]:checked').value) + parseInt(document.querySelector('input[name="q71"]:checked').value);
    var X_score = parseInt(document.querySelector('input[name="q24"]:checked').value) + parseInt(document.querySelector('input[name="q48"]:checked').value) + parseInt(document.querySelector('input[name="q72"]:checked').value);
    
    const results = [
        {name: "Administration",    score: A_score, explanation: "The gift of administration is the divine strength or ability to organize multiple tasks and groups of people to accomplish these tasks.<br><b>Luke 14:28-30; Acts 6:1-7; 1 Corinthians 12:28</b><br>" },
        {name: "Apostleship",       score: B_score, explanation: "The gift of apostleship is the divine strength or ability to pioneer new churches and ministries through planting, overseeing and training.<br><b>Acts 15:22-35; 1 Corinthians 12:28; 2 Corinthians 12:12; Galatians 2:7-10; Ephesians 4:11-14</b><br>" },
        {name: "Craftsmanship",      score: C_score, explanation: "The gift of craftsmanship is the divine strength or ability to plan, build and work with your hands in construction environments to accomplish multiple ministry applications.<br><b>Exodus 30:22, 31:3-11; 2 Chronicles 34:9-13; Acts 18:2-3</b><br>" },
        {name: "Discernment",       score: D_score, explanation: "The gift of discernment is the divine strength or ability to spiritually identify falsehood and to distinguish between right and wrong motive and situations.<br><b>Matthew 16:21-23; Acts 5:1-11, 16:16-18; 1 Corinthians 12:10; 1 John 4:1-6</b><br>" },
        {name: "Evangelism",        score: E_score, explanation: "The gift of evangelism is the divine strength or ability to help non-Christians take the necessary steps to becoming Christ followers.<br><b>Acts 8:5-6, 8:26-40, 14:21; Ephesians 4:11-14</b><br>" },
        {name: "Exhortation",       score: F_score, explanation: "The gift of exhortation is the divine strength or ability to encourage others through the written or spoken word and Biblical truth.<br><b>Acts 14:22; Romans 12:8; 1 Timothy 4:13; Hebrews 10:24-45</b><br>" },
        {name: "Faith",             score: G_score, explanation: "The gift of faith is the divine strength or ability to believe in God for unseen supernatural results in every arena of life<br><b>Acts 11:22-24; Romans 4:18-21; 1 Corinthians 12:9; Hebrews 11</b><br>" },
        {name: "Giving",            score: H_score, explanation: "The gift of giving is the divine strength or ability to produce wealth and to give by tithes and offerings for the purpose of advancing the Kingdom of God on earth.<br><b>Mark 12:41-44; Romans 12:8; 2 Corinthians 8:1-7, 9:2-7</b><br>" },
        {name: "Healing",           score: I_score, explanation: "The gift of healing is the divine strength or ability to act as an intermediary in faith, prayer, and by the laying-on of hands for the healing of physical and mental illnesses.<br><b>Acts 3:1-10, 9:32-35, 28:7-10; 1 Corinthians 12:9, 28</b><br>" },
        {name: "Helps",             score: J_score, explanation: "The gift of helps is the divine strength or ability to work in a supportive role for the accomplishment of tasks in Christian ministry.<br><b>Mark 15:40-41; Acts 9:36; Romans 16:1-2; 1 Corinthians 12:28</b><br>" },
        {name: "Hospitality",       score: K_score, explanation: "The gift of hospitality is the divine strength or ability to create warm, welcoming environments for others in places such as your home, office, or church.<br><b>Acts 16:14-15; Romans 12:13, 16:23; Hebrews 13:1-2; 1 Peter 4:9</b><br>" },
        {name: "Intercession",      score: L_score, explanation: "The gift of intercession is the divine strength or ability to stand in the gap in prayer for someone, something, or someplace believing for profound results.<br><b>Hebrews 7:25; Colossians 1:9-12, 4:12-13; James 5:14-16</b><br>" },
        {name: "Knowledge",         score: M_score, explanation: "The gift of knowledge is the divine strength or ability to understand and to bring clarity to situations and circumstances often accompanied by a word from God.<br><b>Acts 5:1-11; 1 Corinthians 12:8; Colossians 2:2-3</b><br>" },
        {name: "Leadership",       score: N_score, explanation: "The gift of leadership is the divine strength or ability to influence people at their level while directing and focusing them on the big picture, vision, or idea.<br><b>Romans 12:8; 1 Timothy 3:1-13, 5:17; Hebrews 13:17</b><br>" },
        {name: "Mercy",             score: O_score, explanation: "The gift of mercy is the divine strength or ability to feel empathy and to care for those who are hurting in any way.<br><b>Matthew 9:35-36; Mark 9:41; Romans 12:8; Thessalonians 5:14</b><br>" },
        {name: "Miracles",          score: P_score, explanation: "The gift of miracles is the divine strength or ability to alter the natural outcomes of life in a supernatural way through prayer, faith, and divine direction.<br><b>Acts 9:36-42, 19:11-12, 20:7-12; Romans 15:18-19; 1 Corinthians 12:10, 28</b><br>" },
        {name: "Missionary",        score: Q_score, explanation: "The missionary gift is the divine strength or ability to reach others outside of your culture and nationality, while in most cases living in that culture or nation.<br><b>Acts 8:4, 13:2-3, 22:21; Romans 10:15</b><br>" },
        {name: "Music/Worship",     score: R_score, explanation: "The gift of music/worship is the divine strength or ability to sing, dance, or play an instrument primarily for the purpose of helping others worship God.<br><b>Deuteronomy 31:22; 1 Samuel 16:16; 1 Chronicles 16:41-42; 2 Chronicles 5:12-13, 34:12; Psalm 150</b><br>" },
        {name: "Pastor/Shepherd",   score: S_score, explanation: "The gift of pastor/shepard is the divine strength or ability to care for the personal needs of others by nurturing and mending life issues.<br><b>John 10:1-18; Ephesians 4:11-14; 1 Timothy 3:1-7; 1 Peter 5:1-3</b><br>" },
        {name: "Prophecy",          score: T_score, explanation: "The gift of prophecy is the divine strength or ability to boldly speak and bring clarity to scriptural and doctrinal truth, in some cases foretelling God's plan.<br><b>Acts 2:37-40, 7:51-53, 26:24-29; 1 Corinthians 14:1-4; 1 Thessalonians 1:5</b><br>" },
        {name: "Service",           score: U_score, explanation: "The gift of service is the divine strength or ability to do small or great tasks in working for the overall good of the body of Christ.<br><b>Acts 6:1-7; Romans 12:7; Galatians 6:10; 1 Timothy 1:16-18; Titus 3:14</b><br>" },
        {name: "Teaching",          score: V_score, explanation: "The gift of teaching is the divine strength or ability to study and learn from the Scriptures primarily to bring understanding and growth to other Christians.<br><b>Acts 18:23-28, 20:20-21; 1 Corinthians 12:28; Ephesians 4:11-14</b><br>" },
        {name: "Tongues (and Interpretation)",           score: W_score, explanation: "The gift of tongues is the divine strength or ability to pray in a heavenly language to encourage your spirit and to commune with God. The gift of tongues is often accompanied by interpretation and should be used appropriately.<br><b>Acts 2:1-13; 1 Corinthians 12:10, 14:1-14</b><br>" },
        {name: "Wisdom",            score: X_score, explanation: "The gift of wisdom is the divine strength or ability to apply the truths of Scripture in a practical way, producing a fruitful outcome and the character of Jesus Christ<br><b>Acts 6:3,10; 1 Corinthians 2:6-13, 12:8</b><br>" },
    ];
    const sortedresults = results.sort(function(a, b) {
        return b.score - a.score;
    });
    console.log(sortedresults);
    

    /*document.getElementById("results-here").innerHTML = "Your top three spiritual gifts are: " + "<br>" + sortedresults[0].name + ", " + sortedresults[1].name + ", and " + sortedresults[2].name;
    */

    document.getElementById("result1").innerHTML = sortedresults[0].name + '<div id = "explanation1" class = "explanation"></div>';
    document.getElementById("result2").innerHTML = sortedresults[1].name + '<div id ="explanation2" class = "explanation"></div>';
    document.getElementById("result3").innerHTML = sortedresults[2].name + '<div id = "explanation3" class = "explanation"></div>';

    document.getElementById("explanation1").innerHTML = "<hr>" + sortedresults[0].explanation;
    document.getElementById("explanation2").innerHTML = '<hr>' + sortedresults[1].explanation;
    document.getElementById("explanation3").innerHTML = "<hr>" + sortedresults[2].explanation;

    document.getElementById("container").setAttribute("class", "hide");
    document.getElementById("endpage").setAttribute("class", "endpagestyle")
    document.getElementById("allscores").innerHTML = "Administration: " + A_score + "<br>" + "Apostleship: " + B_score + "<br>" + "Craftsmanship: " + C_score + "<br>" + "Discernment: " + D_score + "<br>" + "Evangelism: " + E_score + "<br>" + "Exhortation: " + F_score + "<br>" + "Faith: " + G_score + "<br>" + "Giving: " + H_score + "<br>" + "Healing: " + I_score + "<br>" + "Helps: " + J_score + "<br>" + "Hospitality: " + K_score + "<br>" + "Intercession: " + L_score + "<br>" + "Knowledge: " + M_score + "<br>" + "Leadership: " + N_score + "<br>" + "Mercy: " + O_score + "<br>" + "Miracles: " + P_score + "<br>" + "Missionary: " + Q_score + "<br>" + "Music/Worship: " + R_score + "<br>" + "Pastor/Shepherd: " + S_score + "<br>" + "Prophecy: " + T_score + "<br>" + "Service: " + U_score + "<br>" + "Teaching: " + V_score + "<br>" + "Tongues: " + W_score + "<br>" + "Wisdom: " + X_score;
    }
    catch {
        document.getElementById("gift_error_message").setAttribute("class", "");
    }
} 
function fullresults() {
    document.getElementById("allscores").setAttribute("class", "thatsall")
}

function DISCassess() {
    document.getElementById("home").setAttribute("class", "homepage hide");
    document.getElementById("DISCassesspage").setAttribute("class", "giftstestpage");
}
function giftsassess() {
    document.getElementById("home").setAttribute("class", "homepage hide");
    document.getElementById("dendpage").setAttribute("class", "hide");
    document.getElementById("giftsassesspage").setAttribute("class", "giftstestpage");
}

function back_to_start() {
    /*document.getElementById("dendpage").setAttribute("class", "hide");
    document.getElementById("endpage").setAttribute("class", "hide");*/
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.getElementById("home").setAttribute("class", "homepage");
    document.getElementById("dendpage").setAttribute("class", "");
    document.getElementById("gifts_start_btn").setAttribute("class", "hide");
    document.getElementById("gifts_home_btn").setAttribute('class', "hide");
    document.getElementById("halfway_message").setAttribute("class", "hide");
    document.getElementById("end_message").setAttribute("class", "heading_p");
}

function dback_to_start() {
    /*document.getElementById("dendpage").setAttribute("class", "hide");
    document.getElementById("endpage").setAttribute("class", "hide");*/
    document.getElementById("home").setAttribute("class", "homepage");
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.getElementById("dback_to_start_btn").setAttribute("class", "hide");
    document.getElementById("DISC_start_btn").setAttribute("class", "btn hide");
    document.getElementById("gifts_start_btn").setAttribute("class", "btn");
    document.getElementById("intro_message").setAttribute("class", "hide");
    document.getElementById("halfway_message").setAttribute("class", "heading_p");
}