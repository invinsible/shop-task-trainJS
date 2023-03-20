// level 1 
// В ul.shop__list вывести один li с заполненными данными из photoObject. Вёрстка для li находится в index.html
const photoObject = {
  id: 0,
  name: 'Зенит',
  description: 'Отличная модель для съёмок при любом освещении',
  price: 7500,
  img: 'https://fotoussr.ru/wp-content/uploads/2021/01/IMG_20201227_201203-scaled.jpg'
};

// level 2
// В ul.shop__list вывести данные из массива photoArray. На экране должно появиться 3 фотоаппарата. Вёрстка для li находится в index.html
const photoArray = [
  {
    id: 0,
    name: 'Зенит',
    description: 'Отличная модель для съёмок при любом освещении',
    price: 7500,
    img: 'https://fotoussr.ru/wp-content/uploads/2021/01/IMG_20201227_201203-scaled.jpg'
  },
  {
    id: 1,
    name: 'Смена',
    description: 'Модель ещё лучше, чем Зенит',
    price: 9200,
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/27/%D0%A1%D0%BC%D0%B5%D0%BD%D0%B0_8%D0%9C.jpg'
  },
  {
    id: 2,
    name: 'Киев',
    description: 'Отлично фотографирует за свои деньги',
    price: 5000,
    img: 'https://fotoussr.ru/wp-content/uploads/2021/09/IMG_20210916_204021-scaled.jpg'
  },
  {
    id: 0,
    name: 'Зенит',
    description: 'Отличная модель для съёмок при любом освещении',
    price: 7500,
    img: 'https://fotoussr.ru/wp-content/uploads/2021/01/IMG_20201227_201203-scaled.jpg'
  },
  {
    id: 1,
    name: 'Смена',
    description: 'Модель ещё лучше, чем Зенит',
    price: 9200,
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/27/%D0%A1%D0%BC%D0%B5%D0%BD%D0%B0_8%D0%9C.jpg'
  },
  {
    id: 2,
    name: 'Киев',
    description: 'Отлично фотографирует за свои деньги',
    price: 5000,
    img: 'https://fotoussr.ru/wp-content/uploads/2021/09/IMG_20210916_204021-scaled.jpg'
  }
];

// ****************************************************************************************** 
// код начинай писать ниже
const shopList = document.querySelector('.shop__list');
const basket = document.querySelector('.basket');
let basketCounter = 0;
basket.textContent = basketCounter;
function createLi(obj) {  
  const resultLi = `<li class="shop__item item-element shopItem">
  <div class="item-element__img">
    <img src=${obj.img} alt="">
  </div>
  <div class="item-element__content">
    <h3 class="item-element__title">${obj.name}</h3>
    <p class="item-element__description">${obj.description}</p>
    <p class="item-element__price">${obj.price}</p>
    <button class="item-element__btn itemBtn">В корзину</button>
  </div>`  

  return resultLi;
}


function renderList(array) {
  const arrayItems = [];
  for (let i = 0; i < array.length; i++) {
    const item = createLi(array[i]);
    arrayItems.push(item);    
  }
  return arrayItems.join('');
}



shopList.innerHTML = renderList(photoArray);

const allPhoto = document.querySelectorAll('.shopItem');
for(let i = 0; i < allPhoto.length; i++) {
  const btn = allPhoto[i].querySelector('.itemBtn')
  btn.addEventListener('click', function () {    
    basketCounter = basketCounter + 1;
    basket.innerText = basketCounter;    
  })
}



