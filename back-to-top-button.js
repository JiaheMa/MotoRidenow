const backToTopBtn = document.getElementById('back-to-top-btn');

// the following code added a listener, which functions in
// Checking if the page has been scrolled
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.classList.remove('hidden');
    } else {
        backToTopBtn.classList.add('hidden');
    }
});

// the following code added a listener, which functions in
// go to the top of the page when the button is clicked
backToTopBtn.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
