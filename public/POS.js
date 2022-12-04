// rawon, soto betawi, esteh,krupuk, telur asin-->
let totalHargaMakanan = 0;
const food = [
  {
    name: 'Rawon',
    stok: 20,
    harga: 20000,
    image: 'https://raw.githubusercontent.com/leonardlienry/warungsb/main/assets/images/rawon.jpg',
  },
  {
    name: 'Soto Betawi',
    stok: 20,
    harga: 50000,
    image: 'https://raw.githubusercontent.com/leonardlienry/warungsb/main/assets/images/sotobetawi.jpg',
  },
  {
    name: 'Kerupuk',
    stok: 50,
    harga: 1000,
    image: 'https://raw.githubusercontent.com/leonardlienry/warungsb/main/assets/images/kerupuk_putih.jpg',
  },
  {
    name: 'Telur Asin',
    stok: 20,
    harga: 15000,
    image: 'https://raw.githubusercontent.com/leonardlienry/warungsb/main/assets/images/telor_asin.jpg',

  },
  {
    name: 'Es Teh Manis',
    stok: 25,
    harga: 5000,
    image: 'https://raw.githubusercontent.com/leonardlienry/warungsb/main/assets/images/es_teh_manis.jpg',

  },
  {
    name: 'Nasi',
    stok: 50,
    harga: 5000,
    image: 'https://i.ibb.co/Q6KyGXW/6033.jpg',
  },
  {
    name: 'Ayam Goreng',
    stok: 30,
    harga: 20000,
    image: 'https://i.ibb.co/DKmyp04/6034.jpg',
  },
];

let cart = [

];

const pembelian = [

];

function debug() {
  console.log(pembelian);
}

function checkAvailable() {
  let available = true;
  for (let i = 0; i < cart.length; i++) {
    for (let j = 0; j < food.length; j++) {
      if (cart[i].name === food[j].name) {
        if (food[j].stok < cart[i].jumlah) {
          available = false;
          alert(`Stok ${food[j].name} tinggal ${food[j].stok}`);
          break;
        }
      }
    }
    if (!available) {
      break;
    }
  }

  return available;
}

function orderFood() {
  // for(var i = 0; i<cart.length; i++){
  //     var notAvailable = false;
  //     for(var j = 0; j<food.length; j++){
  //         if(cart[i].name === food[j].name){
  //             if(food[j].stok < cart[i].jumlah){
  //                 notAvailable = true;
  //                 alert(`Stok ${food[j].name} tinggal ${food[j].stok}`);
  //                 break;
  //             }
  //             // if(!notAvailable){
  //             //     food[j].stok -= cart[i].jumlah;
  //             // }
  //         }
  //     }
  //     if(notAvailable){
  //         break;
  //     }
  // }
  if (checkAvailable()) {
    for (let x = 0; x < cart.length; x++) {
      for (let y = 0; y < food.length; y++) {
        if (cart[x].name === food[y].name) {
          food[y].stok -= cart[x].jumlah;
        }
      }
    }
    const cartList = document.getElementById('cartList');

    // UNTUK MATIKAN CARTLIST
    cartList.setAttribute('style', 'display:none');
    alert(`Pesanan telah diterima, Mohon menunggu, Total Harga : Rp${toRupiah(totalHargaMakanan)},00`);
    cart.push(totalHargaMakanan);
    pembelian.push(cart);
    totalHargaMakanan = 0;
    cart = [];
    generateData();
  }
  console.log(pembelian);
  console.log(food);
}

function addtoCart(index) {
  console.log(food[index].name);
  let hasExist = false;
  let hasEmpty = false;
  if (food[index].stok <= 0) {
    alert(`${food[index].name} habis, silahkan pesan menu lainnya`);
    hasEmpty = true;
  }
  for (let i = 0; i < cart.length; i++) {
    if (food[index].name === cart[i].name) {
      if (food[index].stok - cart[i].jumlah <= 0) {
        alert(`${food[index].name} habis, silahkan pesan menu lainnya`);
        hasEmpty = true;
        break;
      } else {
        totalHargaMakanan += cart[i].harga;
        // console.log(totalHargaMakanan);
        cart[i].jumlah++;
        hasExist = true;
        break;
      }
    }
  }
  if (!hasExist && !hasEmpty) {
    const obj = {
      name: food[index].name,
      harga: food[index].harga,
      jumlah: 1,
      image: food[index].image,
    };
    totalHargaMakanan += food[index].harga;
    cart.push(obj);
  }
  generateData();
  const cartlist = document.getElementById('cartList');
  if (cart.length !== 0) {
    cartlist.setAttribute('style', 'display:inline-block');
  }
}

function removeFood(value) {
  // console.log(cart[value].jumlah);
  if (cart[value].jumlah > 0) {
    totalHargaMakanan -= cart[value].harga;
    cart[value].jumlah--;
  }
  if (cart[value].jumlah === 0) {
    cart.splice(value, 1);
  }
  generateData();
  const cartlist = document.getElementById('cartList');
  if (cart.length !== 0) {
    cartlist.setAttribute('style', 'display:inline-block');
  } else {
    // UNTUK MATIKAN CARTLIST

    cartlist.setAttribute('style', 'display:none');
  }
}

function toRupiah(harga) {
  let result = '';
  harga = String(harga);
  const arr = [];
  let count = 0;
  for (var i = harga.length - 1; i >= 0; i--) {
    if (count === 3 && harga[i] != undefined) {
      arr.push('.');
      arr.push(harga[i]);
      count = 1;
      // console.log(count,i,'MASUK');
    } else {
      arr.push(harga[i]);
      count++;
      // console.log(count,i-1);
    }
  }
  // console.log(arr);
  for (var i = arr.length - 1; i >= 0; i--) {
    result += arr[i];
  }
  return result;
}

// console.log(toRupiah(1910450));

function generateData() {
  const foodList = document.getElementById('foodList');
  const cartList = document.getElementById('cartList');
  foodList.innerHTML = '';
  cartList.innerHTML = '';

  for (let i = 0; i < food.length; i++) {
    const { name } = food[i];
    const { stok } = food[i];
    const { harga } = food[i];
    const { image } = food[i];

    const divCard = document.createElement('div');
    divCard.classList.add('card');

    const imageData = document.createElement('img');
    imageData.setAttribute('src', image);
    divCard.appendChild(imageData);

    const title = document.createElement('p');
    title.innerHTML = name;
    divCard.appendChild(title);

    const divAction = document.createElement('div');
    divAction.classList.add('action');

    const spanData = document.createElement('span');
    spanData.innerHTML = `Rp ${toRupiah(harga)},00 | Stok : ${stok}`;
    divAction.appendChild(spanData);

    const buttonAdd = document.createElement('button');
    buttonAdd.innerHTML = '<i class="fas fa-cart-plus"></i> Pesan';
    buttonAdd.setAttribute('value', i);
    buttonAdd.setAttribute('onclick', 'addtoCart(this.value)');
    divAction.appendChild(buttonAdd);
    divCard.appendChild(divAction);
    // console.log(divCard);
    foodList.appendChild(divCard);
  }

  const totalDiv = document.createElement('div');
  totalDiv.classList.add('total');

  const totalh1 = document.createElement('h1');
  totalh1.innerHTML = `TOTAL : Rp${toRupiah(totalHargaMakanan)},00`;
  totalDiv.appendChild(totalh1);

  const totalhr = document.createElement('hr');
  totalDiv.appendChild(totalhr);
  // console.log(totalDiv);
  cartList.appendChild(totalDiv);

  // console.log('BelumMasuk');
  for (let x = 0; x < cart.length; x++) {
    const { name } = cart[x];
    const { jumlah } = cart[x];
    const { harga } = cart[x];
    const { image } = cart[x];
    // console.log('MASUK');
    const divCardx = document.createElement('div');
    divCardx.classList.add('card-order');
    // console.log(divCardx);

    const divCardDetail = document.createElement('div');
    divCardDetail.classList.add('detail');

    const imageData = document.createElement('img');
    imageData.setAttribute('src', image);
    divCardDetail.appendChild(imageData);

    const foodName = document.createElement('p');
    // foodName.setAttribute('id','nameCart')
    foodName.innerHTML = name;
    divCardDetail.appendChild(foodName);

    const foodJumlah = document.createElement('span');
    foodJumlah.innerHTML = jumlah;
    divCardDetail.appendChild(foodJumlah);

    divCardx.appendChild(divCardDetail);

    const buttonCancel = document.createElement('button');
    buttonCancel.setAttribute('value', x);
    buttonCancel.setAttribute('id', 'cancelCart');
    buttonCancel.setAttribute('onclick', 'removeFood(this.value)');
    buttonCancel.innerHTML = '<i class="fas fa-trash"></i> Hapus';
    divCardx.appendChild(buttonCancel);
    // console.log(divCardx);

    cartList.appendChild(divCardx);
  }

  const divbutton = document.createElement('div');
  divbutton.classList.add('card-finish');

  const buttonOrder = document.createElement('button');
  // buttonOrder.classList.add('order');
  buttonOrder.setAttribute('onclick', 'orderFood()');
  buttonOrder.innerHTML = 'ORDER SEKARANG';
  divbutton.appendChild(buttonOrder);
  cartList.appendChild(divbutton);
}
generateData();
