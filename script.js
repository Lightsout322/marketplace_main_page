const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-box input')
const cardWrapper = document.querySelector('.content-main__list')

const cardArray = [
    {
        id: 0,
        title: 'Первый автомобиль',
        price: '5000 $',
        address: 'Казань, р-н Авиастроительный',
        date: '28 сентября 15:37',
        img: './pictures/card-image.png',
    },
    {
        id: 1,
        title: 'Второй автомобиль',
        price: '5001 $',
        address: 'Казань, р-н Авиастроительный',
        date: '28 сентября 15:37',
        img: './pictures/card-image.png',
    },
       {
        id: 2,
        title: 'Третий автомобиль',
        price: '5002 $',
        address: 'Казань, р-н Авиастроительный',
        date: '28 сентября 15:37',
        img: './pictures/card-image.png',
    },
       {
        id: 3,
        title: 'Четвёртый автомобиль',
        price: '5003 $',
        address: 'Казань, р-н Авиастроительный',
        date: '28 сентября 15:37',
        img: './pictures/card-image.png',
    },
       {
        id: 4,
        title: 'Пятый автомобиль',
        price: '5004 $',
        address: 'Казань, р-н Авиастроительный',
        date: '28 сентября 15:37',
        img: './pictures/card-image.png',
    },
       {
        id: 5,
        title: 'Шестой автомобиль',
        price: '5005 $',
        address: 'Казань, р-н Авиастроительный',
        date: '28 сентября 15:37',
        img: './pictures/card-image.png',
    },
]

const render = (cardList) => {
    cardWrapper.innerHTML = ''

    cardList.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="./product.html" class="content-main__list-item">
                <div class="content-main__list-item--img">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <h5 class="content-main__list-item--title">${item.title}</h5>
                <strong class="content-main__list-item--price">${item.price}</strong>
                
                <div class="content-main__list-item--description-box">
                    <span class="content-main__list-item--description">${item.address}</span>

                    <span class="content-main__list-item--description">${item.date}</span>
                </div>
            </a>
        `)
    })
}

const filteredArray = (array, value) => {

    return array.filter((item) => {
        return item.title.includes(value) || item.price.includes(value)
    })
}

cardWrapper.style.justifyContent ='flex-start'
cardWrapper.style.gap ='30px'

render(cardArray)

searchBtn.addEventListener('click', () => {
    render(filteredArray(cardArray, searchInput.value))
})