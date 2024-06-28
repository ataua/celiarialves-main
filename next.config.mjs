/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [{
            source: '/:path*',
            headers: [
                {
                    key: 'X-Content-Type-Options',
                    value: 'nosniff'
                }, {
                    key: 'X-Frame-Options',
                    value: 'SAMEORIGIN'
                }, {
                    key: 'Access-Control-Allow-Origin',
                    value: `*`
                },
                {
                    key: 'Content-Security-Policy',
                    value: `default-src 'self' http://localhost:3000 https://celiarialves.com.br https://server.api.mailchimp.com; style-src 'self' 'unsafe-inline' http://localhost:3000 https://celiarialves.com.br https://fonts.googleapis.com; script-src 'self' 'unsafe-eval' 'unsafe-inline' http://localhost:3000 https://celiarialves.com.br; img-src 'self' blob: data: http://localhost:3000 https://celiarialves.com.br https://*.googleusercontent.com; font-src 'self' http://localhost:3000 https://celiarialves.com.br https://fonts.googleapis.com https://fonts.gstatic.com;`,
                }
            ]
        }, {
            // Matching all API routes
            source: "/api/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: `http://localhost:3000 https://celiarialves.com.br` },
                { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,DELETE,POST,PATCH" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }]
    }
};

export default nextConfig;
