var newWidth;

jQuery(document).ready(function ($) {
    if (document.title == "SWSS | reneechenwork") {
        newWidth = 679;
        $('.slides').css('width', 679);
        $('.slides').css('height', 368);
        $('.jssor_1').css('width', 679);
        $('.jssor_1').css('height', 368);
    } else if (document.title == "Noish | reneechenwork" || document.title == "UI | reneechenwork" || document.title == "NOISH Environment | reneechenwork") {
        newWidth = 638;
        $('.slides').css('width', 638);
        $('.slides').css('height', 361);
        $('.jssor_1').css('width', 638);
        $('.jssor_1').css('height', 361);
    }else if (document.title == "Modeling | reneechenwork"){
        newWidth = 600;
        $('.slides').css('width', 600);
        $('.slides').css('height', 450);
        $('.jssor_1').css('width', 600);
        $('.jssor_1').css('height', 450);
    } else if (document.title == "The Buried Unicorn | reneechenwork") {
        newWidth = 698;
        $('.slides').css('width', 698);
        $('.slides').css('height', 931);
        $('.jssor_1').css('width', 698);
        $('.jssor_1').css('height', 931);
    } else if (document.title == "Angel's Spirit | reneechenwork") {
        newWidth = 622;
        $('.slides').css('width', 622);
        $('.slides').css('height', 877);
        $('.jssor_1').css('width', 622);
        $('.jssor_1').css('height', 877);
    }
    
        var jssor_1_options = {
        $AutoPlay: false,
        $SlideWidth: newWidth,
        $Cols: 2,
        $Align: 0,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*responsive code begin*/
    /*you can remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 800);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*responsive code end*/
});