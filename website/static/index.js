document.getElementById("myButton").onclick = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/debug", true);
    
    xhr.send();

    xhr.onload = function() {
        data = JSON.parse(xhr.responseText)
        console.log(data)
    }
};
