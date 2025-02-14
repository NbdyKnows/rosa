let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

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

// Para probar, comenta la fusión y exporta únicamente nextConfig:
// mergeConfig(nextConfig, userConfig)

export default nextConfig

// Si en el futuro necesitas fusionar configuraciones, considera usar una librería de deep merge
// en lugar de una función personalizada para evitar problemas con arrays y objetos.
