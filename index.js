$(document).ready(function() {

  var nameCheck=false;
  var cardCheck=false;
  var cvcCheck=false;

  $('.submitButton').mouseover(function(){
    $('.backSubmit').css('background-color','rgba(72,72,72,1.0)');
  });

  $('.submitButton').mouseout(function(){
    $('.backSubmit').css('background-color','rgba(72,72,72,0.0)');
  });

  var date= new Date();
  var month= date.getMonth();

  var availableMonth = ["01","02","03","04","05","06",
                        "07","08","09","10","11","12"];

  var year= date.getFullYear().toString().substring(2,4);

  var availableYear = new Array();
  availableYear.push(year);
  var nextYear;

  for (var i=0;i<30;i++){ 
    nextYear=date.getFullYear()+i+1;
    availableYear.push(nextYear.toString().substring(2,4));
  }
  
  $("#credit_card_month_value").attr("placeholder", (month+1).toString());
  $("#credit_card_year_value").attr("placeholder", year);



 /*---------------------------CVC HELP----------------------------------------*/
  $('#helpLabel').mouseover(function() {
    $("#helpCVC").show();
  }); 

  $('#helpLabel').mouseleave(function() {
    $("#helpCVC").hide();
  }); 
 /*----------------------END: CVC HELP----------------------------------------*/

 /*-----------------------------FULL NAME  FIELD------------------------------*/
  $('#credit_card_full_name').focus(function() {
    if( !$("#errorSpaceNameX").is(':visible') ) {
      $("#errorSpaceName").show();
      $("#errorSpaceName").text("Enter your full name as it appears on your card");
      $("#errorSpaceNameX").hide();
    }
  }); 

  $('#credit_card_full_name').keyup(function(e){
    var str = $('#credit_card_full_name').val();

    if(/^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1 ]*$/.test(str) == false) {
      $("#errorSpaceName").hide();
      $("#errorSpaceNameX").show();
      $(this).addClass("negativeBox");
      $("#checkBoxName").text("Illegal characters. You can input only letters.");
      $("#checkBoxName").addClass("negativeCheck");
      nameCheck=false;
    }

    else if((str=='')||(str==undefined)){
      $("#errorSpaceName").show();
      $("#errorSpaceNameX").hide();
      $("#checkBoxName").text("");
      $(this).removeClass("negativeBox");
      nameCheck=false;
    }

    else{
      $(this).removeClass("negativeBox");
      $("#errorSpaceNameX").hide();
      $("#errorSpaceName").show();
      $("#errorSpaceName").text("Enter your full name as it appears on your card");
      $("#checkBoxName").removeClass("negativeCheck");
      nameCheck=true;
    }
  });

  $('#credit_card_full_name').blur(function() {
    var str = $('#credit_card_full_name').val();
    $("#errorSpaceName").text("");
    if(/^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1 ]*$/.test(str) == false) {
      $("#errorSpaceName").hide();
      $("#errorSpaceNameX").show();
      $(this).addClass("negativeBox");
      $("#checkBoxName").text("Illegal characters. You can input only letters.");
      $("#checkBoxName").addClass("negativeCheck");
      nameCheck=false;
      $('#credit_card_full_name').focus().val();
    }
  }); 
 /*---------------------- END: FULL NAME  FIELD-------------------------------*/


 /*-------------------------CREDIT CARD NUMBER FIELD--------------------------*/  

  //Credit Card Context
  $('#credit_card_number').focus(function() {
    if(!$("#checkBoxCC").is(':visible')) {
      $("#errorSpaceCC").text("Enter your credit card number without any spaces");
      $("#errorSpaceCC").show();
      $("#checkBoxCC").hide();
    }
  }); 

  //Credit Card Number Validation

  $('#credit_card_number').keyup(function(e){

    var str = $('#credit_card_number').val();

   //Card Type Validation
   if(str.length==0){
        $("#checkBoxCC").hide();
        $("#errorSpaceCC").show();
        $("#checkBoxCC").text("");
        $(this).removeClass("negativeBox");
        $("#checkBoxCC").removeClass("negativeCheck");
        cardCheck=false;
    }
    else if(str.length!=0&&str.length<12){
      cardCheck=false;
    }
    if(str.substr(0,1)=='4'){
      //visa
      $(".cardNumberBox").removeClass("american");
      $(".cardNumberBox").removeClass("mastercard");
      $(".cardNumberBox").removeClass("maestro");
      $(".cardNumberBox").addClass("visa");
      $('#credit_card_number').attr('maxlength', 16);
    }

    else if(str.substr(0,2)=='51'
          ||str.substr(0,2)=='52'){
      //master card
      $(".cardNumberBox").removeClass("american");
      $(".cardNumberBox").removeClass("visa");
      $(".cardNumberBox").removeClass("maestro");
      $(".cardNumberBox").addClass("mastercard");
      $('#credit_card_number').attr('maxlength', 16);
    }

    else if(str.substr(0,2)=='34'
          ||str.substr(0,2)=='37'){
      //american express
      $(".cardNumberBox").removeClass("visa");
      $(".cardNumberBox").removeClass("mastercard");
      $(".cardNumberBox").removeClass("maestro");
      $(".cardNumberBox").addClass("american");
      $('#credit_card_number').attr('maxlength', 15);
    }

    else if(str.substr(0,4)=='5018'
          ||str.substr(0,4)=='5020'
          ||str.substr(0,4)=='5038'
          ||str.substr(0,4)=='5612'
          ||str.substr(0,4)=='5893'
          ||str.substr(0,4)=='6304'
          ||str.substr(0,4)=='6761'
          ||str.substr(0,4)=='6762'
          ||str.substr(0,4)=='6763'
          ||str.substr(0,4)=='0604'
          ||str.substr(0,4)=='6390'){
      //maestro
      $(".cardNumberBox").removeClass("american");
      $(".cardNumberBox").removeClass("mastercard");
      $(".cardNumberBox").removeClass("visa");
      $(".cardNumberBox").addClass("maestro");
      $('#credit_card_number').attr('maxlength', 19);
    }

    else{
      //card not supported
      $(".cardNumberBox").removeClass("american");
      $(".cardNumberBox").removeClass("mastercard");
      $(".cardNumberBox").removeClass("maestro");
      $(".cardNumberBox").removeClass("visa");

      if(str.length==4&&/^[0-9]*$/.test(str) == true){
        $('#credit_card_number').attr('maxlength', 4);
        $("#errorSpaceCC").hide();
        $("#checkBoxCC").show();
        $('#credit_card_number').addClass("negativeBox");
        $("#checkBoxCC").text("We do not support your card type.");
        $("#checkBoxCC").addClass("negativeCheck");
        cardCheck=false;
      }
    }

    if(/^[0-9]*$/.test(str) == false) { 
      $("#errorSpaceCC").hide();
      $("#checkBoxCC").show();
      $(this).addClass("negativeBox");
      $("#checkBoxCC").text("Illegal characters. You can input only numbers.");
      $("#checkBoxCC").addClass("negativeCheck");
      cardCheck=false;
    }

    else if(str.length>4 && (/^[0-9]*$/.test(str) == true)){
      $("#checkBoxCC").hide();
      $("#errorSpaceCC").show();
      $("#checkBoxCC").text("");
      $(this).removeClass("negativeBox");
      $("#checkBoxCC").removeClass("negativeCheck");

      if(str.substr(0,1)=='4'){
        if(str.length==13||str.length==16){
          cardCheck=true;
        }
        else{
          cardCheck=false;
        } 
      }

      else if(str.substr(0,2)=='51'
            ||str.substr(0,2)=='52'){
        if(str.length==16){
          cardCheck=true;
        }
        else{
          cardCheck=false;
        } 
      }

      else if(str.substr(0,2)=='34'
            ||str.substr(0,2)=='37'){
        if(str.length==15){
          cardCheck=true;
        }
        else{
          cardCheck=false;
        } 
      }

      else if(str.substr(0,4)=='5018'
              ||str.substr(0,4)=='5020'
              ||str.substr(0,4)=='5038'
              ||str.substr(0,4)=='5612'
              ||str.substr(0,4)=='5893'
              ||str.substr(0,4)=='6304'
              ||str.substr(0,4)=='6761'
              ||str.substr(0,4)=='6762'
              ||str.substr(0,4)=='6763'
              ||str.substr(0,4)=='0604'
              ||str.substr(0,4)=='6390'){
        if(str.length>12){
          cardCheck=true;
        }
        else{
          cardCheck=false;
        } 
      }
    }
    else if(str.length<4&& (/^[0-9]*$/.test(str) == true)){
      $("#checkBoxCC").hide();
      $("#errorSpaceCC").show();
      $("#checkBoxCC").text("");
      $(this).removeClass("negativeBox");
      $("#checkBoxCC").removeClass("negativeCheck");
    }
  }); 


  $('#credit_card_number').blur(function() {

    $("#checkBoxCC").text("");
    var str = $('#credit_card_number').val();
    var errorMsg=$('#checkBoxCC').text();

    if(/^[0-9]*$/.test(str) == false) { 
      $("#errorSpaceCC").hide();
      $("#checkBoxCC").show();
      $(this).addClass("negativeBox");
      $("#checkBoxCC").text("Illegal characters. You can input only numbers.");
      $("#checkBoxCC").addClass("negativeCheck");
      cardCheck=false;
      $('#credit_card_number').focus().val();
    }

    else if(str.length!=0&&str.length<4){
      $("#errorSpaceCC").hide();
      $("#checkBoxCC").show();
      $(this).addClass("negativeBox");
      $("#checkBoxCC").text("Invalid length.");
      $("#checkBoxCC").addClass("negativeCheck");
      cardCheck=false;
      $('#credit_card_number').focus().val();
    }

    else if(str.length==4||str.length>4){

      if(str.substr(0,1)=='4'){
        if(str.length!=13&&str.length!=16){
          $("#errorSpaceCC").hide();
          $("#checkBoxCC").show();
          $(this).addClass("negativeBox");
          $("#checkBoxCC").text("Invalid length. You should input 13 or 16 digits.(VISA)");
          $("#checkBoxCC").addClass("negativeCheck");
          cardCheck=false;
          $('#credit_card_number').focus().val();
        }
      }
      else if(str.substr(0,2)=='51'
            ||str.substr(0,2)=='52'){
        if(str.length!=16){
          $("#errorSpaceCC").hide();
          $("#checkBoxCC").show();
          $(this).addClass("negativeBox");
          $("#checkBoxCC").text("Invalid length. You should input 16 digits.(MC)");
          $("#checkBoxCC").addClass("negativeCheck");
          cardCheck=false;
          $('#credit_card_number').focus().val();
        }
      }

      else if(str.substr(0,2)=='34'
            ||str.substr(0,2)=='37'){
        if(str.length!=15){
          $("#errorSpaceCC").hide();
          $("#checkBoxCC").show();
          $(this).addClass("negativeBox");
          $("#checkBoxCC").text("Invalid length. You should input 15 digits.(AE)");
          $("#checkBoxCC").addClass("negativeCheck");
          cardCheck=false;
          $('#credit_card_number').focus().val();
        }
      }

      else if(str.substr(0,4)=='5018'
            ||str.substr(0,4)=='5020'
            ||str.substr(0,4)=='5038'
            ||str.substr(0,4)=='5612'
            ||str.substr(0,4)=='5893'
            ||str.substr(0,4)=='6304'
            ||str.substr(0,4)=='6761'
            ||str.substr(0,4)=='6762'
            ||str.substr(0,4)=='6763'
            ||str.substr(0,4)=='0604'
            ||str.substr(0,4)=='6390') {
          if(str.length<12){
            $("#errorSpaceCC").hide();
            $("#checkBoxCC").show();
            $(this).addClass("negativeBox");
            $("#checkBoxCC").text("Invalid length. You should input at least 12 digits.(MAE)");
            $("#checkBoxCC").removeClass("positiveCheck");
            $("#checkBoxCC").addClass("negativeCheck");
            cardCheck=false;
            $('#credit_card_number').focus().val(); 
          }
        }

      }

      else if(str.length==0){//empty
        $("#checkBoxCC").hide();
        $("#errorSpaceCC").show();
        $("#checkBoxCC").text("");
        $("#errorSpaceCC").text("");
        $(this).removeClass("negativeBox");
        $("#checkBoxCC").removeClass("negativeCheck");
      }

      else{//ok
        $("#checkBoxCC").hide();
        $("#errorSpaceCC").show();
        $("#checkBoxCC").text("");
        $("#errorSpaceCC").text("");
        $(this).removeClass("negativeBox");
        $("#checkBoxCC").removeClass("negativeCheck");

      }
   });
 /*---------------------------------------------------------------------------*/


 /*---------------------------------CVC FIELD---------------------------------*/
  $('#credit_card_verification_value').focus(function() {
    if( !$("#checkBoxCVC").is(':visible') ) {
      $("#errorSpaceCVC").show();
      $("#errorSpaceCVC").text("3 digits");
      $("#checkBoxCVC").hide();
    }
  });  

  $('#credit_card_verification_value').keyup(function(e) {
    var str = $('#credit_card_verification_value').val();

    if((/^[0-9]*$/.test(str) == false)) { 
      $("#errorSpaceCVC").hide();
      $("#checkBoxCVC").show();
      $('#credit_card_verification_value').addClass("negativeBox");
      $("#checkBoxCVC").text("Not Valid.");
      $("#checkBoxCVC").addClass("negativeCheck");
      $('#credit_card_verification_value').focus().val();
      cvcCheck=false;
    }

    else if(str.length==0){
      $("#checkBoxCVC").hide();
      $("#errorSpaceCVC").show();
      $("#checkBoxCVC").text("");
      $('#credit_card_verification_value').removeClass("negativeBox");
      $("#checkBoxCVC").removeClass("negativeCheck");
      cvcCheck=false;
    }

    else if(str.length==3){
        $('#credit_card_verification_value').removeClass("negativeBox");
        $("#errorSpaceCVC").show();
        $("#checkBoxCVC").hide();
        $("#checkBoxCVC").removeClass("negativeCheck");
        cvcCheck=true;
    }
  }); 


  $('#credit_card_verification_value').blur(function() {

    var str = $('#credit_card_verification_value').val();

    if((/^[0-9]*$/.test(str) == false)) { 
      $("#errorSpaceCVC").hide();
      $("#checkBoxCVC").show();
      $('#credit_card_verification_value').addClass("negativeBox");
      $("#checkBoxCVC").text("Not Valid.");
      $("#checkBoxCVC").addClass("negativeCheck");
      cvcCheck=false;
      $('#credit_card_verification_value').focus().val();
    }

    else if(str.length!=0&&str.length<3){
      $("#errorSpaceCVC").hide();
      $("#checkBoxCVC").show();
      $('#credit_card_verification_value').addClass("negativeBox");
      $("#checkBoxCVC").text("Incomplete.");
      $("#checkBoxCVC").addClass("negativeCheck");
      cvcCheck=false;
      $('#credit_card_verification_value').focus().val();
    }
    else if(str.length==0){
      $('#credit_card_verification_value').removeClass("negativeBox");
        $("#errorSpaceCVC").show();
        $("#errorSpaceCVC").text("");
        $("#checkBoxCVC").hide();
        $("#checkBoxCVC").removeClass("negativeCheck");
        cvcCheck=false;
    }

    else{
        $('#credit_card_verification_value').removeClass("negativeBox");
        $("#errorSpaceCVC").show();
        $("#errorSpaceCVC").text("");
        $("#checkBoxCVC").hide();
        $("#checkBoxCVC").removeClass("negativeCheck");
        cvcCheck=true;
    }
   }); 

 /*---------------------------------------------------------------------------*/


 /*-------------------DATE FIELDS FORMATING AND CHECK-------------------------*/
  $('#credit_card_month_value').focus(function() {
    $("#credit_card_month_value").attr("placeholder", "");
  });

  $('#credit_card_year_value').focus(function() {
    $("#credit_card_year_value").attr("placeholder", "");
  });

  $('#credit_card_month_value').keyup(function(e) {
    dateCheck();
  });

  $('#credit_card_year_value').keyup(function(e) {
    dateCheck();
  });

  $('#credit_card_year_value').blur(function() {
    dateCheckOnBlur();
  });

  $('#credit_card_month_value').blur(function() {
    dateCheckOnBlur();
  });

  $("#credit_card_month_value").autocomplete({
    source: availableMonth
  });

  $("#credit_card_year_value").autocomplete({
    //source: availableYear
    source: function(request, response) {
        var results = $.ui.autocomplete.filter(availableYear, request.term);
        response(results.slice(0, 7));
    }
  });

 /*--------------------------END:DATE FIELDS FORMATING------------------------*/



 /*----------------------------FINAL CHECK------------------------------------*/
  $('input[type="text"]').keyup(function(e){
    check(nameCheck,cardCheck, cvcCheck);
  });

  $('input[type="password"]').keyup(function(e){
    check(nameCheck,cardCheck, cvcCheck);
  });
 /*--------------------------END: FINAL CHECK---------------------------------*/
});

var dateCh=false;
function check(nameCheck,cardCheck, cvcCheck){

  if((nameCheck==true)
    &&(cardCheck==true)
    &&(cvcCheck==true)
    &&(dateCh==true)
    ){
    $(":submit").removeAttr("disabled");
  }
  else{
    $(":submit").attr('disabled','disabled');
  }
}

function dateCheck() {
  var d=new Date();
  var y=d.getFullYear().toString().substr(2,4);
  var m=d.getMonth();
  var selM= $('#credit_card_month_value').val().toString();
  var selY= $('#credit_card_year_value').val().toString(); 


  if((/^[0-9]*$/.test(selY) == false)){
    $("#errorDateEmpty").hide();
    $("#errorDate").show();
    $("#credit_card_year_value").addClass("negativeBox");
    $("#credit_card_month_value").addClass("negativeBox");
    $("#checkBoxDate").text("You can input only digits.");
    $("#checkBoxDate").addClass("negativeCheck");
    $("#credit_card_year_value").focus().val();
    dateCh=false;
  }
  else if((/^[0-9]*$/.test(selM) == false)){
    $("#errorDateEmpty").hide();
    $("#errorDate").show();
    $("#credit_card_year_value").addClass("negativeBox");
    $("#credit_card_month_value").addClass("negativeBox");
    $("#checkBoxDate").text("You can input only digits.");
    $("#checkBoxDate").addClass("negativeCheck");
    $("#credit_card_month_value").focus().val();
    dateCh=false;
  }
  else{
    if(selM>12){
      $("#errorDateEmpty").hide();
      $("#errorDate").show();
      $("#credit_card_year_value").addClass("negativeBox");
      $("#credit_card_month_value").addClass("negativeBox");
      $("#checkBoxDate").text("Invalid Month entered.");
      $("#checkBoxDate").addClass("negativeCheck");
      $("#credit_card_year_value").focus().val();
      dateCh=false;
    }
    if(selY==y){
      if(selM<m){
        //ERROR
        $("#errorDateEmpty").hide();
        $("#errorDate").show();
        $("#credit_card_year_value").addClass("negativeBox");
        $("#credit_card_month_value").addClass("negativeBox");
        $("#checkBoxDate").text("Your card has expired or you have chosen a wrong expiration date.");
        $("#checkBoxDate").addClass("negativeCheck");
        $("#credit_card_year_value").focus().val();
        dateCh=false;
     }
      else if(selM==""){
        //Must input a month
        $("#credit_card_month_value").attr("placeholder", m+1);
        $("#errorDateEmpty").show();
        $("#errorDateEmpty").text("");
        $("#checkBoxDate").text("");
        $("#errorDate").hide();
        $("#credit_card_month_value").removeClass("negativeBox");
        $("#credit_card_year_value").removeClass("negativeBox");
        dateCh=false;
      }
      else{
        //EVERYTHING OK!
        $("#errorDateEmpty").show();
        $("#errorDate").hide();
        $("#checkBoxDate").text("");
        $("#credit_card_year_value").removeClass("negativeBox");
        $("#credit_card_month_value").removeClass("negativeBox");
        dateCh=true;
      }
    }
    else if(selY==""){
      //Must input a year
      $("#credit_card_year_value").attr("placeholder", y);
      $("#errorDateEmpty").show();
      $("#errorDateEmpty").text("");
      $("#checkBoxDate").text("");
      $("#errorDate").hide();
      $("#credit_card_year_value").removeClass("negativeBox");
      $("#credit_card_month_value").removeClass("negativeBox");
      dateCh=false;
    }

    else if(selY.length==2&&selY<y){
      //ERROR
      $("#errorDateEmpty").hide();
      $("#errorDate").show();
      $("#credit_card_year_value").addClass("negativeBox");
      $("#credit_card_month_value").addClass("negativeBox");
      $("#checkBoxDate").text("Your card has expired or you have chosen a wrong expiration date.");
      $("#checkBoxDate").addClass("negativeCheck");
      $("#credit_card_year_value").focus().val();
      dateCh=false;
    }
    else if(selY.length==1){
      dateCh=false;
    }
    else{
      if(selM==""){
        //Must input a month
        $("#credit_card_month_value").attr("placeholder", m+1);
        $("#errorDateEmpty").show();
        $("#errorDateEmpty").text("");
        $("#checkBoxDate").text("");
        $("#errorDate").hide();
        $("#credit_card_month_value").removeClass("negativeBox");
        $("#credit_card_year_value").removeClass("negativeBox");
        dateCh=false;
      }
      else{
        $("#checkBoxDate").text("");
        $("#errorDateEmpty").show();
        $("#errorDate").hide();
        $("#credit_card_year_value").removeClass("negativeBox");
        $("#credit_card_month_value").removeClass("negativeBox");
        dateCh=true;
      }
    }
  }
}

function dateCheckOnBlur(){
  var d=new Date();
  var y=d.getFullYear().toString().substr(2,4);
  var m=d.getMonth();
  var selM= $('#credit_card_month_value').val().toString();
  var selY= $('#credit_card_year_value').val().toString();

  if(selY.length==1){
    $("#errorDateEmpty").hide();
    $("#errorDate").show();
    $("#credit_card_year_value").addClass("negativeBox");
    $("#credit_card_month_value").addClass("negativeBox");
    $("#checkBoxDate").text("Invalid year's length. Please input 2 digits.");
    $("#checkBoxDate").addClass("negativeCheck");
    $("#credit_card_year_value").focus().val();
    dateCh=false;
  }
  else if(selY.length==0){
    $("#credit_card_year_value").attr("placeholder", y);
    if(selM.length==0){
      $("#credit_card_month_value").attr("placeholder", m+1);
    }
    dateCh=false;
  }

  if(selM.length==0){
    $("#credit_card_month_value").attr("placeholder", m+1);
    if(selY.length==0){
      $("#credit_card_year_value").attr("placeholder", y);
    }
    dateCh=false;
  }

}
