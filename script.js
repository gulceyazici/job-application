document.getElementById("checkbox").onclick = checkboxChecked;
let endYearInput = document.getElementById("end-year");
var newExpButton = document.getElementById("new-exp-button");
var formExperiences = document.getElementById("experiences");

var numberId = 1;

newExpButton.addEventListener('click', function() {
    
    

    var labelCompanyName = document.createElement('label');
    labelCompanyName.innerText = "Company Name:";
    
    formExperiences.appendChild(labelCompanyName);
    var nextLine = document.createElement('br');
    formExperiences.appendChild(nextLine);
    
    var inputCompanyName = document.createElement('input');
    inputCompanyName.style.margin='10px';
    formExperiences.appendChild(inputCompanyName);
    var nextLine = document.createElement('br');
    formExperiences.appendChild(nextLine);
    
    var labelStartYear = document.createElement('label');
    labelStartYear.innerText = "Start Year:";
    formExperiences.appendChild(labelStartYear);
    var nextLine = document.createElement('br');
    formExperiences.appendChild(nextLine);
    
    var startYearInput = document.createElement('input');
    startYearInput.setAttribute("type", "number");
    startYearInput.style.margin='10px';
    formExperiences.appendChild(startYearInput);
    var nextLine = document.createElement('br');
    formExperiences.appendChild(nextLine);

    var labelEndYear = document.createElement('label');
    labelEndYear.innerText = "End Year:";
    formExperiences.appendChild(labelEndYear);
    var nextLine = document.createElement('br');
    formExperiences.appendChild(nextLine);
    
    var endYear = document.createElement('input');
    endYear.setAttribute("type", "number");
    endYear.setAttribute("id", numberId);
    endYear.style.margin='10px';
    formExperiences.appendChild(endYear);
    
    var nextLine = document.createElement('br');
    formExperiences.appendChild(nextLine);

    var stillWorking = document.createElement('h');
    stillWorking.innerText = "Still working?";
    stillWorking.style.margin='10px';
    formExperiences.appendChild(stillWorking);
    
    numberId++;
    

    var checkboxWorking = document.createElement('input');
    checkboxWorking.setAttribute("type", "checkbox");
    checkboxWorking.setAttribute("id", numberId)
    formExperiences.appendChild(checkboxWorking);
    
    document.getElementById(numberId).onclick = () => {
        
        if(endYear.disabled == false) {
        
            endYear.disabled = true;
        }
        else {
            endYear.disabled = false;
        }
    }
    
    
    var nextLine = document.createElement('br');
    formExperiences.appendChild(nextLine);
    
    
    


    });
    function checkboxChecked () {
        
        if(endYearInput.disabled == false) {
        
            endYearInput.disabled = true;
        }
        else {
            endYearInput.disabled = false;
        }
        }
    
        
