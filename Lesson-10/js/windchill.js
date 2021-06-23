function calTemp(){
    let t =parseInt(document.getElementById("high").value);
    let s =parseInt(document.getElementById("speed").value);
    if(t > 50){
        document.getElementById("output").innerHTML = "n/a"
        return;
    }
    if(s < 3){
        document.getElementById("output").innerHTML = "n/a"
        return;
    }
    if(t  === undefined || s === undefined){
        document.getElementById("output").innerHTML = "n/a"
        return;
    }
    
    let result = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    document.getElementById("output").innerHTML = result.toFixed(2) + " °F"
}