export default function accordion() {
    const togglesBtn = document.getElementsByClassName('faqs__toggle-btn')
    const contentBoxes = document.getElementsByClassName('faqs__answer')
    const btnImg = document.getElementsByClassName('faqs__btn-img')
    const inactiveImgPath = '/assets/images/icon-plus.svg'
    const activeImgPath = '/assets/images/icon-minus.svg'

    for (let i = 0; i < togglesBtn.length; i++) {
        togglesBtn[i].addEventListener('click', () => {
            let imgPath = btnImg[i].getAttribute('src') === inactiveImgPath ? activeImgPath : inactiveImgPath;
            btnImg[i].setAttribute('src', imgPath);
            contentBoxes[i].classList.toggle('show-content')
        })
    };
}