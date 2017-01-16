var oldimage;
var allowNext = true;
$(function () {
    if (!window.isMobile) {
        $(".gallImageSizing").bind("mouseenter", function () {
            $(this).parent().parent().addClass('image-wrapper');
            $('.image-wrapper span').css('display', 'block');
            if (msieversion() == false) {//check if use IE
                $(this).addClass("brightness"); //if not, use filter
            }else if (this.naturalWidth > 0 && allowNext) {
                allowNext = false; // can't jump to another image before finish loading the original image.
                oldimage = this.src;
                this.src = adjustBrightness(this);
            }
        });
        $(".gallImageSizing").bind("mouseleave", function ()
        {
            $('.image-wrapper span').css('display', 'none');
            $(this).parent().parent().removeClass('image-wrapper');
            if (msieversion() == false)
            {
                $(this).removeClass("brightness");
            } else
            {
                this.src = oldimage;
                allowNext = true;
            }
        });
    } else { // if use mobile device, use different layout
        $('.text').css('display', 'block');
        $(".gallImageSizing").parent().parent().addClass('pad');
    }
});

function adjustBrightness(imgObj) { 

    var canvas = document.createElement('canvas');
    var canvasContext = canvas.getContext('2d');
    canvas.width = imgObj.naturalWidth;
    canvas.height = imgObj.naturalHeight;
    canvasContext.drawImage(imgObj, 0, 0);

    var rawData = canvasContext.getImageData(0, 0, imgObj.naturalWidth, imgObj.naturalHeight);

    var brightnessMul = 0.5;
    for (var y = 0; y < rawData.height; y++)
    {
        for (var x = 0; x < rawData.width; x++)
        {
         var i = (y * 4) * rawData.width + x * 4;
         rawData.data[i] *= brightnessMul;
         rawData.data[i + 1] *= brightnessMul;
         rawData.data[i + 2] *= brightnessMul;
        }
    }
    canvasContext.putImageData(rawData, 0, 0, 0, 0, rawData.width, rawData.height);

    return canvas.toDataURL();
}

//testIE
function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        return true;
    }
    return false;
}