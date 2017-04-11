
function detectMobile()
{
/*
    if ($(window).width() <= 800)
    {
        document.getElementById('resume').setAttribute("href", "resumeMobile.html");
    }
    else
    {
        document.getElementById('resume').setAttribute("href", "ResumeReneeChen.pdf");
    }
*/

    if ($(window).width() <= 1330 ) {
        $(".smallTable").css('width', '100%');
        $(".topTable").css('width', '100%');
        $(".footerTable").css('width', '100%');
        $(".iframeRound").css('width', '100%');
    }
    else {
        $(".smallTable").css('width', '70%');
        $(".topTable").css('width', '70%');
        $(".footerTable").css('width', '70%');
        $(".iframeRound").css('width', '70%');
    }
    
    if ($(window).width() <= 930) {
        $("#name").removeClass('name');
        $("#links").removeClass('links');
        $("#footerName").removeClass('footerName');
        $("#footerLinks").removeClass('footerLinks');
    } else {
        $("#name").addClass('name');
        $("#links").addClass('links');
        $("#footerName").addClass('footerName');
        $("#footerLinks").addClass('footerLinks');
    }

}

$(window).resize(detectMobile);
$(document).ready(detectMobile);