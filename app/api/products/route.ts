
import { getCurrentUser } from "@/app/actions/getCurrentUser"
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"

export async function POST(request:Request) {
    const currentUser = await getCurrentUser()
    if(!currentUser || currentUser.role != "ADMIN"){
        return NextResponse.error()
    }

    const  body =  await request.json()
    const {name,description,brand,category,price,inStock,image} = body

   console.log(name,image,"comsolfapost product")


    const product = await prisma.product.create({
        data:{
            name,description,brand,category,price : parseFloat(price) // number cevirmek icin
            ,inStock,image
        
        }
    })
    return NextResponse.json(product)
}














// const products = [
//     {
//       "id": 7,
//       "title": "Classic Comfort Drawstring Joggers kl",
//       "price": 250,
//       "description": "Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.",
//       "images": [
//         "https://i.imgur.com/mp3rUty.jpeg",
//         "https://i.imgur.com/JQRGIc2.jpeg"
//       ],
//       "creationAt": "2024-04-01T10:58:37.000Z",
//       "updatedAt": "2024-04-01T22:19:09.000Z",
//       "category": {
//         "id": 1,
//         "name": "T-shirts",
//         "image": "https://i.imgur.com/QkIa5tT.jpeg",
//         "creationAt": "2024-04-01T10:58:37.000Z",
//         "updatedAt": "2024-04-02T09:02:55.000Z"
//       }
//     },
//     {
//       "id": 15,
//       "title": "Classic White Crew Neck T-Shirt",
//       "price": 39,
//       "description": "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.",
//       "images": [
//         "https://i.imgur.com/axsyGpD.jpeg",
//         "https://i.imgur.com/T8oq9X2.jpeg",
//         "https://i.imgur.com/J6MinJn.jpeg"
//       ],
//       "creationAt": "2024-04-01T10:58:37.000Z",
//       "updatedAt": "2024-04-01T10:58:37.000Z",
//       "category": {
//         "id": 1,
//         "name": "T-shirts",
//         "image": "https://i.imgur.com/QkIa5tT.jpeg",
//         "creationAt": "2024-04-01T10:58:37.000Z",
//         "updatedAt": "2024-04-02T09:02:55.000Z"
//       }
//     },
//     {
//       "id": 16,
//       "title": "Classic White Tee - Timeless Style and Comfort",
//       "price": 73,
//       "description": "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
//       "images": [
//         "https://i.imgur.com/Y54Bt8J.jpeg",
//         "https://i.imgur.com/SZPDSgy.jpeg",
//         "https://i.imgur.com/sJv4Xx0.jpeg"
//       ],
//       "creationAt": "2024-04-01T10:58:37.000Z",
//       "updatedAt": "2024-04-01T10:58:37.000Z",
//       "category": {
//         "id": 1,
//         "name": "T-shirts",
//         "image": "https://i.imgur.com/QkIa5tT.jpeg",
//         "creationAt": "2024-04-01T10:58:37.000Z",
//         "updatedAt": "2024-04-02T09:02:55.000Z"
//       }
//     },
//     {
//       "id": 17,
//       "title": "Classic Black T-Shirt",
//       "price": 35,
//       "description": "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, it's sure to become a favorite in your wardrobe.",
//       "images": [
//         "https://i.imgur.com/9DqEOV5.jpeg",
//         "https://i.imgur.com/ae0AEYn.jpeg",
//         "https://i.imgur.com/mZ4rUjj.jpeg"
//       ],
//       "creationAt": "2024-04-01T10:58:37.000Z",
//       "updatedAt": "2024-04-01T10:58:37.000Z",
//       "category": {
//         "id": 1,
//         "name": "T-shirts",
//         "image": "https://i.imgur.com/QkIa5tT.jpeg",
//         "creationAt": "2024-04-01T10:58:37.000Z",
//         "updatedAt": "2024-04-02T09:02:55.000Z"
//       }
//     },
//     {
//       "id": 18,
//       "title": "Sleek White & Orange Wireless Gaming Controller",
//       "price": 69,
//       "description": "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
//       "images": [
//         "https://i.imgur.com/ZANVnHE.jpeg",
//         "https://i.imgur.com/Ro5z6Tn.jpeg",
//         "https://i.imgur.com/woA93Li.jpeg"
//       ],
//       "creationAt": "2024-04-01T10:58:37.000Z",
//       "updatedAt": "2024-04-01T10:58:37.000Z",
//       "category": {
//         "id": 2,
//         "name": "Electronics",
//         "image": "https://i.imgur.com/ZANVnHE.jpeg",
//         "creationAt": "2024-04-01T10:58:37.000Z",
//         "updatedAt": "2024-04-01T10:58:37.000Z"
//       }
//     },
    
//     ]
//     export async function POST(request: Request) {
//         try {
//             const productsToCreate = products.map(product => {
//                 return {
//                     name: product.title,
//                     description: product.description,
//                     price: product.price,
//                     images: { set: product.images },
//                     category: {
//                         connect: { name: product.categoryName }
//                     }
//                 };
//             });
    
//             const createdProducts = await prisma.product.createMany({
//                 data: productsToCreate,
//                 skipDuplicates: true // Opsiyonel: Yineleme ürünlerini atlamak için
//             });
    
//             console.log('Success:', createdProducts);
//             return NextResponse.json(createdProducts);
//         } catch (error) {
//             console.error('Error:', error);
//             return NextResponse.error();
//         }
//     }
    