function toCelsius(){

	// grabs the input from the user
	let input =  document.getElementById("temperature").value;

    if (isNaN(input) || input === "")
    {
        document.getElementById("result").innerText = "";
        document.getElementById("result-parent").innerText = "Please input a valid number!";
        document.getElementById("result-parent").style.color = "red";
        document.getElementById("result-parent").style.fontWeight = "bold";
        document.getElementById("result-parent").style.visibility = "visible";
    }
    else {
        let celsius = (input - 32) * 5/9;
        document.getElementById("result-parent").style.visibility = "visible";
        document.getElementById("result-parent").style.fontWeight = "normal";
        document.getElementById("result-parent").style.color = "black";
        document.getElementById("result-parent").innerHTML = `The Temperature in Celsius is <span id="result"></span>`;
        document.getElementById("result").innerText = celsius;
    }
}