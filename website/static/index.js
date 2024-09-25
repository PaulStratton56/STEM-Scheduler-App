var scheduleData;

const SHEET_NAME = "STEMTutoringFA24Schedule"

function getScheduleData(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/getSchedule/" + SHEET_NAME + ".xlsx", true);
    
    xhr.send();
    
    xhr.onload = function() {
        scheduleData = JSON.parse(xhr.responseText)

        populateSubjects();

        let mathTab = document.getElementsByClassName('subject')[0];
        changeSubject(mathTab);
    }


};

function populateSubjects(){
    subjectBlock = document.getElementById('subjectBlock');
    for (const key of Object.keys(scheduleData)) {
        let subjectDiv = document.createElement('div');
        subjectDiv.classList.add('subject');
        subjectDiv.innerText = key;
        subjectDiv.onclick = function() {
            changeSubject(this);
        }
        subjectBlock.appendChild(subjectDiv);
    }
}

function changeSubject(subjectTab){
    let subject = subjectTab.innerText;
    tutors = scheduleData[subject];
    removeTutors();
    tutorBlock = document.getElementById('tutorBlock');
    for (const tutorName of Object.keys(tutors)) {
        let tutorDiv = document.createElement('div');
        tutorDiv.classList.add('tutor');
        
        let tutorNameDiv = document.createElement('p');
        tutorNameDiv.classList.add('tutorName');
        tutorNameDiv.innerText = tutorName;

        tutorDiv.appendChild(tutorNameDiv);

        let days = tutors[tutorName];
        for(const day of Object.keys(days)){
            let dayDiv = document.createElement('p');
            dayDiv.classList.add('day');
            dayDiv.innerText = day;

            tutorDiv.appendChild(dayDiv);

            let shifts = days[day];
            for(const shiftIndex of Object.keys(shifts)){
                let shiftDiv = document.createElement('p');
                shiftDiv.classList.add('shift');
                shiftDiv.innerText = shifts[shiftIndex];

                tutorDiv.appendChild(shiftDiv);
            }
        }

        tutorBlock.appendChild(tutorDiv);
    }

    let subjectTabs = document.getElementsByClassName('subject');
    for (let oldSubjectTab of subjectTabs){
        if(oldSubjectTab.classList.contains('selected')){
            oldSubjectTab.classList.remove('selected');
        }
    }
    subjectTab.classList.add('selected');

}

function removeTutors(){
    tutorBlock = document.getElementById('tutorBlock');
    while (tutorBlock.lastChild){
        tutorBlock.removeChild(tutorBlock.lastChild)
    }
}