// 4章
// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// 5章
// $(function(){
//   $(".box1").css({
//     "background-color": "#0000ff",
//     "height": "100px"
//   });
// });

// $(function(){
//   $('.box1').slideUp();
// });

// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// 確認問題
$(function(){
  $('.box1').slideDown(5000,function(){
  $('.box1').css({
    'background-color': '#0000FF',
    "height": "100px",
    "width": "200px"
    }).slideUp(1000);
  });
});