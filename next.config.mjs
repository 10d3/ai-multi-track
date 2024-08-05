/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'avatar.vercel.sh',
                pathname:"**"
            },
            {
                protocol:'https',
                hostname:'avatars.githubusercontent.com',
                pathname:'**'
            }
        ]
    }
};

export default nextConfig;
