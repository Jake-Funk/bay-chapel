const questionContainer = document.getElementById("container")

// make the first set of questions active
const getStarted = () => {
    const introSection = document.getElementById("intro");
    
    questionContainer.classList.remove("hide")
    introSection.classList.add("hide")
}

const startBtn = document.getElementById("startBtn")
startBtn.addEventListener("click", getStarted)


// find the active/current set of questions and display them
const questionList = document.getElementById("questionList")
const questionGroups = [...questionList.querySelectorAll("[data-step]")]

let currentGroup = questionGroups.findIndex(step => {
    return step.classList.contains("active")
})

const showCurrentGroup = () => {
    questionGroups.forEach((step, index) => {
        step.classList.toggle("active", index === currentGroup)
        step.classList.toggle("hide", index !== currentGroup)
    })
    if (questionGroups[currentGroup].classList.contains("active")) {
    }
    if (currentGroup == questionGroups.length - 1) {
        nextBtn.classList.add("hide")
        resultsBtn.classList.remove("hide")
    }
}

if (currentGroup < 0) {
    currentGroup = 0
    showCurrentGroup()
}

// Scripts for getting the next set questions if all current inputs are filled out
const gotoNextGroup = () => {
    const inputs = [...questionGroups[currentGroup].querySelectorAll("input")]
    const allChecked = inputs.every(input => input.reportValidity())

    const errMsg = document.getElementById("errorMsg")
    if (allChecked) {
        currentGroup++
        errMsg.classList.add("hide")
        showCurrentGroup()
        window.scrollTo({top: 0, behavior: "smooth"})
    } else {
        errMsg.classList.remove("hide")
    }
}
const nextBtn = document.getElementById("nextBtn")
nextBtn.addEventListener("click", gotoNextGroup)

function dget_results() {
    
    let dd_score = parseInt(document.querySelector('input[name="dq1"]:checked').value) + parseInt(document.querySelector('input[name="dq5"]:checked').value) + parseInt(document.querySelector('input[name="dq9"]:checked').value) + parseInt(document.querySelector('input[name="dq13"]:checked').value)+ parseInt(document.querySelector('input[name="dq17"]:checked').value);
    let di_score = parseInt(document.querySelector('input[name="dq2"]:checked').value) + parseInt(document.querySelector('input[name="dq6"]:checked').value) + parseInt(document.querySelector('input[name="dq10"]:checked').value) + parseInt(document.querySelector('input[name="dq14"]:checked').value)+ parseInt(document.querySelector('input[name="dq18"]:checked').value);
    let ds_score = parseInt(document.querySelector('input[name="dq3"]:checked').value) + parseInt(document.querySelector('input[name="dq7"]:checked').value) + parseInt(document.querySelector('input[name="dq11"]:checked').value) + parseInt(document.querySelector('input[name="dq15"]:checked').value)+ parseInt(document.querySelector('input[name="dq19"]:checked').value);
    let dc_score = parseInt(document.querySelector('input[name="dq4"]:checked').value) + parseInt(document.querySelector('input[name="dq8"]:checked').value) + parseInt(document.querySelector('input[name="dq12"]:checked').value) + parseInt(document.querySelector('input[name="dq16"]:checked').value)+ parseInt(document.querySelector('input[name="dq20"]:checked').value);

    document.getElementById("DISCassesspage").classList.add("hide")
    document.getElementById("dendpage").classList.remove("hide")
    document.getElementById("dd_score").innerText = "D - " + dd_score
    document.getElementById("di_score").innerText = "I - " + di_score
    document.getElementById("ds_score").innerText = "S - " + ds_score
    document.getElementById("dc_score").innerText = "C - " + dc_score
    console.log(dd_score, di_score, ds_score, dc_score);

}

const resultsBtn = document.getElementById("resultsBtn")
resultsBtn.addEventListener("click", dget_results)

function DISCassess() {
    document.getElementById("home").setAttribute("class", "homepage hide");
    document.getElementById("DISCassesspage").setAttribute("class", "giftstestpage");
}
function giftsassess() {
    document.getElementById("home").setAttribute("class", "homepage hide");
    document.getElementById("dendpage").setAttribute("class", "hide");
    document.getElementById("giftsassesspage").setAttribute("class", "giftstestpage");
}

function more_about_D() {
    document.getElementById("di_explanation").setAttribute("class", "hide");
    document.getElementById("ds_explanation").setAttribute("class", "hide");
    document.getElementById("dc_explanation").setAttribute("class", "hide");
    document.getElementById("dd_explanation").setAttribute("class", "heading_p");
}

const d_btn = document.getElementById("dd_score")
d_btn.addEventListener("click", more_about_D)

function more_about_I() {
    document.getElementById("dd_explanation").setAttribute("class", "hide");
    document.getElementById("ds_explanation").setAttribute("class", "hide");
    document.getElementById("dc_explanation").setAttribute("class", "hide");
    document.getElementById("di_explanation").setAttribute("class", "heading_p");
}

const i_btn = document.getElementById("di_score")
i_btn.addEventListener("click", more_about_I)

function more_about_S() {
    document.getElementById("di_explanation").setAttribute("class", "hide");
    document.getElementById("dd_explanation").setAttribute("class", "hide");
    document.getElementById("dc_explanation").setAttribute("class", "hide");
    document.getElementById("ds_explanation").setAttribute("class", "heading_p");
}

const s_btn = document.getElementById("ds_score")
s_btn.addEventListener("click", more_about_S)

function more_about_C() {
    document.getElementById("di_explanation").setAttribute("class", "hide");
    document.getElementById("ds_explanation").setAttribute("class", "hide");
    document.getElementById("dd_explanation").setAttribute("class", "hide");
    document.getElementById("dc_explanation").setAttribute("class", "heading_p");
}

const c_btn = document.getElementById("dc_score")
c_btn.addEventListener("click", more_about_C)