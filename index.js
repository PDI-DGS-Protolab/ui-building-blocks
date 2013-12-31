$(document).ready(function() {

  var year=new Date().getFullYear();
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
      $("#errorSpaceCCX1").hide();
      $("#errorSpaceCCX2").hide();
      $("#contextCVC").hide();

      if(($("#errorSpaceCVCX1").is(":visible"))
        ||($("#errorSpaceCVCX2").is(":visible"))
        ||($("#errorSpaceCCX1CVCX2").is(":visible"))
        ||($("#errorSpaceCCX1CVCX1").is(":visible"))
        ||($("#errorSpaceCCX2CVCX2").is(":visible"))
        ||($("#errorSpaceCCX2CVCX1").is(":visible"))
        ){
        $(this).css({'border':'#999999 1px solid'});
      }
      else{
        $("#contextCC").show();
        $(this).css({'border':'#999999 1px solid'});
      }

   }); 



   $('#credit_card_number').blur(function() {
      $("#errorSpaceCC").hide();
      $("#errorSpaceCCX1").hide();
      $("#errorSpaceCCX2").hide();
      $("#contextCVC").hide();
      $("#contextCC").hide();

      var str = $('#credit_card_number').val();

//illegal characters
      if(/^[0-9]*$/.test(str) == false) { 
        if($("#errorSpaceCVCX1").is(":visible")){
          $("#errorSpaceCVCX1").hide();
          $("#errorSpaceCCX1CVCX1").show();
          $(this).css({'border':'red 3px solid'});
        }
        else if($("#errorSpaceCVCX2").is(":visible")){
          $("#errorSpaceCVCX2").hide();
          $("#errorSpaceCCX1CVCX2").show();
          $(this).css({'border':'red 3px solid'});
        }
        else if($("#errorSpaceCCX2CVCX2").is(":visible")){
          $("#errorSpaceCCX2CVCX2").hide();
          $("#errorSpaceCCX1CVCX2").show();
          $(this).css({'border':'red 3px solid'});
        }
        else if($("#errorSpaceCCX2CVCX1").is(":visible")){
          $("#errorSpaceCCX2CVCX1").hide();
          $("#errorSpaceCCX1CVCX1").show();
          $(this).css({'border':'red 3px solid'});
        }
        else if($("#errorSpaceCCX1CVCX1").is(":visible")
              ||$("#errorSpaceCCX1CVCX2").is(":visible")){
          $(this).css({'border':'red 3px solid'});
        }
        else{
          $(this).css({'border':'red 3px solid'})
          $("#errorSpaceCCX1").show();
        }
      }

//wrong length
      else if((str.length!=0)&&(str.length!=16)){
        if($("#errorSpaceCVCX1").is(":visible")){
          $("#errorSpaceCVCX1").hide();
          $("#errorSpaceCCX2CVCX1").show();
          $(this).css({'border':'red 3px solid'});
        }
        else if($("#errorSpaceCVCX2").is(":visible")){
          $("#errorSpaceCVCX2").hide();
          $("#errorSpaceCCX2CVCX2").show();
          $(this).css({'border':'red 3px solid'});
        }
        else if($("#errorSpaceCCX1CVCX2").is(":visible")){
          $("#errorSpaceCCX1CVCX2").hide();
          $("#errorSpaceCCX2CVCX2").show();
          $(this).css({'border':'red 3px solid'});
        }
        else if($("#errorSpaceCCX1CVCX1").is(":visible")){
          $("#errorSpaceCCX1CVCX1").hide();
          $("#errorSpaceCCX2CVCX1").show();
          $(this).css({'border':'red 3px solid'});
        }
        else if($("#errorSpaceCCX2CVCX1").is(":visible")
              ||$("#errorSpaceCCX2CVCX2").is(":visible")){
          $(this).css({'border':'red 3px solid'});
        }
        else{
          $(this).css({'border':'red 3px solid'});
          $("#errorSpaceCCX2").show();
        }

      }


      else if(str.length==0){
        if(($("#errorSpaceCVCX1").is(":visible"))
        ||($("#errorSpaceCVCX2").is(":visible"))
        // ||($("#errorSpaceCCX1CVCX2").is(":visible"))
        // ||($("#errorSpaceCCX1CVCX1").is(":visible"))
        // ||($("#errorSpaceCCX2CVCX2").is(":visible"))
        // ||($("#errorSpaceCCX2CVCX1").is(":visible"))
        ){
          $(this).css({'border':'#999999 1px solid'});
        }
        else if($("#errorSpaceCCX1CVCX2").is(":visible")){
          $("#errorSpaceCCX1CVCX2").hide();
          $("#errorSpaceCVCX2").show();
          $(this).css({'border':'#999999 1px solid'});
        }
        else if($("#errorSpaceCCX1CVCX1").is(":visible")){
          $("#errorSpaceCCX1CVCX1").hide();
          $("#errorSpaceCVCX1").show();
          $(this).css({'border':'#999999 1px solid'});
        }
        else if($("#errorSpaceCCX2CVCX2").is(":visible")){
          $("#errorSpaceCCX2CVCX2").hide();
          $("#errorSpaceCVCX2").show();
          $(this).css({'border':'#999999 1px solid'});
        }
        else if($("#errorSpaceCCX2CVCX1").is(":visible")){
          $("#errorSpaceCCX2CVCX1").hide();
          $("#errorSpaceCVCX1").show();
          $(this).css({'border':'#999999 1px solid'});
        }
        else{
          $("#errorSpaceCC").show();
          $(this).css({'border':'#999999 1px solid'});
        }
      }

      else{
        if(($("#errorSpaceCVCX1").is(":visible"))
        ||($("#errorSpaceCVCX2").is(":visible"))
        // ||($("#errorSpaceCCX1CVCX2").is(":visible"))
        // ||($("#errorSpaceCCX1CVCX1").is(":visible"))
        // ||($("#errorSpaceCCX2CVCX2").is(":visible"))
        // ||($("#errorSpaceCCX2CVCX1").is(":visible"))
        ){
          $(this).css({'border':'green 1px solid'});
        }
        else if($("#errorSpaceCCX1CVCX2").is(":visible")){
          $("#errorSpaceCCX1CVCX2").hide();
          $("#errorSpaceCVCX2").show();
          $(this).css({'border':'green 3px solid'});
        }
        else if($("#errorSpaceCCX1CVCX1").is(":visible")){
          $("#errorSpaceCCX1CVCX1").hide();
          $("#errorSpaceCVCX1").show();
          $(this).css({'border':'green 3px solid'});
        }
        else if($("#errorSpaceCCX2CVCX2").is(":visible")){
          $("#errorSpaceCCX2CVCX2").hide();
          $("#errorSpaceCVCX2").show();
          $(this).css({'border':'green 3px solid'});
        }
        else if($("#errorSpaceCCX2CVCX1").is(":visible")){
          $("#errorSpaceCCX2CVCX1").hide();
          $("#errorSpaceCVCX1").show();
          $(this).css({'border':'green 3px solid'});
        }
        else{
          $("#errorSpaceCC").show();
          $(this).css({'border':'green 3px solid'});
        }
      }

   });


//CVC Context + Validation
   $('#credit_card_verification_value').click(function() {
      $("#errorSpaceCC").hide();
      $("#errorSpaceCVCX1").hide();
      $("#errorSpaceCVCX2").hide();
      $("#contextCC").hide();
      if(($("#errorSpaceCCX1").is(":visible"))
        ||($("#errorSpaceCCX2").is(":visible"))
        ||($("#errorSpaceCCX1CVCX2").is(":visible"))
        ||($("#errorSpaceCCX1CVCX1").is(":visible"))
        ||($("#errorSpaceCCX2CVCX2").is(":visible"))
        ||($("#errorSpaceCCX2CVCX1").is(":visible"))
        ){
          $(this).css({'border':'#999999 1px solid'});
        }
      else{
        $("#contextCVC").show();
        $(this).css({'border':'#999999 1px solid'});
      }

   });  



   $('#credit_card_verification_value').blur(function() {
      $("#errorSpaceCC").hide();
      $("#errorSpaceCVCX1").hide();
      $("#errorSpaceCVCX2").hide();
      $("#contextCC").hide();
      $("#contextCVC").hide();

      var str = $('#credit_card_verification_value').val();


//illegal characters
      if(/^[0-9]*$/.test(str) == false) {

        if($("#errorSpaceCCX1").is(":visible")){
          $("#errorSpaceCCX1").hide();
          $("#errorSpaceCCX1CVCX1").show();
          $(this).css({'border':'red 3px solid'});
        }

        else if($("#errorSpaceCCX2").is(":visible")){
          $("#errorSpaceCCX2").hide();
          $("#errorSpaceCCX2CVCX1").show();
          $(this).css({'border':'red 3px solid'});
        }

        else if($("#errorSpaceCCX1CVCX2").is(":visible")){
          $("#errorSpaceCCX1CVCX2").hide();
          $("#errorSpaceCCX1CVCX1").show();
          $(this).css({'border':'red 3px solid'});
        }
        else if($("#errorSpaceCCX2CVCX2").is(":visible")){
          $("#errorSpaceCCX2CVCX2").hide();
          $("#errorSpaceCCX2CVCX1").show();
          $(this).css({'border':'red 3px solid'});
        }
        else if($("#errorSpaceCCX1CVCX1").is(":visible")
              ||$("#errorSpaceCCX2CVCX1").is(":visible")){
          $(this).css({'border':'red 3px solid'});
        }
        else{
          $(this).css({'border':'red 3px solid'})
          $("#errorSpaceCVCX1").show();
        }

      }

//wrong length
      else if((str.length!=0)&&(str.length!=3)){
        if($("#errorSpaceCCX1").is(":visible")){
          $("#errorSpaceCCX1").hide();
          $("#errorSpaceCCX1CVCX2").show();
          $(this).css({'border':'red 3px solid'});
        }

        else if($("#errorSpaceCCX2").is(":visible")){
          $("#errorSpaceCCX2").hide();
          $("#errorSpaceCCX2CVCX2").show();
          $(this).css({'border':'red 3px solid'});
        }

        else if($("#errorSpaceCCX1CVCX1").is(":visible")){
          $("#errorSpaceCCX1CVCX1").hide();
          $("#errorSpaceCCX1CVCX2").show();
          $(this).css({'border':'red 3px solid'});
        }
        else if($("#errorSpaceCCX2CVCX1").is(":visible")){
          $("#errorSpaceCCX2CVCX1").hide();
          $("#errorSpaceCCX2CVCX2").show();
          $(this).css({'border':'red 3px solid'});
        }
        else if($("#errorSpaceCCX1CVCX2").is(":visible")
              ||$("#errorSpaceCCX2CVCX2").is(":visible")){
          $(this).css({'border':'red 3px solid'});
        }
        else{
          $(this).css({'border':'red 3px solid'});
          $("#errorSpaceCVCX2").show();
        }
      }


      else if(str.length==0){
        // if(($("#errorSpaceCCX1").is(":visible"))
        // ||($("#errorSpaceCCX2").is(":visible"))
        // ||($("#errorSpaceCCX1CVCX2").is(":visible"))
        // ||($("#errorSpaceCCX1CVCX1").is(":visible"))
        // ||($("#errorSpaceCCX2CVCX2").is(":visible"))
        // ||($("#errorSpaceCCX2CVCX1").is(":visible"))
        // ){
        //   $(this).css({'border':'#999999 1px solid'});
        // }
        // else{
        //   $("#errorSpaceCC").show();
        //   $(this).css({'border':'#999999 1px solid'});
        // }

        if(($("#errorSpaceCCX1").is(":visible"))
        ||($("#errorSpaceCCX2").is(":visible"))
        // ||($("#errorSpaceCCX1CVCX2").is(":visible"))
        // ||($("#errorSpaceCCX1CVCX1").is(":visible"))
        // ||($("#errorSpaceCCX2CVCX2").is(":visible"))
        // ||($("#errorSpaceCCX2CVCX1").is(":visible"))
        ){
          $(this).css({'border':'#999999 1px solid'});
        }
        else if($("#errorSpaceCCX1CVCX2").is(":visible")){
          $("#errorSpaceCCX1CVCX2").hide();
          $("#errorSpaceCCX1").show();
          $(this).css({'border':'#999999 1px solid'});
        }
        else if($("#errorSpaceCCX1CVCX1").is(":visible")){
          $("#errorSpaceCCX1CVCX1").hide();
          $("#errorSpaceCCX1").show();
          $(this).css({'border':'#999999 1px solid'});
        }
        else if($("#errorSpaceCCX2CVCX2").is(":visible")){
          $("#errorSpaceCCX2CVCX2").hide();
          $("#errorSpaceCCX2").show();
          $(this).css({'border':'#999999 1px solid'});
        }
        else if($("#errorSpaceCCX2CVCX1").is(":visible")){
          $("#errorSpaceCCX2CVCX1").hide();
          $("#errorSpaceCCX2").show();
          $(this).css({'border':'#999999 1px solid'});
        }
        else{
          $("#errorSpaceCC").show();
          $(this).css({'border':'#999999 1px solid'});
        }
      }

      else{
        // if(($("#errorSpaceCCX1").is(":visible"))
        // ||($("#errorSpaceCCX2").is(":visible"))
        // ||($("#errorSpaceCCX1CVCX2").is(":visible"))
        // ||($("#errorSpaceCCX1CVCX1").is(":visible"))
        // ||($("#errorSpaceCCX2CVCX2").is(":visible"))
        // ||($("#errorSpaceCCX2CVCX1").is(":visible"))
        // ){
        //   $(this).css({'border':'green 3px solid'});
        // }
        // else{
        //   $("#errorSpaceCC").show();
        //   $(this).css({'border':'green 3px solid'});
        // }
        if(($("#errorSpaceCCX1").is(":visible"))
        ||($("#errorSpaceCCX2").is(":visible"))
        // ||($("#errorSpaceCCX1CVCX2").is(":visible"))
        // ||($("#errorSpaceCCX1CVCX1").is(":visible"))
        // ||($("#errorSpaceCCX2CVCX2").is(":visible"))
        // ||($("#errorSpaceCCX2CVCX1").is(":visible"))
        ){
          $(this).css({'border':'green 3px solid'});
        }
        else if($("#errorSpaceCCX1CVCX2").is(":visible")){
          $("#errorSpaceCCX1CVCX2").hide();
          $("#errorSpaceCCX1").show();
          $(this).css({'border':'green 3px solid'});
        }
        else if($("#errorSpaceCCX1CVCX1").is(":visible")){
          $("#errorSpaceCCX1CVCX1").hide();
          $("#errorSpaceCCX1").show();
          $(this).css({'border':'green 3px solid'});
        }
        else if($("#errorSpaceCCX2CVCX2").is(":visible")){
          $("#errorSpaceCCX2CVCX2").hide();
          $("#errorSpaceCCX2").show();
          $(this).css({'border':'green 3px solid'});
        }
        else if($("#errorSpaceCCX2CVCX1").is(":visible")){
          $("#errorSpaceCCX2CVCX1").hide();
          $("#errorSpaceCCX2").show();
          $(this).css({'border':'green 3px solid'});
        }
        else{
          $("#errorSpaceCC").show();
          $(this).css({'border':'green 3px solid'});
        }
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
