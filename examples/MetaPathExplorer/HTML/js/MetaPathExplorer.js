
function hide_desc(elmt){
	if(elmt.style.display == "none"){
		elmt.style.display = "" ;
		document.getElementById("show description").value = 'Hide Description' ;
	}
	else{
		elmt.style.display = "none" ;
		document.getElementById("show description").value = 'Show Description' ;
	}
}

function hide(button,tab){
	if(tab.style.display == "none"){
		tab.style.display = ""
		button.value = 'Hide Table'
	}
	else{
		tab.style.display = "none"
		button.value = 'Show Table'
	}
}

function resize(){
	var size= document.getElementById('txtbox').value;
	var divs = document.getElementsByClassName("sample");

	for(var i = 0 ; i < divs.length ; i++ ){
		divs[i].style.width = size;
	}
}

function resize_sample(selectObject){
	var size = selectObject.value; 
	var divs = document.getElementsByClassName("sample");
	for(var i = 0 ; i < divs.length ; i++ ){
		divs[i].style.width = size;
	}
}

function Search_pathway() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('Search_pathway');
    filter = input.value.toUpperCase();
    ul = document.getElementById("pathway_list");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a0 = li[i].getElementsByTagName("a")[0];
        a1 = li[i].getElementsByTagName("a")[1];
        if (filter == 0){
        	li[i].style.display = "none";
            a0.style.display = "none";
            a1.style.display = "none";
        }
        else if (a0.innerHTML.toUpperCase().indexOf(filter) > -1 || a1.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            li[i].style.border = "1px solid #ddd"
            li[i].style.backgroundColor = "#f6f6f6"
            a0.style.display="";
            a1.style.display="";
        } 
        else {
            li[i].style.display = "none";
            a0.style.display="none";
            a1.style.display="none";
        }
    }
}

function visibilite(ID){
	var oInput, i;
	oInput = document.getElementById(ID);
	for(i = 0; i < oInput.childNodes.length; i++){
		oChild = oInput.childNodes[i];
		if(oChild.nodeName == "LI"){
			if(oChild.style.display == "none"){
				oChild.style.display = "";
			}
			else{
				oChild.style.display = "none";
				for(var j = 0; j < oChild.childNodes.length ; j++){
					var oSon = oChild.childNodes[j];
					if(oSon.nodeName == "UL"){
						for(var k = 0; k < oSon.childNodes.length ; k++){
							var oDaugther = oSon.childNodes[k];
							if(oDaugther.nodeName == "LI"){
								oDaugther.style.display = "none"
							}
						}

					}
				}
			}
		}
	}
}

$(".pathway_li").mouseover(function() {
    $(this).children(".description").show();
}).mouseout(function() {
    $(this).children(".description").hide();
});