// const food = [
//   {
//     name: 'Rawon',
//     stok: 20,
//     harga: 20000,
//     image: 'https://raw.githubusercontent.com/leonardlienry/warungsb/main/assets/images/rawon.jpg',
//   },
//   {
//     name: 'Soto Betawi',
//     stok: 20,
//     harga: 50000,
//     image: 'https://raw.githubusercontent.com/leonardlienry/warungsb/main/assets/images/sotobetawi.jpg',
//   },
//   {
//     name: 'Kerupuk',
//     stok: 50,
//     harga: 1000,
//     image: 'https://raw.githubusercontent.com/leonardlienry/warungsb/main/assets/images/kerupuk_putih.jpg',
//   },
//   {
//     name: 'Telur Asin',
//     stok: 20,
//     harga: 15000,
//     image: 'https://raw.githubusercontent.com/leonardlienry/warungsb/main/assets/images/telor_asin.jpg',

//   },
//   {
//     name: 'Es Teh Manis',
//     stok: 25,
//     harga: 5000,
//     image: 'https://raw.githubusercontent.com/leonardlienry/warungsb/main/assets/images/es_teh_manis.jpg',

//   },
//   {
//     name: 'Nasi',
//     stok: 50,
//     harga: 5000,
//     image: 'https://i.ibb.co/Q6KyGXW/6033.jpg',
//   },
//   {
//     name: 'Ayam Goreng',
//     stok: 30,
//     harga: 20000,
//     image: 'https://i.ibb.co/DKmyp04/6034.jpg',
//   },
// ];

// function generateData() {
//   for (let i = 0; i < food.length; i++) {
//     const { name } = food[i];
//     const { stok } = food[i];
//     const { harga } = food[i];
//     const { image } = food[i];
//     const row = $(`<tr class = "food" id = "${food[i].name}"></tr>`);

//     const itemName = document.createElement('td');
//     const itemNameInput = document.createElement('textarea');
//     itemNameInput.setAttribute('placeholder', name);
//     itemName.append(itemNameInput);
//     row.append(itemName);

//     // let itemIMG = document.createElement('td');
//     // let IMG = document.createElement('textarea');
//     // IMG.setAttribute("placeholder",name);
//     // itemIMG.append(IMG);

//     const itemIMG = document.createElement('td');
//     const IMG = document.createElement('textarea');
//     IMG.setAttribute('placeholder', image);
//     itemIMG.append(IMG);
//     row.append(itemIMG);

//     const itemPrice = document.createElement('td');
//     const itemPriceInput = document.createElement('textarea');
//     itemPriceInput.setAttribute('placeholder', harga);
//     itemPrice.append(itemPriceInput);
//     row.append(itemPrice);

//     const itemStock = document.createElement('td');
//     const itemStockInput = document.createElement('textarea');
//     itemStockInput.setAttribute('placeholder', stok);
//     // itemStockInput.innerHTML = stok;

//     itemStock.append(itemStockInput);
//     row.append(itemStock);

//     $('#item').append(row);
//   }
// }
// generateData();
