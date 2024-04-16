/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["i.imgur.com","placeimg.com","via.placeholder.com","ejemplo.com","api.escuelajs.co","img.freepik.com","products.com","cdn.pixabay.com" ,
    "placeimg.com"]
    },
    eslint:{
        ignoreDuringBuilds:true
    },
 
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  

};




export default nextConfig;
