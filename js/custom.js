//button

$( ".hex-btn" ).each(function() {
    var hexheight = Math.round($( this ).outerHeight());
    var classtoadd = 'height' + hexheight;
    $(this).addClass(classtoadd);
    var css_spike ='<style>.' + classtoadd +'.hex-btn::before{border-top-width: ' + hexheight/2 + 'px; border-bottom-width: ' + hexheight/2 + 'px;}.' + classtoadd +'.hex-btn::after{border-top-width: ' + hexheight/2 + 'px; border-bottom-width: ' + hexheight/2 + 'px;}</style>';
    document.head.insertAdjacentHTML( 'beforeEnd', css_spike );
});


