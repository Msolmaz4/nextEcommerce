import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import prisma from "@/libs/prismadb"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"

//bu satiri guncellemesk daima yeni client yaapr bun adikkat bunu icin ektra bir duyenleme yaptik
//const prisma = new PrismaClient()


export const authOptions :AuthOptions={
  adapter : PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      //stackoverdan buldum hata verdi url ordaki hatayi kopyaladim
      allowDangerousEmailAccountLinking: true,
    }),
    //bundan sonra buraya credentialProciver kurduk 
    //https://next-auth.js.org/providers/credentials

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text"},
        password: {  label: "password", type: "password" }
      },
      async authorize(credentials, req) {
        if(!credentials?.email || !credentials.password){
          throw new Error('Gecersiz mail ya da parola...')
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if(!user || !user.hashedPassword){
          throw new Error('Gecersiz mail ya da parola...')
        }

        const comparePassword = await bcrypt.compare(credentials.password, user.hashedPassword)

        if(!comparePassword){
          throw new Error('Yanlıs parola...')
        }

        return user

      }
    })
    
  ],
  pages : {
    signIn: "/login"
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt"
  },
  secret:process.env.NEXTAUTH_SECRET
}
//doc https://next-auth.js.org/configuration/nextjs#getserversession
export default NextAuth(authOptions)







//ilk once burasi sonra  burda ayarlalrdan sonra AuthOp eklenir
// export default NextAuth({
//   adapter : PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//     //bundan sonra buraya credentialProciver kurduk 
//     //https://next-auth.js.org/providers/credentials

//     CredentialsProvider({
    
//       name: "Credentials",

//       credentials: {
//         email: { label: "email", type: "email"},
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials, req) {
//         if(!credentials?.email || !credentials.password){
//           throw new Error("lEIDER Email und Password")
//         }
//         const user = await prisma.user.findUnique({
//           where:{
//             email:credentials.email
//           }
//         })
//         if(!user || !user.hashedPassword){
//           throw new Error("lEIDER Email und Password")
//         }

//         const comparePass = await  bcrypt.compare(credentials.password ,user.hashedPassword) 
//         if(!comparePass)throw new Error ("PASSWORD IS WRONG")
        
//         return  user;
//       }
//     })      
//   ],
//   //burda sonradan atarkair
// pages:{
//   signIn:"/login",
// },
// debug:process.env.NODE_ENV === "development",
// session:{
//   strategy:"jwt"
// },
// secret:process.env.NEXTAUTH_SECRET
// })
//direk bu duyente hat aildik adapter provider yukeldik  2  \satirfdak degisiklik yapildi ve 3 siradaki 
//bundan sonra bir lib klasoru kurtum cunku bu Prisma Client surkli kurmasmis icin onemli
//bundan sonra buraya credentialProciver kurduk 
//https://next-auth.js.org/providers/credentials