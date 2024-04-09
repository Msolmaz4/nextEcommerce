//burda product cagiracam ve kontroller bakacam
import prisma from "@/libs/prismadb"

export interface Iproduct {
    category?: string | null
    search?:string | null
}

export default async function getProduct(params:Iproduct) {
    try {
        const {category,search}= params;
        console.log(category,"categorygetProduct")
        console.log(search,"getProduct paramas olan yer")
        let searchString = search
        if(!search){
            searchString= "" 
        }
        let query:any = {}
        if(category){
            query.category = category
        }
        const products = await prisma.product.findMany({
            where:{
             ...query,
             OR:[
                {
                    name :{
                        contains : searchString ,
                        mode:"insensitive"
                    },
                    description:{
                        contains: searchString,
                        mode:'insensitive'
                    }
                }
             ]   
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

        return products
    } catch (error : any) {
        throw new Error(error)
    }
}  