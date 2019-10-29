// listen for auth status changes
auth.onAuthStateChanged(user => {
    //console.log(user)
    if (user) {
        console.log('User logged in: ', user);
        setupUI(user);
    } else {
        console.log('User logged out');
        setupUI();
    }
});

// signup
const signupForm = document.querySelector('#signup-form');
// TODO: add code for payment. After payment show sign-up form
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // check if this works
    //console.log(email, password)

    // signup the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        // console.log(cred.user);
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    /* auth.signOut().then(() => {
        console.log('user signed out');
    }); */
    auth.signOut();
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get login info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    // sign-in the user
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user)
        // close the login modal and reset the form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });
});