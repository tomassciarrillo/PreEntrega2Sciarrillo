const productos= [
    {id:"1",name:"Camiseta Boca Juniors Home",price: 120000,img: "https://dash.vtexassets.com/arquivos/ids/1514369-500-auto?v=638596600021600000&width=500&height=auto&aspect=true",idCat: "camisetas", desc: "La camiseta oficial de Boca Juniors para la temporada, con diseño clásico y detalles en dorado."},
    {id: "2",name:"Camiseta River Plate Home",price: 120000,img:"https://dash.vtexassets.com/arquivos/ids/1515816-500-auto?v=638608817226830000&width=500&height=auto&aspect=true",idCat: "camisetas", desc: "La tradicional banda roja cruzada, representando la historia y pasión millonaria."},
    {id:"3",name: "Camiseta Selección Argentina Messi", price: 199999, img: "https://essential.vtexassets.com/arquivos/ids/1487833-1200-auto?v=638533614955000000&width=1200&height=auto&aspect=true", idCat:"camisetas", desc: "Luce el 10 de Messi con orgullo y celebra la gloria albiceleste."},
    {id: "4", name: "Musculosa Boca Juniors 24/25", price: 59000, img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2d054808eefc453b8e53f0fb96c958f3_9366/Musculosa_Boca_Juniors_24-25_Azul_IS5580_01_laydown.jpg",idCat:"camisetas", desc: "Musculosa liviana y cómoda, ideal para entrenamientos o días de calor."},
    {id: "5", name: "Musculosa Selección Argentina 2024", price: 62000, img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f69892e65c46417f87764d6c4f833530_9366/Musculosa_Argentina_Tiro_24_Beige_IQ0814_01_laydown.jpg", idCat: "camisetas", desc: "Musculosa oficial de la Selección, con diseño moderno y tejido transpirable."},
    {id: "6", name: "Botines Adidas Copa 3 PurePRO", price: 249999,img: "https://essential.vtexassets.com/arquivos/ids/1532307-800-auto?v=638726343536100000&width=800&height=auto&aspect=true", idCat:"botines", desc: "Diseño elegante y ajuste premium para un toque de balón excepcional."},
    {id: "7", name: "Botines Puma Future 7 Ultimate", price: 215000,img: "https://essential.vtexassets.com/arquivos/ids/1517342-800-auto?v=638620889118600000&width=800&height=auto&aspect=true", idCat:"botines", desc: "Botines diseñados para jugadores creativos, con ajuste flexible y gran tracción."},
    {id: "8", name: "Botines Nike Legend 10 PRO", price: 269999,img: "https://essential.vtexassets.com/arquivos/ids/1532468-800-auto?v=638732381279100000&width=800&height=auto&aspect=true", idCat:"botines", desc: "Comodidad y precisión en cada pase, ideales para dominar el mediocampo."},
    {id: "9", name: "Botines Adidas Predator", price: 145000,img: "https://essential.vtexassets.com/arquivos/ids/1532277-800-auto?v=638726303379630000&width=800&height=auto&aspect=true", idCat:"botines", desc: "Control absoluto y diseño agresivo para imponerte en la cancha."},
    {id: "10", name: "Botines Nike Phantom GXII", price: 200000,img: "https://essential.vtexassets.com/arquivos/ids/1511589-800-auto?v=638575060042670000&width=800&height=auto&aspect=true", idCat:"botines", desc: "Velocidad y precisión en cada jugada, ideales para delanteros explosivos."},
    {id: "11", name: "Canillera Fútbol Puma King Sleeve", price: 32999,img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1e91ff18/products/PU030851-02/PU030851-02-2.JPG", idCat:"accesorios", desc: "Protección ligera y cómoda, con ajuste seguro para máxima seguridad."},
    {id: "12", name: "Guantes Puma Arquero Ultra Play", price: 157499,img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb68be05d/products/PU041949-02/PU041949-02-1.JPG", idCat:"accesorios", desc: "Agarre superior y resistencia, ideales para atajadas espectaculares."},
    {id: "13", name: "Pelota Fútbol Adidas Argentina 24", price: 119999,img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw88b3ba5b/products/ADIX4016/ADIX4016-1.JPG", idCat:"accesorios", desc: "Balón oficial inspirado en la Selección Argentina, con gran precisión de vuelo."},
    {id: "14", name: "Guantes Nike Goalkeeper Match", price: 78599,img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw394cff57/products/NICQ7799-102/NICQ7799-102-1.JPG", idCat:"accesorios", desc: "Diseño ergonómico y acolchado extra para mayor protección."},
    {id: "15", name: "Pelota Fútbol Nike Academy N5", price: 77199,img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw15bf4b7f/products/NIFB2894-103/NIFB2894-103-1.JPG", idCat:"accesorios", desc: "Pelota de entrenamiento duradera, con gran estabilidad en el aire."}
];



export const getProducts= () => {
    return new Promise ( resolve => {
        setTimeout( () => {
            resolve(productos)
        },10)
    })
}



export const getOneProduct = (id) => {
    return new Promise ( resolve => {
        setTimeout ( ()=> {
            const searchedProduct = productos.find ( item => item.id === id)
            resolve (searchedProduct)
        },100)
    })
}



// export const getProductsByCategory = (idCategory) => {
//     return new Promise ( resolve => {
//         setTimeout ( () => {
//             const productsCategory = productos.filter( item => item.idCat === idCategory);
//                 resolve (productsCategory);
//         },100)
//     })
// }   


export const getProductsByCategory = (idCategory) => {
    console.log("ID de categoría recibido:", idCategory); // 👀 Verificar qué llega

    return new Promise(resolve => {
        setTimeout(() => {
            const productsCategory = productos.filter(item => item.idCat === idCategory);
            console.log("Productos filtrados:", productsCategory); // 👀 Verificar qué productos está encontrando
            resolve(productsCategory);
        }, 100);
    });
};