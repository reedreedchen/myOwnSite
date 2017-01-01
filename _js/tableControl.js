//hide all tables first then show selected table only
//I don't need to open new pages and flick.
//I found this method much pleasing.
//by Renee Chia-Lei Chen 12/7/2016

var currentID="demoReel";
function hideTable() 
{
	$('#demoReelTable').hide(); document.getElementById("demoReel").setAttribute("href","#");
	$('#animationTable').hide(); document.getElementById("animation").setAttribute("href","#");
	$('#galleryTable').hide(); document.getElementById("gallery").setAttribute("href","#");
	document.getElementById("demoReel").setAttribute("style", "color: #EA2466");
	document.getElementById("animation").setAttribute("style", "color: #EA2466");
	document.getElementById("gallery").setAttribute("style", "color: #EA2466");

}

function showTable($currentTable)
{
	hideTable();
	$currentTable.show();
	document.getElementById(currentID).removeAttribute("href");
	document.getElementById(currentID).setAttribute("style", "color: #454545");
}

function resetSrc(){
		
	if(currentID=='animation' || currentID=='animation2' || currentID=='gallery')
	{
		document.getElementById('video1').removeAttribute("src");								
		document.getElementById('video1').setAttribute("src",video1src);
	}
	if(currentID=="demoReel" || currentID=='gallery'){
		document.getElementById('video2').removeAttribute("src");								
		document.getElementById('video2').setAttribute("src",video2src);
		document.getElementById('video3').removeAttribute("src");								
		document.getElementById('video3').setAttribute("src",video3src);
		document.getElementById('video4').removeAttribute("src");								
		document.getElementById('video4').setAttribute("src",video4src);
		document.getElementById('video5').removeAttribute("src");								
		document.getElementById('video5').setAttribute("src",video5src);
		document.getElementById('video6').removeAttribute("src");								
		document.getElementById('video6').setAttribute("src",video6src);
	}
}

$(document).ready(function(){
	hideTable(); showTable($('#demoReelTable'));
	$('#animation').click(function(){
		currentID = "animation"; 
		showTable($('#animationTable'));
		resetSrc();
	});
	$('#animation2').click(function(){
		currentID = "animation"; 
		showTable($('#animationTable'));	
		resetSrc();
	});
	$('#gallery').click(function(){
		currentID = "gallery"; 
		showTable($('#galleryTable'));
		resetSrc();
	});
	$('#demoReel').click(function(){
		currentID = "demoReel"; 
		showTable($('#demoReelTable'));
		resetSrc();
	});

});

