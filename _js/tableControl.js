//hide all tables first then show selected table only
//I don't need to open new pages and flick.
//I found this method much pleasing.
//by Renee Chia-Lei Chen 12/7/2016

var currentID="demoReel";
function hideTable() 
{
	$('#demoReelTable').hide(); document.getElementById("demoReel").setAttribute("href","javascript:void(0)");
	$('#animationTable').hide(); document.getElementById("animation").setAttribute("href", "javascript:void(0)");
	$('#galleryTable').hide(); document.getElementById("gallery").setAttribute("href", "javascript:void(0)");
	$('#researchTable').hide(); document.getElementById("publication").setAttribute("href", "javascript:void(0)");
	$('#bioTable').hide(); document.getElementById("bio").setAttribute("href", "javascript:void(0)");
	$('#scriptingTable').hide(); document.getElementById("scripting").setAttribute("href", "javascript:void(0)");
	$('#designTable').hide(); document.getElementById("designOther").setAttribute("href", "javascript:void(0)");
	document.getElementById("demoReel").setAttribute("style", "color: #EA2466");
	document.getElementById("animation").setAttribute("style", "color: #EA2466");
	document.getElementById("gallery").setAttribute("style", "color: #EA2466");
	document.getElementById("publication").setAttribute("style", "color: #EA2466");
	document.getElementById("bio").setAttribute("style", "color: #EA2466");
	document.getElementById("designOther").setAttribute("style", "color: #EA2466");
	document.getElementById("scripting").setAttribute("style", "color: #EA2466");
}

function showTable($currentTable)
{
	hideTable();
	$currentTable.show();
	document.getElementById(currentID).removeAttribute("href");
	document.getElementById(currentID).setAttribute("style", "color: #454545");
}

function resetSrc(){
	
    if (currentID == "demoReel") {
	    resetAnimation();
	} else if (currentID == 'animation') {
	    resetReel();
	} else {
	    resetReel();
	    resetAnimation();
	}
}

function resetReel() {
    document.getElementById('video1').removeAttribute("src");
    document.getElementById('video1').setAttribute("src", video1src);
}

function resetAnimation() {
    document.getElementById('video2').removeAttribute("src");
    document.getElementById('video2').setAttribute("src", video2src);
    document.getElementById('video3').removeAttribute("src");
    document.getElementById('video3').setAttribute("src", video3src);
    document.getElementById('video4').removeAttribute("src");
    document.getElementById('video4').setAttribute("src", video4src);
    document.getElementById('video5').removeAttribute("src");
    document.getElementById('video5').setAttribute("src", video5src);
    document.getElementById('video6').removeAttribute("src");
    document.getElementById('video6').setAttribute("src", video6src);
}

$(document).ready(function(){
	hideTable(); showTable($('#demoReelTable'));
	$('#animation').mouseover(function(){
		currentID = "animation"; 
		showTable($('#animationTable'));
		resetSrc();
	});
	$('#gallery').mouseover(function () {
		currentID = "gallery"; 
		showTable($('#galleryTable'));
		resetSrc();
	});
	$('#demoReel').mouseover(function () {
		currentID = "demoReel"; 
		showTable($('#demoReelTable'));
		resetSrc();
	});
	$('#publication').mouseover(function () {
	    currentID = "publication";
	    showTable($('#researchTable'));
	    resetSrc();
	});
	$('#bio').mouseover(function () {
	    currentID = "bio";
	    showTable($('#bioTable'));
	    resetSrc();
	});
	$('#scripting').mouseover(function () {
	    currentID = "scripting";
	    showTable($('#scriptingTable'));
	    resetSrc();
	});
	$('#designOther').mouseover(function () {
	    currentID = "designOther";
	    showTable($('#designTable'));
	    resetSrc();
	});
});
