var isOpen=false;
var video1src;
var video2src;
var video3src;
var video4src;
var video5src;
var video6src;

function closeTab(){
	if(document.getElementById('tab').innerHTML=="▼" &&　$(".floatingTable").css("bottom")=='0px')//down triangle
	{
		$( ".floatingTable" ).animate({ "bottom": "-=51px" }, "slow", "swing", function(){document.getElementById('tab').innerHTML="▲";
		});
	}
	else if (document.getElementById('tab').innerHTML == "▲" && $(".floatingTable").css("bottom") == '-51px')//up triangle
	{
	  $( ".floatingTable" ).animate({ "bottom": "+=51px" }, "slow", "swing", function(){	
	  document.getElementById('tab').innerHTML="▼";
	  } );
	}

}

function showOverlayBox() {
	if(isOpen == false) return;
	$('.overlayBox').css({
		display:'block',
	});		
}

function resetVideo()
{
	document.getElementById('video1').removeAttribute("src");
	document.getElementById('video2').removeAttribute("src");
	document.getElementById('video3').removeAttribute("src");
	document.getElementById('video4').removeAttribute("src");
	document.getElementById('video5').removeAttribute("src");
	document.getElementById('video6').removeAttribute("src");
	document.getElementById('video1').setAttribute("src",video1src);
	document.getElementById('video2').setAttribute("src",video2src);
	document.getElementById('video3').setAttribute("src",video3src);
	document.getElementById('video4').setAttribute("src",video4src);
	document.getElementById('video5').setAttribute("src",video5src);
	document.getElementById('video6').setAttribute("src",video6src);
}
function doOverlayOpen() {
	resetVideo();
	isOpen = true;
	showOverlayBox();
	$('body').addClass('noscroll');
//follow link
	return true;
}
function doOverlayClose() {
	isOpen = false;
	$('.overlayBox').css( 'display', 'none' );
	document.getElementById('iframe').setAttribute("src","");
	$('body').removeClass('noscroll');
}
// if window is resized then reposition the overlay box
$(window).bind('resize',showOverlayBox);
// activate when the link with class launchLink is clicked
$('a.launchLink').click( doOverlayOpen );
$('a.closeLink').click( doOverlayClose );
//$('a.button').click( doOverlayOpen );
// close it when closeLink is clicked
$('#contactButton').click( doOverlayOpen )

$(document).ready(detectMobile);
$(document).ready(function(){
	video1src=document.getElementById('video1').getAttribute("src");
	video2src=document.getElementById('video2').getAttribute("src");
	video3src=document.getElementById('video3').getAttribute("src");
	video4src=document.getElementById('video4').getAttribute("src");
	video5src=document.getElementById('video5').getAttribute("src");
	video6src=document.getElementById('video6').getAttribute("src");
});