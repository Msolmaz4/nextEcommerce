import { PrismaClient } from "@prisma/client";

// declare global ifadesi, TypeScript'te global kapsamdaki değişkenleri veya modülleri tanımlamak için kullanılan bir ifadedir. Bu ifade, bir dosyanın genelinde veya proje içinde herhangi bir yerde tanımlanan değişkenlerin ve türlerin dünya çapında (global olarak) erişilebilir olmasını sağlar.

// Normalde TypeScript, dosya bazında izole edilmiş bir kapsama sahiptir, yani bir dosya içinde tanımlanan değişkenler yalnızca o dosya içinde erişilebilirdir. Ancak declare global ifadesi kullanılarak tanımlanan değişkenler veya türler, tüm projenin genelinde erişilebilir hale gelir.


declare global {
    var prisma :PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client