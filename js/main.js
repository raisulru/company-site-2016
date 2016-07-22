//js for smooth scroling
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, .down-button a[href='#about']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
})
//end js for smooth scroling
$(window).scroll(function() {
        var windowScrollPosTop = $(window).scrollTop();
         
          if(windowScrollPosTop >= 200) {
            
            $("#fixed-nav").removeClass("fadeOut").addClass("fadeInDown").slideDown();
             
          }
          else{
              
            $("#fixed-nav").removeClass("fadeInDown").addClass("fadeOut").slideUp();
            
          }
        
      });
(function(){
var searchBox = {
    container: $('.search'),
    init: function(){
        $('.search-icon').on('click', this.show);
    },
    show: function(){
        searchBox.close.call(searchBox.container);
        searchBox.container.fadeIn();
    },
    close: function(){
        var $this = $(this);
        $('<button type="button" class="btn btn-default btn-close">Close</button>')
            .prependTo(this)
            .on('click', function(){
                $this.fadeOut();
                $(this).hide();
            })

    }
};
searchBox.init();

})();
  