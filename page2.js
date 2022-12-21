fun1 = () => {
    alert("Welcome")
}

function fun3(){
    let id = document.getElementById("text1").value
    let pw = document.getElementById("text2").value
    
    console.log("id is",id);
    console.log("pw is", pw);

    if(id == "" || pw == ""){
        document.getElementById("b1").style.visibility = "hidden"
        document.getElementById("b2").style.visibility = "visible"
    } 
}

function fun4(){
    let id = document.getElementById("text1").value
    let pw = document.getElementById("text2").value
    
    console.log("id is",id);
    console.log("pw is", pw);

    if(id == "" || pw == ""){
        document.getElementById("b1").style.visibility = "visible"
        document.getElementById("b2").style.visibility = "hidden"

        document.getElementById("b1").value = "id please"
            document.getElementById("b2").value = "id please"

        if(id!="" && pw == ""){
            document.getElementById("b1").value = "pw please"
            document.getElementById("b2").value = "pw please"
        }
    } 
}

fun5 = ()=>{
    let id = document.getElementById("text1").value
    let pw = document.getElementById("text2").value

    if(id != "" && pw != ""){
        document.getElementById("b1").value = "OK"
        document.getElementById("b2").value = "OK"
    }
}
