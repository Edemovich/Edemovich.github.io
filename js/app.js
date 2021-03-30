$(function () {
   $("[data-scroll]").on("click", function(event){
      event.preventDefault();

      blockId = $(this).data('scroll');
      blockOffset = $(blockId).offset().top;
      console.log(blockId);

      $("html, body").animate({
         scrollTop:blockOffset
      }, 800);

   });

});
