import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permitimos SVG porque solo servimos imágenes propias desde /public.
    // No se aceptan SVG remotos ni subidos por usuarios.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
