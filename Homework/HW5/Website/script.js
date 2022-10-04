// Reference Source: https://www.w3schools.com/howto/howto_js_tabs.asp 

document.getElementById("defaultPhoto").click();

function openContent(event, specifier) {
    let contents = document.getElementsByClassName("tabcontent");

    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    document.getElementById(specifier).style.display = "block";
}