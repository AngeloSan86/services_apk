// Seleziona i bottoni
const userLoginButton = document.getElementById('userLoginButton');
const professionalLoginButton = document.getElementById('professionalLoginButton');

const userRegistrationButton = document.getElementById('userRegistrationButton');
const companyRegistrationButton = document.getElementById('companyRegistrationButton');


// Funzioni bottoni
userLoginButton.addEventListener('click', () => {
  window.location.href = '/login/userLogin.html';
});

professionalLoginButton.addEventListener('click', () => {
  window.location.href = '/login/companyLogin.html';
});



userRegistrationButton.addEventListener('click', () => {
  window.location.href = '/registration/userReg.html';
});

companyRegistrationButton.addEventListener('click', () => {
    window.location.href = '/registration/companyReg.html';
  });



//SCOPO DIMOSTRATIVO
function handleLogin() {

    const form = document.getElementById('loginForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Impedisce l'invio del modulo
        });
    }

    // Simulazione della verifica di credenziali
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    console.log(`Email: ${email}`, `Password: ${password}`); // Solo per verifica


    //AGGIUNGERE VERIFICA DELLE CREDENZIALI
  
    // Simulazione della navigazione a un'altra pagina
    window.location.href = "../categories.html";
  
    return false; 
  
};


