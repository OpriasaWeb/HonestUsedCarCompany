
const accountNumbers = ['8898337467134', '2887858987627', '1255878498687', '1125899648579', '356684587854'];

$('#submit').click(function(){

  // console.log("Used Car");

  var accountNumber = $('#accountNumber').val();
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var purchasePrice = $('#purchasePrice').val();
  var carPrice = 1000000;

  var downPayment = carPrice - purchasePrice;
  

  
  if(accountNumber == '' || firstName == '' || lastName == '' || purchasePrice == ''){
    alert("Please fill-in everything.");  
  }
  else{
    $('#result').append(`Account number: ${accountNumber}`);
    $('#result').append(`<br>`);
    $('#result').append(`Customer name: ${firstName} ${lastName}`);
    $('#result').append(`<br>`);
    $('#result').append(`Downpayment: ${downPayment}`);
    $('#result').append(`<br>`);
    
    var twentyFourMonths = downPayment / 24;

    var month = 24;
    var cntrlVrbl = 0;
    while(cntrlVrbl < month){
      $('#result').append(`Price each month: ${twentyFourMonths}`);
      $('#result').append(`<br>`);
      cntrlVrbl = cntrlVrbl + 1;
    }

  }


  
  

})