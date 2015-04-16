var Address = {
  fullAddress: function() {
    return this.street + ", " + this.city + ", " + this.state +  ", " + this.zipcode;
  }
};

$(document).ready(function() {

  $("#addContact").submit(function(event) {
    event.preventDefault();

    var firstNameForm = $("#firstName").val();
    var lastNameForm = $("#lastName").val();

    var contact = {
      firstName: firstNameForm,
      lastName: lastNameForm,
      addresses: []
    };

    $(".one-address").each(function() {
      var inputStreet = $(this).find("input.street").val();
      var inputCity = $(this).find("input.city").val();
      var inputState = $(this).find("input.state").val();
      var inputZipcode = $(this).find("input.zipcode").val();

      var newAddress = Object.create(Address);

      newAddress.street = inputStreet;
      newAddress.city = inputCity;
      newAddress.state = inputState;
      newAddress.zipcode = inputZipcode;

      contact.addresses.push(newAddress);
    });

    var street = $(".street").val();
    var city = $(".city").val();
    var state = $(".state").val();
    var zipcode = $(".zipcode").val();

    $("#contact-list").append("<li><span class='contact clickable'>" + contact.firstName + "</span></li>");

    $(".contact").last().click(function() {
      $(".first-name").text(contact.firstName);
      $(".last-name").text(contact.lastName);
      $('.address').remove();
      contact.addresses.forEach(function(address) {
        $('#contacts').append('<p class="address info">' + address.fullAddress() + '</p>');
      });

      $("#contacts").show();
    });
  });

  $('#add-address').click(function(event) {
    event.preventDefault();
    $('.one-address').first().clone().appendTo($('.addresses'));
    $("input.street").last().val("");
    $("input.city").last().val('');
    $("input.state").last().val('');
    $("input.zipcode").last().val('');
  });

  $("#remove-address").click(function() {

    var addressNumber = $(".one-address");
    if(addressNumber.length !== 1) {
      $('.one-address').first().remove();
    }
  });


});
