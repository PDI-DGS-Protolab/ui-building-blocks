$(document).ready(function() {

  var year=new Date().getFullYear()-1;
  $('#credit_card_year').append($('<option />').val("--").html("--"));
  for (i = 0; i < 10; i++){

    $('#credit_card_year').append($('<option />').val(year+i).html(year+i));
  }


   $('.submitButton').click(function() {
//TODO
       //check first name
       //check last name
       //check card number
       //check cvc
       //check date month
       //check date year
   }); 

    $('#helpLabel').mouseover(function() {
//TODO
       //display help
       $("#helpCVC").show();
   }); 
    $('#helpLabel').mouseleave(function() {
//TODO
       //display help
       $("#helpCVC").hide();
   }); 

//First Name Context + Validation
   $('#credit_card_first_name').click(function() {
      $("#errorSpaceName").show();
      $("#errorSpaceName").text("Enter your name as it appears on your card");
      $("#errorSpaceNameX").hide();

   }); 

   $('#credit_card_first_name').blur(function() {

      $("#errorSpaceName").text("");
      $("#errorSpaceNameX").hide();

      var str = $('#credit_card_first_name').val();
      if(/^[a-zA-Z]*$/.test(str) == false) {
        $("#errorSpaceName").hide();
        $("#errorSpaceNameX").show();
        $(this).removeClass("positiveBox");
        $(this).addClass("negativeBox");
        $("#checkBoxName").text("Illegal characters");
        $("#checkBoxName").removeClass("positiveCheck");
        $("#checkBoxName").addClass("negativeCheck");
      }
      else if((str=='')||(str==undefined)){
        $("#errorSpaceName").show();
        $(this).removeClass("positiveBox");
        $(this).removeClass("negativeBox");
      }
      else{
        $("#errorSpaceName").hide();
        $("#errorSpaceNameX").show();
        $(this).removeClass("negativeBox");
        $(this).addClass("positiveBox");
        $("#checkBoxName").text("Ok");
        $("#checkBoxName").removeClass("negativeCheck");
        $("#checkBoxName").addClass("positiveCheck");
      }
   }); 

//Last Name Context + Validation
   $('#credit_card_last_name').click(function() {
      $("#errorSpaceLName").show();
      $("#errorSpaceLName").text("Enter your last name as it appears on your card");
      $("#errorSpaceLNameX").hide();
   }); 

   $('#credit_card_last_name').blur(function() {
      
      $("#errorSpaceLName").text("");
      $("#errorSpaceLNameX").hide();

      var str = $('#credit_card_last_name').val();
      if(/^[a-zA-Z]*$/.test(str) == false) {
        $("#errorSpaceLName").hide();
        $("#errorSpaceLNameX").show();
        $(this).removeClass("positiveBox");
        $(this).addClass("negativeBox");
        $("#checkBoxLName").text("Illegal characters");
        $("#checkBoxLName").removeClass("positiveCheck");
        $("#checkBoxLName").addClass("negativeCheck");
      }
      else if((str=='')||(str==undefined)){
        $("#errorSpaceLName").show();
        $(this).removeClass("positiveBox");
        $(this).removeClass("negativeBox");
      }
      else{
        $("#errorSpaceLName").hide();
        $("#errorSpaceLNameX").show();
        $(this).removeClass("negativeBox");
        $(this).addClass("positiveBox");
        $("#checkBoxLName").text("Ok");
        $("#checkBoxLName").removeClass("negativeCheck");
        $("#checkBoxLName").addClass("positiveCheck");
      }
   }); 




//Credit Card Context + Validation
   $('#credit_card_number').click(function() {
      $("#errorSpaceCC").show();
      $("#errorSpaceCC").text("Enter your credit card number without any spaces");
      $("#checkBoxCC").hide();
   }); 



   $('#credit_card_number').blur(function() {
      $("#errorSpaceCC").text("");
      $("#errorSpaceCC").hide();

      var str = $('#credit_card_number').val();


      if(/^[0-9]*$/.test(str) == false) { //characters
        $("#errorSpaceCC").hide();
        $("#checkBoxCC").show();
        $(this).removeClass("positiveBox");
        $(this).addClass("negativeBox");
        $("#checkBoxCC").text("Illegal characters");
        $("#checkBoxCC").removeClass("positiveCheck");
        $("#checkBoxCC").addClass("negativeCheck");
      }


      else if((str.length!=0)&&(str.length!=16)){//length
        $("#errorSpaceCC").hide();
        $("#checkBoxCC").show();
        $(this).removeClass("positiveBox");
        $(this).addClass("negativeBox");
        $("#checkBoxCC").text("Illegal length");
        $("#checkBoxCC").removeClass("positiveCheck");
        $("#checkBoxCC").addClass("negativeCheck");
      }


      else if(str.length==0){//empty
        $("#checkBoxCC").hide();
        $("#errorSpaceCC").show();
        $(this).removeClass("negativeBox");
        $(this).removeClass("positiveBox");
        $("#checkBoxCC").removeClass("negativeCheck");
        $("#checkBoxCC").removeClass("positiveCheck");
      }

      else{//ok
        $("#errorSpaceCC").hide();
        $("#checkBoxCC").show();
        $(this).removeClass("negativeBox");
        $(this).addClass("positiveBox");
        $("#checkBoxCC").text("Ok");
        $("#checkBoxCC").removeClass("negativeCheck");
        $("#checkBoxCC").addClass("positiveCheck");
      }

   });


//CVC Context + Validation
   $('#credit_card_verification_value').click(function() {
      $("#errorSpaceCVC").show();
      $("#errorSpaceCVC").text("3 digit #");
      $("#checkBoxCVC").hide();
      

   });  



   $('#credit_card_verification_value').blur(function() {
      $("#errorSpaceCVC").text("");

      $("#errorSpaceCVC").hide();

      var str = $('#credit_card_verification_value').val();


      if((/^[0-9]*$/.test(str) == false)|| ((str.length!=0)&&(str.length!=16))) { //characters
        $("#errorSpaceCVC").hide();
        $("#checkBoxCVC").show();
        $(this).removeClass("positiveBox");
        $(this).addClass("negativeBox");
        $("#checkBoxCVC").text("Not Valid");
        $("#checkBoxCVC").removeClass("positiveCheck");
        $("#checkBoxCVC").addClass("negativeCheck");
      }


      else if(str.length==0){//empty
        $("#checkBoxCVC").hide();
        $("#errorSpaceCVC").show();
        $(this).removeClass("negativeBox");
        $(this).removeClass("positiveBox");
        $("#checkBoxCVC").removeClass("negativeCheck");
        $("#checkBoxCVC").removeClass("positiveCheck");
      }

      else{//ok
        $("#errorSpaceCVC").hide();
        $("#checkBoxCVC").show();
        $(this).removeClass("negativeBox");
        $(this).addClass("positiveBox");
        $("#checkBoxCVC").text("Ok");
        $("#checkBoxCVC").removeClass("negativeCheck");
        $("#checkBoxCVC").addClass("positiveCheck");
      }
   }); 



//Date Validation
   $('#credit_card_year').click(function() {
      var d=new Date();
      var y=d.getFullYear();
      var m=d.getMonth()+1;
      var selM= $('#credit_card_month').val();
      var selY= $('#credit_card_year').val();
    
      if(selY==y){
        if(selM<m){
          $("#errorDateM").show();
          $("#errorDateEmptyM").hide();
          $("#errorDateEmptyY").hide();
          $("#expirationSpace").hide();
          $(this).css({'border':'red 3px solid'});
          $("#credit_card_month").css({'border':'red 3px solid'});
          //red
        }
        else if(selM=="--"){
          $("#errorDateEmptyM").show();
          $("#expirationSpace").hide();
          $("#errorDateM").hide();
          $("#errorDateEmptyY").hide();
          $(this).css({'border':'#999999 1px solid'});
          $("#credit_card_month").css({'border':'#999999 1px solid'});
          //please select a month
        }
        else{
          $("#errorDateEmptyM").hide();
          $("#errorDateEmptyY").hide();
          $("#errorDateM").hide();
          $("#expirationSpace").show();
          $(this).css({'border':'green 3px solid'});
          $("#credit_card_month").css({'border':'green 3px solid'});
//green
        }
      }
      else if(selY=="--"){
          $("#errorDateEmptyY").show();
          $("#errorDateEmptyM").hide();
          $("#expirationSpace").hide();
          $("#errorDateM").hide();
          $(this).css({'border':'#999999 1px solid'});
          $("#credit_card_month").css({'border':'#999999 1px solid'});
        //please select a year
      }
      else{
         if(selM=="--"){
          $("#errorDateEmptyY").hide();
          $("#errorDateEmptyM").show();
          $("#expirationSpace").hide();
          $("#errorDateM").hide();
          $(this).css({'border':'#999999 1px solid'});
          $("#credit_card_month").css({'border':'#999999 1px solid'});
          //please select a month
        }
        else{
          $("#errorDateEmptyM").hide();
          $("#errorDateEmptyY").hide();
          $("#errorDateM").hide();
          $("#expirationSpace").show();
          $(this).css({'border':'green 3px solid'});
          $("#credit_card_month").css({'border':'green 3px solid'});
          //green
        }
      }

   });  


    $('#credit_card_month').click(function() {
          var d=new Date();
      var y=d.getFullYear();
      var m=d.getMonth()+1;
      var selM= $('#credit_card_month').val();
      var selY= $('#credit_card_year').val();

      if(selY==y){
        if(selM<m){
          $("#errorDateM").show();
          $("#errorDateEmptyM").hide();
          $("#errorDateEmptyY").hide();
          $("#expirationSpace").hide();
          $(this).css({'border':'red 3px solid'});
          $("#credit_card_year").css({'border':'red 3px solid'});
          //red
        }
        else if(selM=="--"){
          $("#errorDateEmptyM").show();
          $("#expirationSpace").hide();
          $("#errorDateM").hide();
          $("#errorDateEmptyY").hide();
          $(this).css({'border':'#999999 1px solid'});
          $("#credit_card_year").css({'border':'#999999 1px solid'});
          //please select a month
        }
        else{
          $("#errorDateEmptyM").hide();
          $("#errorDateEmptyY").hide();
          $("#errorDateM").hide();
          $("#expirationSpace").show();
          $(this).css({'border':'green 3px solid'});
          $("#credit_card_year").css({'border':'green 3px solid'});
          //green
        }
      }
      else if(selY=="--"){
          $("#errorDateEmptyY").show();
          $("#errorDateEmptyM").hide();
          $("#expirationSpace").hide();
          $("#errorDateM").hide();
          $(this).css({'border':'#999999 1px solid'});
          $("#credit_card_year").css({'border':'#999999 1px solid'});
        //please select a year
      }
      else{
         if(selM=="--"){
          $("#errorDateEmptyY").hide();
          $("#errorDateEmptyM").show();
          $("#expirationSpace").hide();
          $("#errorDateM").hide();
          $(this).css({'border':'#999999 1px solid'});
          $("#credit_card_year").css({'border':'#999999 1px solid'});
          //please select a month
        }
        else{
          $("#errorDateEmptyM").hide();
          $("#errorDateEmptyY").hide();
          $("#errorDateM").hide();
          $("#expirationSpace").show();
          $(this).css({'border':'green 3px solid'});
          $("#credit_card_year").css({'border':'green 3px solid'});
          //green
        }
      }


});

});
