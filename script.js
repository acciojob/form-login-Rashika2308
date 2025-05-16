function getFormvalue() {
    // Get the form by its ID
    const form = document.getElementById('form1');

    // Get the trimmed values of First Name and Last Name
    const firstName = form.fname.value.trim();
    const lastName = form.lname.value.trim();

    // Show the full name in an alert
    alert(firstName + " " + lastName);

    // Prevent the form from submitting and reloading the page
    return false;
}
