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

mergeConfig(nextConfig, userConfig)

function mergeConfig(baseConfig, userConfig) {
  if (!userConfig) {
    return
  }
  for (const key in userConfig) {
    if (Array.isArray(baseConfig[key]) && Array.isArray(userConfig[key])) {
      // Sobrescribe arrays por completo
      baseConfig[key] = userConfig[key]
    } else if (
      typeof baseConfig[key] === 'object' &&
      baseConfig[key] !== null &&
      typeof userConfig[key] === 'object' &&
      userConfig[key] !== null &&
      !Array.isArray(baseConfig[key])
    ) {
      baseConfig[key] = {
        ...baseConfig[key],
        ...userConfig[key],
      }
    } else {
      baseConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
