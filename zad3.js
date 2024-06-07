document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 


    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('countryError').textContent = '';

    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const country = document.getElementById('country').value;

    let valid = true;

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Podaj poprawny adres emaila.';
        valid = false;
    }

    
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').textContent = 'Hasło musi mieć min. 8 znaków, zawierać cyfrę i znak specjalny.';
        valid = false;
    }

    
    if (country === '') {
        document.getElementById('countryError').textContent = 'Wybierz kraj.';
        valid = false;
    }

    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 18) {
        document.getElementById('dobError').textContent = 'Musisz być pełnoletni.';
        valid = false;
    }

    
if (usePhone) {
    const phonePattern = /^\d+$/;
    if (!phonePattern.test(phone) || phone === '') {
        document.getElementById('phoneError').textContent = 'Podaj numer telefonu (tylko cyfry).';
        valid = false;
    }
}

if (valid) {
    alert('Rejestracja zakończona pomyślnie!');
    
}
});
