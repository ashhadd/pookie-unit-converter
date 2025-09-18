document.getElementById('convertBtn').addEventListener("click", ConvertTemperature);

function ConvertTemperature() {
    let input = document.getElementById("inputTemp").value;
    let type = document.getElementById("inputUnit").value;
    let result = document.getElementById("result");

    if (input === "") {
        result.innerText = "Please enter a temperature value.";
        return;
    }
    input = parseFloat(input);
    let output;
    if (type === "CtoF") {
        output = (input * 9/5) + 32;
        result.innerText = `${input}°C is ${output.toFixed(2)}°F`;
    } else if(type === "FtoC")
    {
        output = (input - 32) * 5/9;
        result.innerText = `${input}°F is ${output.toFixed(2)}°C`;
    }
}