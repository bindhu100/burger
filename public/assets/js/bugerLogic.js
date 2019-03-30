$(document).ready(function(){

$(".dovouredButton").on("click",function(event){

  var burgerId = $(this).val();
  // console.log(burgerId)
  $.ajax({

    method:"PUT",
    url:"/"+burgerId


  }).then (function(data){

    location.reload()
  })
  
})

});