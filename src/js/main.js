import Alert from "./alert.js";

const Height_input = document.getElementById("Height")
const Weight_input = document.getElementById("Weight")
const Submit_Btn = document.getElementById("submit-btn")
const Output_Info = document.getElementById("Info")
const Ideal = document.getElementById("ideal_kilo_id")
eventListener()

function eventListener() {
    Submit_Btn.addEventListener("click", BMI)
}


function BMI(e) {
    const Height = Height_input.value
    const Weight = Weight_input.value
    

    if (Weight > 0 && Height > 0) {
        const BMI_Calculate = (Weight / ((Height * Height) / 10000)).toFixed(2)

        const ideal_kilo = 45.5 + 2.3*((Height/2.54)-60).toFixed(0)
       

        if (BMI_Calculate < 18.5) {
            // Output_Info.innerHTML = 'Zayifsiniz: ' + BMI_Calculate
            Output_Info.innerHTML = `Vücut Kitle Endeksiniz: <span>${BMI_Calculate}</span> <br />Sonuca Göre: <span>Zayıfsınız.</span> <br /> İdeal Kilonuz: <span>${ideal_kilo} </span>`
          
        } else if (BMI_Calculate > 18.5 && BMI_Calculate < 24.9) {
            // Output_Info.innerHTML = 'Normal Kilolusunuz: ' + BMI_Calculate
            Output_Info.innerHTML = `Vücut Kitle Endeksiniz: <span id="Height_Status">${BMI_Calculate}</span> <br />Sonuca Göre: <span id="Weight_Status">Normal Kilolusunuz.</span> <br /> İdeal Kilonuz: <span>${ideal_kilo} </span>`
        } else if(BMI_Calculate >25 && BMI_Calculate < 29.9){
            // Output_Info.innerHTML = "Fazla Kilolusunuz." + BMI_Calculate
            Output_Info.innerHTML = `Vücut Kitle Endeksiniz: <span id="Height_Status">${BMI_Calculate}</span> <br />Sonuca Göre: <span id="Weight_Status">Fazla Kilolusunuz.</span><br /> İdeal Kilonuz: <span>${ideal_kilo} </span>`
        } else if(BMI_Calculate >30 && BMI_Calculate < 39.9){
            // Output_Info.innerHTML = "Obezsiniz: " + BMI_Calculate
            Output_Info.innerHTML = `Vücut Kitle Endeksiniz: <span id="Height_Status">${BMI_Calculate}</span> <br />Sonuca Göre: <span id="Weight_Status">Obezsiniz.</span><br /> İdeal Kilonuz: <span>${ideal_kilo} </span>`
        } else if(BMI_Calculate >40){
            // Output_Info.innerHTML = "İleri derecede obezsiniz."
            Output_Info.innerHTML = `Vücut Kitle Endeksiniz: <span id="Height_Status">${BMI_Calculate}</span> <br />Sonuca Göre: <span id="Weight_Status">İleri derecede obezsiniz.</span><br /> İdeal Kilonuz: <span>${ideal_kilo} </span>`
        }
       
        
    } else {
        Alert("danger", "Please fill in all fields")
    }
   

    e.preventDefault()
}



