/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  env: {
    ENGINE: "EON-SUPREME-16K",
    ARCH: "BY-THE-3",
    QUALITIES: "marketing-automation,video-synthesis,ai-cinematography,ethos-llm,hollywood-standard,independent-ai,digital-human-consistency,16k-video-generation"
  }
}
export default nextConfig;
