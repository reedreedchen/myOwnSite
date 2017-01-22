
window.isMobile = false;
function detectMobile()
{
    if (screen.width <= 800) {
        window.isMobile = true;


    } else
        window.isMobile = false;
    if ($(window).width() <= 1330) {
    //    document.getElementById('resume').setAttribute("href", "resumeMobile.html");
        $("#name").removeClass('name');
        $("#links").removeClass('links');
        $("#footerName").removeClass('footerName');
        $("#footerLinks").removeClass('footerLinks');
        //   console.log("hi");
        //	$('.bigTable').css("width",'460px');
        //	$('.smallTable').css("width","400px");
        //	$('.videoSizing').css({
        //		width:'95%',
        //		height:'220px'
        //	});
        //		$('.iframeRound').css('width','95%');

    } else {
     //   $(".image-wrapper span").css('font-size', '20px');
   //     document.getElementById('resume').setAttribute("href", "ResumeReneeChen_011717_7.pdf");
        $("#name").addClass('name');
        $("#links").addClass('links');
        $("#footerName").addClass('footerName');
        $("#footerLinks").addClass('footerLinks');
    }

}

$(window).resize(detectMobile);
$(document).ready(detectMobile);