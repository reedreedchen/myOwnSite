/*this may help when my viewers use mobile devices- written by Renee Chia-Lei Chen*/
window.isMobile = false; //initiate as false
// device detection

function detectMobile()
{
	if(screen.width <= 800) window.isMobile = true;
	if (window.isMobile)
	{
		document.getElementById('resume').setAttribute("href","resumeMobile.html");
		$('.bigTable').css("width",'460px');
		$('.smallTable').css("width","400px");
		$('.videoSizing').css({
			width:'95%',
			height:'220px'
		});
		$('.iframeRound').css('width','95%');
	}
}

$(document).ready(detectMobile);