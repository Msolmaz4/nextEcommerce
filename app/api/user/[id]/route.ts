import prisma from '@/libs/prismadb'

import { NextResponse } from "next/server";



export async function DELETE(
   request: Request, {params} : {params: {id : string}}
) {
    
   

    const usert = await prisma.user.delete({
        where: {
            id: params.id
        }
    })
    return NextResponse.json(usert)
}
