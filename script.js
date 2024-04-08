const imageUrls = [
    "second_image.jpg",
    "third_image.jpg",
    "fourth_image.jpg",
    "fifth_image.jpg",
    "sixth_image.jpg",
    "seventh_image.jpg",
    "eighth_image.jpg"
];

function replaceImage(index) {
    const img = document.getElementById('mainImage');
    img.src = imageUrls[index % imageUrls.length];
}

let interval = 1000;
let currentIndex = 0;
const changeInterval = setInterval(() => {
    replaceImage(currentIndex);
    currentIndex++;
    interval -= 100;
    if (interval < 100) {
        clearInterval(changeInterval);
    }
}, interval);
