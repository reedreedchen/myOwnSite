
window.isMobile = false;
function detectMobile()
{
  
    if ($(window).width() <= 800) document.getElementById('resume').setAttribute("href", "resumeMobile.html");
    else document.getElementById('resume').setAttribute("href", "ResumeReneeChen_011717_7.pdf");
    if ($(window).width() <= 1330) {
        window.isMobile = true;
} else
        window.isMobile = false;

    if ($(window).width() <= 1330) {
     
        $("#name").removeClass('name');
        $("#links").removeClass('links');
        $("#footerName").removeClass('footerName');
        $("#footerLinks").removeClass('footerLinks');
        $(".smallTable").css('width', '100%');
        $(".topTable").css('width', '100%');
        $(".footerTable").css('width', '100%');
        $(".iframeRound").css('width', '100%');

    } else {
      
        $("#name").addClass('name');
        $("#links").addClass('links');
        $("#footerName").addClass('footerName');
        $("#footerLinks").addClass('footerLinks');
        $(".smallTable").css('width', '70%');
        $(".topTable").css('width', '70%');
        $(".footerTable").css('width', '70%');
        $(".iframeRound").css('width', '70%');
    }
}

$(window).resize(detectMobile);
$(document).ready(detectMobile);