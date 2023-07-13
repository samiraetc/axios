/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: false, //this done on nginx, offload load from the Node.js process
    typescript: {
      tsconfigPath: 'tsconfig.json'
    },
    reactStrictMode: false,
    forceSwcTransforms: true,
  };
  
  

module.exports = nextConfig
