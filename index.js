$(document).ready(function() {

  var year=new Date().getFullYear();
  $('#credit_card_year').append($('<option />').val("--").html("--"));
  for (i = 0; i < 10; i++){
    $('#credit_card_year').append($('<option />').val(year+i).html(year+i));
  }

  $('#credit_card_month').append($('<option />').val("--").html("--"));
  for (i =1 ; i < 13; i++){
    $('#credit_card_month').append($('<option />').val(i).html(i));
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
       //display help
       $("#helpCVC").show();
   }); 

    $('#helpLabel').mouseleave(function() {
       //display help
       $("#helpCVC").hide();
   }); 

  $('#credit_card_number').keyup(function(e){
    var str = $('#credit_card_number').val();

    if(str.substr(0,1)=='4'){
        //visa
        $(".american").addClass("innactive");
        $(".maestro").addClass("innactive");
        $(".mastercard").addClass("innactive");
        $(".visa").removeClass("innactive");
        $('#credit_card_number').attr('maxlength', 16);

    }
    else if(str.substr(0,2)=='51'
          ||str.substr(0,2)=='52'){
      //master card
        $(".american").addClass("innactive");
        $(".maestro").addClass("innactive");
        $(".mastercard").removeClass("innactive");
        $(".visa").addClass("innactive");
        $('#credit_card_number').attr('maxlength', 16);


    }
    else if(str.substr(0,2)=='34'
          ||str.substr(0,2)=='37'){
      //american express
        $(".american").removeClass("innactive");
        $(".maestro").addClass("innactive");
        $(".mastercard").addClass("innactive");
        $(".visa").addClass("innactive");
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
        $(".american").addClass("innactive");
        $(".maestro").removeClass("innactive");
        $(".mastercard").addClass("innactive");
        $(".visa").addClass("innactive");
        $('#credit_card_number').attr('maxlength', 19);

    }
    else{
      //card not supported
        $(".american").addClass("innactive");
        $(".maestro").addClass("innactive");
        $(".mastercard").addClass("innactive");
        $(".visa").addClass("innactive");

        if(str.length==4){
            $('#credit_card_number').attr('maxlength', 4);
            $('#credit_card_number').blur();
        }
    }

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
        $("#checkBoxName").text("Illegal characters. You can input lonly letters.");
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
        $("#checkBoxName").text("OK!");
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
        $("#checkBoxLName").text("OK!");
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

      if(/^[0-9]*$/.test(str) == false) { 
        $("#errorSpaceCC").hide();
        $("#checkBoxCC").show();
        $(this).removeClass("positiveBox");
        $(this).addClass("negativeBox");
        $("#checkBoxCC").text("Illegal characters. You can input only numbers.");
        $("#checkBoxCC").removeClass("positiveCheck");
        $("#checkBoxCC").addClass("negativeCheck");
      }

      else if(str.length==4
        && str.substr(0,1)!='4'
        && str.substr(0,2)!='51'
        && str.substr(0,2)!='52'
        && str.substr(0,2)!='34'
        && str.substr(0,2)!='37'
        && str.substr(0,4)!='5018'
        && str.substr(0,4)!='5020'
        && str.substr(0,4)!='5038'
        && str.substr(0,4)!='5612'
        && str.substr(0,4)!='5893'
        && str.substr(0,4)!='6304'
        && str.substr(0,4)!='6761'
        && str.substr(0,4)!='6762'
        && str.substr(0,4)!='6763'
        && str.substr(0,4)!='0604'
        && str.substr(0,4)!='6390'){
          $("#errorSpaceCC").hide();
          $("#checkBoxCC").show();
          $(this).removeClass("positiveBox");
          $(this).addClass("negativeBox");
          $("#checkBoxCC").text("We do not support your card type.");
          $("#checkBoxCC").removeClass("positiveCheck");
          $("#checkBoxCC").addClass("negativeCheck");
      }

      else if(str.length!=0&&str.length<4){
          $("#errorSpaceCC").hide();
          $("#checkBoxCC").show();
          $(this).removeClass("positiveBox");
          $(this).addClass("negativeBox");
          $("#checkBoxCC").text("Invalid length.");
          $("#checkBoxCC").removeClass("positiveCheck");
          $("#checkBoxCC").addClass("negativeCheck");
      }

      else if(str.length==4||str.length>4){

        if(str.substr(0,1)=='4'){
          if(str.length!=13&&str.length!=16){
            $("#errorSpaceCC").hide();
            $("#checkBoxCC").show();
            $(this).removeClass("positiveBox");
            $(this).addClass("negativeBox");
            $("#checkBoxCC").text("Invalid length. You should input 13 or 16 digits.(VISA)");
            $("#checkBoxCC").removeClass("positiveCheck");
            $("#checkBoxCC").addClass("negativeCheck");
          }

          else{
            $("#errorSpaceCC").hide();
            $("#checkBoxCC").show();
            $(this).removeClass("negativeBox");
            $(this).addClass("positiveBox");
            $("#checkBoxCC").text("OK!");
            $("#checkBoxCC").removeClass("negativeCheck");
            $("#checkBoxCC").addClass("positiveCheck");
          }
        }

        else if(str.substr(0,2)=='51'
              ||str.substr(0,2)=='52'){
          if(str.length!=16){
            $("#errorSpaceCC").hide();
            $("#checkBoxCC").show();
            $(this).removeClass("positiveBox");
            $(this).addClass("negativeBox");
            $("#checkBoxCC").text("Invalid length. You should input 16 digits.(MC)");
            $("#checkBoxCC").removeClass("positiveCheck");
            $("#checkBoxCC").addClass("negativeCheck");
          }

          else{
            $("#errorSpaceCC").hide();
            $("#checkBoxCC").show();
            $(this).removeClass("negativeBox");
            $(this).addClass("positiveBox");
            $("#checkBoxCC").text("OK!");
            $("#checkBoxCC").removeClass("negativeCheck");
            $("#checkBoxCC").addClass("positiveCheck");
          }
        }

        else if(str.substr(0,2)=='34'
              ||str.substr(0,2)=='37'){
          if(str.length!=15){
            $("#errorSpaceCC").hide();
            $("#checkBoxCC").show();
            $(this).removeClass("positiveBox");
            $(this).addClass("negativeBox");
            $("#checkBoxCC").text("Invalid length. You should input 15 digits.(AE)");
            $("#checkBoxCC").removeClass("positiveCheck");
            $("#checkBoxCC").addClass("negativeCheck");
          }

          else{
            $("#errorSpaceCC").hide();
            $("#checkBoxCC").show();
            $(this).removeClass("negativeBox");
            $(this).addClass("positiveBox");
            $("#checkBoxCC").text("OK!");
            $("#checkBoxCC").removeClass("negativeCheck");
            $("#checkBoxCC").addClass("positiveCheck");
          }
        }

        else {
          if(str.length<12){
            $("#errorSpaceCC").hide();
            $("#checkBoxCC").show();
            $(this).removeClass("positiveBox");
            $(this).addClass("negativeBox");
            $("#checkBoxCC").text("Invalid length. You should input at least 12 digits.(MAE)");
            $("#checkBoxCC").removeClass("positiveCheck");
            $("#checkBoxCC").addClass("negativeCheck");
          }

          else{
            $("#errorSpaceCC").hide();
            $("#checkBoxCC").show();
            $(this).removeClass("negativeBox");
            $(this).addClass("positiveBox");
            $("#checkBoxCC").text("OK!");
            $("#checkBoxCC").removeClass("negativeCheck");
            $("#checkBoxCC").addClass("positiveCheck");
          }
        }

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
        $("#checkBoxCC").text("OK!");
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


      if((/^[0-9]*$/.test(str) == false)|| ((str.length!=0)&&(str.length!=3))) { //characters
        $("#errorSpaceCVC").hide();
        $("#checkBoxCVC").show();
        $(this).removeClass("positiveBox");
        $(this).addClass("negativeBox");
        $("#checkBoxCVC").text("Not Valid.");
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
        $("#checkBoxCVC").text("OK!");
        $("#checkBoxCVC").removeClass("negativeCheck");
        $("#checkBoxCVC").addClass("positiveCheck");
      }
   }); 


//Date Validation   $('#credit_card_year').click(function() {
   $('#credit_card_year').click(function() {
      dateCheck();
   });  

    $('#credit_card_month').click(function() {
      dateCheck();
    });


  $('input[type="text"]').blur(function(){
    check();
  });

  $('select').blur(function(){
    check();
  });

});


function check(){
  var name = $('#checkBoxName').text();
  var lname = $('#checkBoxLName').text();
  var cvc = $('#checkBoxCVC').text();
  var cc = $('#checkBoxCC').text();
  var date = $('#checkBoxDate').text();

  if((name=='OK!')&&($('#errorSpaceLNameX').is(":visible"))
    &&(lname=='OK!')&&($('#errorSpaceNameX').is(":visible"))
    &&(cc=='OK!')&&($('#checkBoxCVC').is(":visible"))
    &&(cvc=='OK!')&&($('#checkBoxCC').is(":visible"))
    &&(date=='OK!')&&($('#errorDate').is(":visible"))
    ){
    $(":submit").removeAttr("disabled");
  }
  else{
    $(":submit").attr('disabled','disabled');
  }
}

function dateCheck() {
  var d=new Date();
  var y=d.getFullYear();
  var m=d.getMonth()+1;
  var selM= $('#credit_card_month').val();
  var selY= $('#credit_card_year').val();

  if(selY==y){
    if(selM<m){
      $("#errorDateEmpty").hide();
      $("#errorDate").show();
      $("#credit_card_year").removeClass("positiveBox");
      $("#credit_card_month").removeClass("positiveBox");
      $("#credit_card_year").addClass("negativeBox");
      $("#credit_card_month").addClass("negativeBox");
      $("#checkBoxDate").text("Your card has expired or you have chosen a wrong expiration date.");
      //$("#checkBoxDate").removeClass("positiveCheck");
      $("#checkBoxDate").addClass("negativeCheck");
      $("#credit_card_year").blur();
      $("#credit_card_month").blur();
        //red
    }  
    else if(selM=="--"){
      $("#errorDateEmpty").show();
      $("#errorDateEmpty").text("Please select a month");
      $("#errorDateEmpty").text("");
      $("#errorDate").hide();
      $("#credit_card_month").removeClass("positiveBox");
      $("#credit_card_month").removeClass("negativeBox");
      $("#credit_card_year").removeClass("positiveBox");
      $("#credit_card_year").removeClass("negativeBox");
      $("#credit_card_year").blur();
      $("#credit_card_month").blur();
      //please select a month
    }
    else{
      $("#errorDateEmpty").show();
      $("#errorDate").hide();
      //$("#errorDateEmpty").hide();
      //$("#errorDate").show();
      //$("#checkBoxDate").text("OK!");
      //$("#checkBoxDate").addClass("positiveCheck");
      //$("#checkBoxDate").removeClass("negativeCheck");
      $("#credit_card_year").removeClass("negativeBox");
      $("#credit_card_month").removeClass("negativeBox");
      $("#credit_card_year").addClass("positiveBox");
      $("#credit_card_month").addClass("positiveBox");
      $("#credit_card_year").blur();
      $("#credit_card_month").blur();
//green
    }
  }
  else if(selY=="--"){
      $("#errorDateEmpty").show();
      //$("#errorDateEmpty").text("Please select a year");
      $("#errorDateEmpty").text("");
      $("#errorDate").hide();
      $("#credit_card_year").removeClass("positiveBox");
      $("#credit_card_year").removeClass("negativeBox");
      $("#credit_card_month").removeClass("positiveBox");
      $("#credit_card_month").removeClass("negativeBox");
      $("#credit_card_year").blur();
      $("#credit_card_month").blur();
      //please select a year
  }
  else{
    if(selM=="--"){
      $("#errorDateEmpty").show();
      //$("#errorDateEmpty").text("Please select a month");
      $("#errorDateEmpty").text("");
      $("#errorDate").hide();
      $("#credit_card_month").removeClass("positiveBox");
      $("#credit_card_month").removeClass("negativeBox");
      $("#credit_card_year").removeClass("positiveBox");
      $("#credit_card_year").removeClass("negativeBox");
      $("#credit_card_year").blur();
      $("#credit_card_month").blur();
          //please select a month
    }
    else{
      //$("#errorDateEmpty").hide();
      //$("#errorDate").show();
      //$("#checkBoxDate").text("OK!");
      //$("#checkBoxDate").addClass("positiveCheck");
      //$("#checkBoxDate").removeClass("negativeCheck");
      $("#errorDateEmpty").show();
      $("#errorDate").hide();
      $("#credit_card_year").removeClass("negativeBox");
      $("#credit_card_month").removeClass("negativeBox");
      $("#credit_card_year").addClass("positiveBox");
      $("#credit_card_month").addClass("positiveBox");
      $("#credit_card_year").blur();
      $("#credit_card_month").blur();
          //green
    }
  }
}
