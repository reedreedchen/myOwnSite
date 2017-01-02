/*this may help when my viewers use mobile devices- written by Renee Chia-Lei Chen*/
window.isMobile = false; //initiate as false
// device detection

function detectMobile()
{
	if(screen.width <= 800) window.isMobile = true;
	if (window.isMobile)
	{
		document.getElementById('resume').setAttribute("href","resumeMobile.html");
		$('.bigTable').css("width",'480px');
		$('.smallTable').css("width","400px");
		$('.videoSizing').css({
			width:'320px',
			height:'180px'
		});
		$('.iframeRound').css(width,'95%');
	}
}

$(document).ready(detectMobile);