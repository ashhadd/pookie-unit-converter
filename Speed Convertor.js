document.getElementById('convertBtn').addEventListener("click", ConvertSpeed);    

function ConvertSpeed() {
    let input = document.getElementById("inputSpeed").value;
    let type = document.getElementById("inputUnit").value;
    let result = document.getElementById("result");

    if (input === "") {
        result.innerText = "Please enter a speed value.";
        return;
    }
    input = parseFloat(input);
    let output;
    if (type === "MtoK") {
        output = input * 3.6
        result.innerText = `${input} MPH is ${output.toFixed(2)} KPH`;
    } else if(type === "KtoM")
    {
        output = input / 3.6;
        result.innerText = `${input} KPH is ${output.toFixed(2)} MPH`;
    }     
}
