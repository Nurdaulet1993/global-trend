$(document).ready(function(){
  // Sorry about bad spacing. Also...this is jquery if you didn't notice allready.
    $(".widget.phone").hover(function(){
        $(this).css('width', '220px');
    }, function(){
        $(this).css('width', '0px');
    })

    $(".widget.whatsapp").hover(function(){
        $(this).css('width', '160px');
    }, function(){
        $(this).css('width', '0px');
    })
});