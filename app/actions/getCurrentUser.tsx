import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

//burda  server tarafından oluşturan datayi bakiyoruy

export async function getSession (){
    
// Bu kod, Next.js ve NextAuth.js kullanılarak geliştirilmiş bir uygulama içindeki sunucu oturumlarını almak için kullanılır.
//getServerSession()
    return await getServerSession(authOptions)
}

export async function getCurrentUser(){
    try {
        const session  = await getSession()
        if(!session?.user?.email) return null
        const currentUser = await prisma?.user.findUnique({
            where :{
                email:session?.user?.email
            }
        })
        if(!currentUser) throw new Error("No user found with this email")

        return {
            ...currentUser,
            createdAt: new Date(currentUser.createdAt),
            updatedAt: new Date(currentUser.updateAt),
            emailVerified: currentUser.emailVerified ? new Date(currentUser.emailVerified) : null
        }
    } catch (error) {
        return null
    }
}
