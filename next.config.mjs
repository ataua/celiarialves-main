/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    },
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
                    value: `default-src 'self'; style-src 'self' 'unsafe-inline' https://maps.gstatic.com/ https://fonts.googleapis.com; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://maps.googleapis.com https://maps.gstatic.com https://www.google-analytics.com; img-src 'self' blob: data: https://maps.gstatic.com https://*.googleusercontent.com https://maps.googleapis.com; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; connect-src 'self' https://maps.googleapis.com;`,
                }
            ]
        }, {
            // Configuração para todas as rotas de API
            source: "/api/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: `https://celiarialves.com.br` },
                { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,DELETE,POST,PATCH" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }]
    }
};

export default nextConfig;
