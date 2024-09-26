let subSearch = document.getElementById("search");
subSearch.onclick = function() {
    var inputStr = document.getElementById("inputSearch").value;
    if(inputStr == null || inputStr == ""){
        console.log("input String is null.");
    }else{
        document.getElementById("box").submit();
    }
}

let enterSearch = document.getElementById("box");
enterSearch.onkeydown = function(){
    if(event.keyCode == 13){
        var inputStr = document.getElementById("inputSearch").value;
        if(inputStr == null || inputStr == ""){
            console.log("input String is null.");
            return false;
        }else{
            document.getElementById("box").submit();
            return true;
        }
    }

}