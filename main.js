const photoArray = [
  {
    id: 0,
    name: 'Зенит1',
    description: 'Отличная модель для съёмок при любом освещении',
    price: 7500,
    img: 'https://fotoussr.ru/wp-content/uploads/2021/01/IMG_20201227_201203-scaled.jpg'
  },
  {
    id: 1,
    name: 'Смена1',
    description: 'Модель ещё лучше, чем Зенит',
    price: 9200,
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/27/%D0%A1%D0%BC%D0%B5%D0%BD%D0%B0_8%D0%9C.jpg'
  },
  {
    id: 2,
    name: 'Киев1',
    description: 'Отлично фотографирует за свои деньги',
    price: 6000,
    img: 'https://fotoussr.ru/wp-content/uploads/2021/09/IMG_20210916_204021-scaled.jpg'
  },
  {
    id: 0,
    name: 'Зенит2',
    description: 'Отличная модель для съёмок при любом освещении',
    price: 8500,
    img: 'https://fotoussr.ru/wp-content/uploads/2021/01/IMG_20201227_201203-scaled.jpg'
  },
  {
    id: 1,
    name: 'Смена2',
    description: 'Модель ещё лучше, чем Зенит',
    price: 6200,
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/27/%D0%A1%D0%BC%D0%B5%D0%BD%D0%B0_8%D0%9C.jpg'
  },
  {
    id: 2,
    name: 'Киев2',
    description: 'Отлично фотографирует за свои деньги',
    price: 5500,
    img: 'https://fotoussr.ru/wp-content/uploads/2021/09/IMG_20210916_204021-scaled.jpg'
  }
];

const shopList = document.querySelector('.shop__list');
const basket = document.querySelector('.basket');
const sortPrice = document.querySelector('.sortPrice');
const sortName = document.querySelector('.sortName');
let basketCounter = 0;
basket.textContent = basketCounter;
function createLi(obj) { 
  const resultLi = `<li class="col-4 shopItem">
  <div class="">
    <img src=${obj.img} class="img-fluid" alt="">
  </div>
  <div class="">
    <h3 class="">${obj.name}</h3>
    <p class="">${obj.description}</p>
    <p class="">${obj.price}</p>
    <button class="btn btn-dark itemBtn">В корзину</button>
  </div>`  

  return resultLi;
}

sortPrice.addEventListener('click', () => {  
  sortArray('price');
});

sortName.addEventListener('click', () => {
  sortArray('name');
})

function sortArray(key) {
  let sortArray = photoArray.sort(function (a, b) {
    if (a[key] > b[key]) { // a['age']
      return 1;
    }
    if (a[key] < b[key]) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  });
  shopList.innerHTML = renderList(sortArray);
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

const cart = {};

// элемент - ключ
function addToCart(element) {  
  if(cart[element] === undefined) { //{0:1}
    cart[element] = 1;
  } else {
    cart[element] = cart[element] + 1;
  }  
}



const allPhoto = document.querySelectorAll('.shopItem');
for(let i = 0; i < allPhoto.length; i++) {
  const btn = allPhoto[i].querySelector('.itemBtn')
  btn.addEventListener('click', function () {  
    addToCart(i);

    basketCounter = basketCounter + 1;
    basket.innerText = basketCounter;
   
    const itemCountBasket = allPhoto[i].querySelector('.itemCountBasket');
    
    if (itemCountBasket) {
      console.log('меняю текст');
      itemCountBasket.textContent = 'в корзине: ' + cart[i];

    } else {
      console.log('создаю p');
      const createP = document.createElement('p');
      createP.classList.add('itemCountBasket');
      createP.textContent = 'в корзине: ' + cart[i];
      btn.after(createP);
      
    }
  })
}



