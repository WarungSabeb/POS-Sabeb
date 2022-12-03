let food = [
  {
      name:`Rawon`,
      stok: 20,
      harga: 20000,
      image: 'https://raw.githubusercontent.com/leonardlienry/warungsb/main/assets/images/rawon.jpg'
  },
  {
      name:`Soto Betawi`,
      stok: 20,
      harga: 50000,
      image: 'https://raw.githubusercontent.com/leonardlienry/warungsb/main/assets/images/sotobetawi.jpg'
  },
  {
      name:`Kerupuk`,
      stok: 50,
      harga: 1000,
      image: 'https://raw.githubusercontent.com/leonardlienry/warungsb/main/assets/images/kerupuk_putih.jpg'
  },
  {
      name:`Telur Asin`,
      stok: 20,
      harga: 15000,
      image: 'https://raw.githubusercontent.com/leonardlienry/warungsb/main/assets/images/telor_asin.jpg'

  },
  {
      name:`Es Teh Manis`,
      stok: 25,
      harga: 5000,
      image: 'https://raw.githubusercontent.com/leonardlienry/warungsb/main/assets/images/es_teh_manis.jpg'

  },
  {
      name:`Nasi`,
      stok: 50,
      harga: 5000,
      image:'https://i.ibb.co/Q6KyGXW/6033.jpg'
  },
  {
      name:`Ayam Goreng`,
      stok: 30,
      harga: 20000,
      image:'https://i.ibb.co/DKmyp04/6034.jpg'
  }
]

// Delete
// $(document).ready(function(){

//   const foods = document.querySelectorAll('.food');

  
//   $(".delete").click(function(){

//     var parents = $(this).parents(".food");
//     parents.remove();
//     // generateData();
//     // $(".food").delete();

//     // len += 1;
//     // i += 1;

//     // alert(i);

//     // foods.forEach(food => {
//     //   food.remove();
//     // });

    
//     // generateData();
//   });


// });


function generateData(){

  for(var i = 0; i<food.length; i++){
    let name = food[i].name;
    let stok = food[i].stok;
    let harga = food[i].harga;
    let image = food[i].image;
    const row = $(`<tr class = "food" id = "${food[i].name}"></tr>`)

    let itemName = document.createElement('td');
    itemName.innerHTML = name;
      row.append(itemName);

    let itemIMG = document.createElement('td');
    let IMG = document.createElement('img');
    IMG.setAttribute("src",image);
    itemIMG.append(IMG);
      row.append(itemIMG);

    let ItemPrice = document.createElement('td');
    ItemPrice.innerHTML = harga;
      row.append(ItemPrice);    

    let itemStock = document.createElement('td');
    itemStock.innerHTML = stok;
      row.append(itemStock);


    $('#item').append(row);
  }
}
generateData()