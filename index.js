$(document).ready(function() {
  $('.submitButton').mouseover(function(){
    $('.backSubmit').css('background-color','rgba(72,72,72,1.0)');
  });

  $('.submitButton').mouseout(function(){
    $('.backSubmit').css('background-color','rgba(72,72,72,0.0)');
  });
  var date= new Date();
  var month= date.getMonth();
  var availableMonth = [
      "01","02","03","04","05","06","07","08","09","10","11","12"
  ];
  var year= date.getFullYear();
  var yearString=year.toString();
  var yearTwoDigits=yearString[2]+yearString[3];
  var availableYear = new Array();
  availableYear.push(yearTwoDigits);
  var nextYear;
  var nextYearString;
  for (var i=0;i<25;i++)
  { 
    nextYear=year+i+1;
    nextYearString=nextYear.toString();
    availableYear.push(nextYearString[2]+nextYearString[3]);
  }
  
  console.log(availableYear);
  $("#credit_card_month_value").attr("placeholder", (month+1).toString());
  $("#credit_card_year_value").attr("placeholder", yearTwoDigits);

  
   $('.submitButton').click(function() {
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

        if(str.length==4){
            $('#credit_card_number').attr('maxlength', 4);
            $('#credit_card_number').blur();
        }
    }
  }); 


//First Name Context + Validation
   $('#credit_card_full_name').click(function() {
      $("#errorSpaceName").show();
      $("#errorSpaceName").text("Enter your full name as it appears on your card");
      $("#errorSpaceNameX").hide();
   }); 

   $('#credit_card_full_name').blur(function() {

      $("#errorSpaceName").text("");
      $("#errorSpaceNameX").hide();

      var str = $('#credit_card_full_name').val();

      if(/^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1 ]*$/.test(str) == false) {
        $("#errorSpaceName").hide();
        $("#errorSpaceNameX").show();
        //$(this).removeClass("positiveBox");
        $(this).addClass("negativeBox");
        $("#checkBoxName").text("Illegal characters. You can input only letters.");
        $("#checkBoxName").removeClass("positiveCheck");
        $("#checkBoxName").addClass("negativeCheck");
      }

      else if((str=='')||(str==undefined)){
        $("#errorSpaceName").show();
        $("#checkBoxName").text("");
        //$(this).removeClass("positiveBox");
        $(this).removeClass("negativeBox");
      }

      else{
        //$("#errorSpaceName").hide();
        //$("#errorSpaceNameX").show();
        $(this).removeClass("negativeBox");
        //$(this).addClass("positiveBox");
        $("#checkBoxName").text("OK!");
        $("#checkBoxName").removeClass("negativeCheck");
        //$("#checkBoxName").addClass("positiveCheck");
      }

   }); 

//Last Name Context + Validation

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
        //$(this).removeClass("positiveBox");
        $(this).addClass("negativeBox");
        $("#checkBoxCC").text("Illegal characters. You can input only numbers.");
        //$("#checkBoxCC").removeClass("positiveCheck");
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
          //$(this).removeClass("positiveBox");
          $(this).addClass("negativeBox");
          $("#checkBoxCC").text("We do not support your card type.");
          //$("#checkBoxCC").removeClass("positiveCheck");
          $("#checkBoxCC").addClass("negativeCheck");
      }

      else if(str.length!=0&&str.length<4){
          $("#errorSpaceCC").hide();
          $("#checkBoxCC").show();
          //$(this).removeClass("positiveBox");
          $(this).addClass("negativeBox");
          $("#checkBoxCC").text("Invalid length.");
          //$("#checkBoxCC").removeClass("positiveCheck");
          $("#checkBoxCC").addClass("negativeCheck");
      }

      else if(str.length==4||str.length>4){

        if(str.substr(0,1)=='4'){
          if(str.length!=13&&str.length!=16){
            $("#errorSpaceCC").hide();
            $("#checkBoxCC").show();
            //$(this).removeClass("positiveBox");
            $(this).addClass("negativeBox");
            $("#checkBoxCC").text("Invalid length. You should input 13 or 16 digits.(VISA)");
            //$("#checkBoxCC").removeClass("positiveCheck");
            $("#checkBoxCC").addClass("negativeCheck");
          }

          else{
            //$("#errorSpaceCC").hide();
            //$("#checkBoxCC").show();
            $(this).removeClass("negativeBox");
            //$(this).addClass("positiveBox");
            $("#checkBoxCC").text("OK!");
            $("#checkBoxCC").removeClass("negativeCheck");
            //$("#checkBoxCC").addClass("positiveCheck");
          }
        }

        else if(str.substr(0,2)=='51'
              ||str.substr(0,2)=='52'){
          if(str.length!=16){
            $("#errorSpaceCC").hide();
            $("#checkBoxCC").show();
            //$(this).removeClass("positiveBox");
            $(this).addClass("negativeBox");
            $("#checkBoxCC").text("Invalid length. You should input 16 digits.(MC)");
            //$("#checkBoxCC").removeClass("positiveCheck");
            $("#checkBoxCC").addClass("negativeCheck");
          }

          else{
            //$("#errorSpaceCC").hide();
            //$("#checkBoxCC").show();
            $(this).removeClass("negativeBox");
            //$(this).addClass("positiveBox");
            $("#checkBoxCC").text("OK!");
            $("#checkBoxCC").removeClass("negativeCheck");
            //$("#checkBoxCC").addClass("positiveCheck");
          }
        }

        else if(str.substr(0,2)=='34'
              ||str.substr(0,2)=='37'){
          if(str.length!=15){
            $("#errorSpaceCC").hide();
            $("#checkBoxCC").show();
            //$(this).removeClass("positiveBox");
            $(this).addClass("negativeBox");
            $("#checkBoxCC").text("Invalid length. You should input 15 digits.(AE)");
            //$("#checkBoxCC").removeClass("positiveCheck");
            $("#checkBoxCC").addClass("negativeCheck");
          }

          else{
            //$("#errorSpaceCC").hide();
            //$("#checkBoxCC").show();
            $(this).removeClass("negativeBox");
            //$(this).addClass("positiveBox");
            $("#checkBoxCC").text("OK!");
            $("#checkBoxCC").removeClass("negativeCheck");
            //$("#checkBoxCC").addClass("positiveCheck");
          }
        }

        else {
          if(str.length<12){
            $("#errorSpaceCC").hide();
            $("#checkBoxCC").show();
            //$(this).removeClass("positiveBox");
            $(this).addClass("negativeBox");
            $("#checkBoxCC").text("Invalid length. You should input at least 12 digits.(MAE)");
            $("#checkBoxCC").removeClass("positiveCheck");
            $("#checkBoxCC").addClass("negativeCheck");
          }

          else{
            //$("#errorSpaceCC").hide();
            //$("#checkBoxCC").show();
            $(this).removeClass("negativeBox");
            //$(this).addClass("positiveBox");
            $("#checkBoxCC").text("OK!");
            $("#checkBoxCC").removeClass("negativeCheck");
            //$("#checkBoxCC").addClass("positiveCheck");
          }
        }
      }

      else if(str.length==0){//empty
        $("#checkBoxCC").hide();
        $("#errorSpaceCC").show();
        $("#checkBoxCC").text("");
        $(this).removeClass("negativeBox");
        //$(this).removeClass("positiveBox");
        $("#checkBoxCC").removeClass("negativeCheck");
        //$("#checkBoxCC").removeClass("positiveCheck");
      }

      else{//ok
        //$("#errorSpaceCC").hide();
        //$("#checkBoxCC").show();
        $(this).removeClass("negativeBox");
        //$(this).addClass("positiveBox");
        $("#checkBoxCC").text("OK!");
        $("#checkBoxCC").removeClass("negativeCheck");
        //$("#checkBoxCC").addClass("positiveCheck");
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
        //$(this).removeClass("positiveBox");
        $(this).addClass("negativeBox");
        $("#checkBoxCVC").text("Not Valid.");
        //$("#checkBoxCVC").removeClass("positiveCheck");
        $("#checkBoxCVC").addClass("negativeCheck");
      }


      else if(str.length==0){//empty
        $("#checkBoxCVC").hide();
        $("#errorSpaceCVC").show();
        $("#checkBoxCVC").text("");
        $(this).removeClass("negativeBox");
        //$(this).removeClass("positiveBox");
        $("#checkBoxCVC").removeClass("negativeCheck");
        //$("#checkBoxCVC").removeClass("positiveCheck");
      }

      else{//ok
       // $("#errorSpaceCVC").hide();
        //$("#checkBoxCVC").show();
        $(this).removeClass("negativeBox");
        //$(this).addClass("positiveBox");
        $("#checkBoxCVC").text("OK!");
        $("#checkBoxCVC").removeClass("negativeCheck");
        //$("#checkBoxCVC").addClass("positiveCheck");
      }
   }); 


  $('#credit_card_month_value').focus(function() {
    $("#credit_card_month_value").attr("placeholder", "");
  
  });
  $('#credit_card_year_value').focus(function() {
    $("#credit_card_year_value").attr("placeholder", "");
  });

  $('#credit_card_month_value').blur(function() {
    var date= new Date();
    var month= date.getMonth();
    $("#credit_card_month_value").attr("placeholder", (month+1).toString());
  });

  $('#credit_card_year_value').blur(function() {var date= new Date();
    var date= new Date();
    var year= date.getFullYear();
    year=year.toString();
    var yearTwoDigits=year[2]+year[3];
    $("#credit_card_year_value").attr("placeholder", yearTwoDigits);
  });

  
  console.log(availableYear);
  $("#credit_card_month_value").autocomplete({
      source: availableMonth
    });
//Date Validation
    $('#credit_card_year').change(function() {
      dateCheck();
    });  

    $('#credit_card_month').change(function() {
      dateCheck();
    });


    $('input[type="text"]').blur(function(){
      check();
    });

    $('input[type="text"]').blur(function(){
      check();
    });

});


function check(){
  var name = $('#checkBoxName').text();
  var cvc = $('#checkBoxCVC').text();
  var cc = $('#checkBoxCC').text();
  var date = $('#checkBoxDate').text();

  if((name=='OK!')
    &&(cc=='OK!')
    &&(cvc=='OK!')
    &&(date=='OK!')
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
      //$("#credit_card_year").removeClass("positiveBoxDD");
      //$("#credit_card_month").removeClass("positiveBoxDD");
      $("#credit_card_year").addClass("negativeBoxDD");
      $("#credit_card_month").addClass("negativeBoxDD");
      $("#checkBoxDate").text("Your card has expired or you have chosen a wrong expiration date.");
      //$("#checkBoxDate").removeClass("positiveCheck");
      $("#checkBoxDate").addClass("negativeCheck");
      $("#credit_card_year").blur();
      $("#credit_card_month").blur();
        //red
    }  
    else if(selM=="--"){
      $("#errorDateEmpty").show();
      //$("#errorDateEmpty").text("Please select a month");
      $("#errorDateEmpty").text("");
      $("#checkBoxDate").text("");
      $("#errorDate").hide();
      //$("#credit_card_month").removeClass("positiveBoxDD");
      $("#credit_card_month").removeClass("negativeBoxDD");
      //$("#credit_card_year").removeClass("positiveBoxDD");
      $("#credit_card_year").removeClass("negativeBoxDD");
      $("#credit_card_year").blur();
      $("#credit_card_month").blur();
      //please select a month
    }
    else{
      $("#errorDateEmpty").show();
      $("#errorDate").hide();
      //$("#errorDateEmpty").hide();
      //$("#errorDate").show();
      $("#checkBoxDate").text("OK!");
      //$("#checkBoxDate").addClass("positiveCheck");
      //$("#checkBoxDate").removeClass("negativeCheck");
      $("#credit_card_year").removeClass("negativeBoxDD");
      $("#credit_card_month").removeClass("negativeBoxDD");
      //$("#credit_card_year").addClass("positiveBoxDD");
      //$("#credit_card_month").addClass("positiveBoxDD");
      $("#credit_card_year").blur();
      $("#credit_card_month").blur();
//green
    }
  }
  else if(selY=="--"){
      $("#errorDateEmpty").show();
      //$("#errorDateEmpty").text("Please select a year");
      $("#errorDateEmpty").text("");
      $("#checkBoxDate").text("");
      $("#errorDate").hide();
      //$("#credit_card_year").removeClass("positiveBoxDD");
      $("#credit_card_year").removeClass("negativeBoxDD");
      //$("#credit_card_month").removeClass("positiveBoxDD");
      $("#credit_card_month").removeClass("negativeBoxDD");
      $("#credit_card_year").blur();
      $("#credit_card_month").blur();
      //please select a year
  }
  else{
    if(selM=="--"){
      $("#errorDateEmpty").show();
      //$("#errorDateEmpty").text("Please select a month");
      $("#errorDateEmpty").text("");
      $("#checkBoxDate").text("");
      $("#errorDate").hide();
      //$("#credit_card_month").removeClass("positiveBoxDD");
      $("#credit_card_month").removeClass("negativeBoxDD");
      //$("#credit_card_year").removeClass("positiveBoxDD");
      $("#credit_card_year").removeClass("negativeBoxDD");
      $("#credit_card_year").blur();
      $("#credit_card_month").blur();
          //please select a month
    }
    else{
      //$("#errorDateEmpty").hide();
      //$("#errorDate").show();
      $("#checkBoxDate").text("OK!");
      //$("#checkBoxDate").addClass("positiveCheck");
      //$("#checkBoxDate").removeClass("negativeCheck");
      $("#errorDateEmpty").show();
      $("#errorDate").hide();
      $("#credit_card_year").removeClass("negativeBoxDD");
      $("#credit_card_month").removeClass("negativeBoxDD");
      //$("#credit_card_year").addClass("positiveBoxDD");
      //$("#credit_card_month").addClass("positiveBoxDD");
      $("#credit_card_year").blur();
      $("#credit_card_month").blur();
          //green
    }
  }
}
