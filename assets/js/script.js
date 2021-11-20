//Smooth Scrolling
$(function(){
    $("a").click(function(event) {
        if (this.hash !==""){
            event.preventDefault();
            var gato = this.hash;
            $('html, body').animate({
                scrollTop: $(gato).offset().top
            }, 1500, function (){
            window.location.hash = gato; 
            });
        } //end if
    });
});

//tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  