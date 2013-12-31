$(document).ready(function() {

  var year=new Date().getFullYear();
  $('#credit_card_year').append($('<option />').val("--").html("--"));
  for (i = 0; i < 10; i++){

    $('#credit_card_year').append($('<option />').val(year+i).html(year+i));
  }


   $('.submitButton').click(function() {
       //check first name
       //check last name
       //check card number
       //check cvc
       //check date
   }); 

//First Name Context + Validation
   $('#credit_card_first_name').click(function() {
      $("#errorSpaceName").hide();
      $("#errorSpaceNameX").hide();
      $("#contextName").show();
      $(this).css({'border':'#999999 1px solid'})

   }); 

   $('#credit_card_first_name').blur(function() {

      $("#contextName").hide();
      $("#errorSpaceName").hide();
      $("#errorSpaceNameX").hide();

      var str = $('#credit_card_first_name').val();
      if(/^[a-zA-Z]*$/.test(str) == false) {
        $(this).css({'border':'red 3px solid'})
        $("#errorSpaceNameX").show();
      }
      else if((str=='')||(str==undefined)){
        $("#errorSpaceName").show();
        $(this).css({'border':'#999999 1px solid'})
      }
      else{
        $("#errorSpaceName").show();
        $(this).css({'border':'green 3px solid'});
      }
   }); 

//Last Name Context + Validation
   $('#credit_card_last_name').click(function() {
      $("#errorSpaceLName").hide();
      $("#errorSpaceLNameX").hide();
      $("#contextLName").show();
      $(this).css({'border':'#999999 1px solid'})
   }); 

   $('#credit_card_last_name').blur(function() {
      
      $("#contextLName").hide();
      $("#errorSpaceLName").hide();
      $("#errorSpaceLNameX").hide();

      var str = $('#credit_card_last_name').val();
      if(/^[a-zA-Z]*$/.test(str) == false) {
        $(this).css({'border':'red 3px solid'})
        $("#errorSpaceLNameX").show();
      }
      else if((str=='')||(str==undefined)){
        $("#errorSpaceLName").show();
        $(this).css({'border':'#999999 1px solid'})
      }
      else{
        $("#errorSpaceLName").show();
        $(this).css({'border':'green 3px solid'});
      }
   }); 

//Credit Card Context + Validation
   $('#credit_card_number').click(function() {
      $("#errorSpaceCC").hide();
      $("#contextCC").show();
   }); 

   $('#credit_card_number').blur(function() {
      $("#errorSpaceCC").show();
      $("#contextCC").hide();


      var str = $('#credit_card_number').val();
      if(/^[0-9]*$/.test(str) == false) { //!+legth check
        
        //error
      }
      else{
        //mark green
      }

   });


//CVC Context + Validation
   $('#credit_card_verification_value').click(function() {
      $("#errorSpaceCC").hide();
      $("#contextCVC").show();
   });  

   $('#credit_card_verification_value').blur(function() {
      $("#errorSpaceCC").show();
      $("#contextCVC").hide();

      var str = $('#credit_card_verification_value').val();
      if(/^[0-9]*$/.test(str) == false) {//!+legth check
        
        //error
      }
      else{
        //mark green
      }
   }); 

//date
   $('#credit_card_year').click(function() {
      var d=new Date();
      var y=d.getFullYear();
      var m=d.getMonth()+1;


   });  


});


