import {default as nextPWA} from "@ducanh2912/next-pwa"

const withPWA = nextPWA({
    register: true,
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    dest: "public",
    fallbacks: {
        document: "/"
    },
    disable: process.env.NODE_ENV === "development",
    workboxOptions: {
        disableDevLogs: true
    }
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPWA(nextConfig);
