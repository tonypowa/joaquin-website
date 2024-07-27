document.querySelector("form").addEventListener("submit", function(event) {
    var name = document.querySelector("input[name='name']").value;
    var email = document.querySelector("input[name='email']").value;
    var message = document.querySelector("textarea[name='message']").value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert("Por favor complete todos los campos.");
    } else if (!validateEmail(email)) {
        event.preventDefault();
        alert("Por favor ingrese un correo electrónico válido.");
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}