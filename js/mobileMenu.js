      $(document).ready(function() {
      $(document, '#js-bootstrap-offcanvas').on('click, touch', function(){ 
           if(!$('#js-bootstrap-offcanvas').hasClass('in')){
              $('#js-bootstrap-offcanvas').removeClass('in')
           }
      });
    });