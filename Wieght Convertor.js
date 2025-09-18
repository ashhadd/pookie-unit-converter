document.getElementById('convertBtn').addEventListener("click", ConvertWieght);

function ConvertWieght() {
    let input = document.getElementById("inputWieght").value;
    let type = document.getElementById("inputUnit").value;
    let result = document.getElementById("result");
    if (input === "") {
        result.innerText = "Please enter a wieght value.";
        return;
    }
    input = parseFloat(input);  
    let output;
    if (type === "GtoKG")
    {
        output = input / 1000;
        result.innerText = `${input} Grams is ${output.toFixed(2)} Kilograms`;
    }
    else if(type === "KGtoG")
    {
        output = input * 1000;
        result.innerText = `${input} Kilograms is ${output.toFixed(2)} Grams`;
    }
}