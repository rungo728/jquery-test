$(function(){
  $("#hideButton").on("click", function(){
    $('.sub-title').remove();
  });
  $("#removeClassButton").on('click', function(){
    $('.red').removeClass('red')
  });
  $('#addClassButton').on('click', function(){
    $("h2").addClass('blue')
  });
  // $(window).scroll(function(){
  //   console.log(1);
  // })
  var height = 0
  $(window).scroll(function(){
    height += 1
    console.log(height)
    if (height >= 50){
      console.log("fasdfas")
    }
  })
});
