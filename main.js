const card = document.querySelectorAll('.card');

let flippedCard = false;
let firstCard;
let secondCard;
let noFlip = false;

function flips() {
    if (noFlip) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    check();

}
function check() {
    let match = firstCard.dataset.card === secondCard.dataset.card;

    match ? destructuring() : unflip();
}

function unflip() {
    noFlip = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        destructuring();
    }, 1500);
}

function destructuring() {
    [flippedCard, noFlip] = [false, false];
    [firstCard, secondCard] = [null, null]; 
}

(function mixing() {
    card.forEach(item => {
        let random = Math.floor(Math.random()*12)
        item.style.order =random;
    });
})();
card.forEach(item => item.addEventListener('click', flips));