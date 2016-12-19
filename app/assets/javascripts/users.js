/* global $, Stripe  */

// Document ready.
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form');
  var submitBtn = $('#form-signup-btn');

  // Set Strip public key.
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
  
  // When user clicks submits button
  // prevent default submission behavior.
  submitBtn.click(function(event){
    event.preventDefault();
     // Collect the credit card fields.Collect
     var ccNum = $('#card_number').val(),
     cvcNum = $('#card_code').val(),
     expMonth = $('#card_month').val(),
     expYear = $('#card_year').val();
     
    // Send card fields to Stripe.     
    Stripe.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
  });

  
  


  // Stripe will return token.
  // Inject card token into hidden field in form.
  // Submit form to our Rails app.
  
})