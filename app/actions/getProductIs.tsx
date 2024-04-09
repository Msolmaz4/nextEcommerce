import prisma from "@/libs/prismadb"

interface productId {
    productId?:string
}

export default async function getProductIs(params:productId)   {
    const {productId} = params
    const product =await prisma.product.findUnique({
        where:{
            id:productId
        },
        include:{
            reviews:{
                include:{
                    user:true
                },
                orderBy:{
                    createdDate:"desc"
                }
            }
        }
    })
    if(!product) {
        return null
    }
    return product
}