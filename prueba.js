let array = [
    {
      product_id: 1,
      product_name: 'Baby Yoda Blueball',
      product_description: 'Figura coleccionable de Baby Yoda (Grogu) - the mandalorian saga, edición limitada',
      price: '1790.00',
      stock: 10,
      disconunt: 20,
      sku: 'STW001001',
      dues: 3,
      imagen_back: 'public/img/multimedia/star-wars/Baby-yoda-1.webp',
      imagen_front: 'public/img/multimedia/star-wars/Baby-yoda-box.webp',
      licence_id: 2,
      category_id: 1,
      licence_name: 'Star Wars'
    },
    {
      product_id: 2,
      product_name: 'Vulpix',
      product_description: 'Figura coleccionable de Vulpix, edición limitada',
      price: '1790.00',
      stock: 10,
      disconunt: 20,
      sku: 'STW002001',
      dues: 3,
      imagen_back: 'public/img/multimedia/pokemon/vulpix-box.webp',
      imagen_front: 'public/img/multimedia/pokemon/vulpix-1.webp',
      licence_id: 3,
      category_id: 1,
      licence_name: 'Pokemon'
    },
    {
      product_id: 3,
      product_name: 'Patronus',
      product_description: 'Figura coleccionable de Patronus, edición limitada',
      price: '1790.00',
      stock: 10,
      disconunt: 20,
      sku: 'STW003001',
      dues: 3,
      imagen_back: 'public/img/multimedia/harry-potter/snape-patronus-box.webp',
      imagen_front: 'public/img/multimedia/harry-potter/snape-patronus-1.webp',
      licence_id: 1,
      category_id: 1,
      licence_name: 'Harry Potter'
    }
]

const nombres = ["Luis", "Chris", "Link", "María", "Maggie", "Grim"];
const aleatorio = array[Math.floor(Math.random() * array.length)];
console.log(aleatorio.product_description);


// for(let i = 0; i < 1; i++){
//     console.log(array[0].product_name)
// }

// array.forEach(item =>{
//     console.log(item.category_id)
// })