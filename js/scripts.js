let index = 0;
displayImages();

function displayImages() {
    let i;
    const images = document.getElementsByClassName("image");

    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    index++;
    if (index > images.length) {
        index = 1;
    }
    images[index - 1].style.display = "block";
    setTimeout(displayImages, 2000);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});