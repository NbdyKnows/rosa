// Comenta la importación del usuario para descartar conflictos:
// let userConfig = undefined
// try {
//   userConfig = await import('./v0-user-next.config')
// } catch (e) {
//   // ignore error
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    workerThreads: false,
    webpackBuildWorker: false,
    parallelServerBuildTraces: false,
    parallelServerCompiles: false,
  },
}

// Exporta únicamente nextConfig, sin mezclas adicionales.
export default nextConfig
