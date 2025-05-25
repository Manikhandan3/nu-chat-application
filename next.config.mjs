/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "rapid-mockingbird-90.convex.cloud" },
        ],
    },
};

export default nextConfig;