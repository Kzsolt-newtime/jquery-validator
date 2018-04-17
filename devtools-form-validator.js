$('document').ready(function(){
  $('form').submit(function(event){
    //stop submit event
    event.preventDefault();

    //
    var content = $(this).serializeArray();
    var inputs = $(this).find('input');
    var formAction = $(this).attr('action');
    var validForm = true;

    $.each( inputs, function( key, value ) {
          $(this).css('border', '');
          $(this).next('.invalid').css('display', 'none')
          if($(this).val() == ""){
              $(this).next().css('display', 'block')
              $(this).css('border', '1px solid red');
              validForm = false;
          }
        });
    if (validForm === true) 
    {
      $.ajax(
      {
        url : formAction,
        type : 'POST',
        data : content,
        success:function(data){
          alert($.parseJSON(data));
        },
        error: function(){
          alert('sikertelen küldés');
        }
      })
      
    }
  })
})