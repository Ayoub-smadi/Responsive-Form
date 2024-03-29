document.getElementById('userInfoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let fullName = document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let dob = document.getElementById('dob').value;
    let gender = document.getElementById('gender').value;
    let address = document.getElementById('address').value;

    let cardHtml = '<div class="card">' +
        '<div class="card-body">' +
        '<h5 class="card-title">' + fullName + '</h5>' +
        '<p class="card-text">Email: ' + email + '</p>' +
        '<p class="card-text">Phone: ' + phone + '</p>' +
        '<p class="card-text">DOB: ' + dob + '</p>' +
        '<p class="card-text">Gender: ' + gender + '</p>' +
        '<p class="card-text">Address: ' + address + '</p>' +
        '</div>' +
        '</div>';

    document.getElementById('cardsContainer').innerHTML += cardHtml;

    // Clear the form fields
    document.getElementById('userInfoForm').reset();
});