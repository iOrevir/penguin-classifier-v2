const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')
const penguinClassifier = document.querySelector('#PenguinClassifier')
const getAccess = document.querySelector('#ask-sign')

const setupUI = (user) => {
    if (user) {
        // toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
        penguinClassifier.style.display = 'block';
        getAccess.style.display = 'none';
    } else {
        // toggle UI elements
        loggedOutLinks.forEach(item => item.style.display = 'block');
        loggedInLinks.forEach(item => item.style.display = 'none');
        penguinClassifier.style.display = 'none';
        getAccess.style.display = 'block';
    }
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    /* var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items); */
  
  });

