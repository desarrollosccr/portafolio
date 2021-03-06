
$(window).scroll(function () {
    var $this = $(this),
        $head = $('header');
    if ($this.scrollTop() > 10) {
        $head.addClass("active");
    } else {
        $head.removeClass("active");
    }
})

$(document).ready(function() {
    function changeImgSize(){
        var img = this.content.find('img');
        img.css('max-height', '100%');
        img.css('width', 'auto');
        img.css('max-width', 'auto');
    }
  $('.figure').magnificPopup({
      delegate: 'a',
      type:'image',
      overflowY: 'scroll',
      closeOnContentClick: true,
      callbacks: {
            resize: changeImgSize,
            imageLoadComplete:changeImgSize,
            change:changeImgSize
        },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
    }
});
    $("header nav a, a.arrow").on('click', function(e) {
        e.preventDefault();

        var section = $(this).attr("href");
        $(section).animatescroll({
            padding: 51
        });
    });
    
});