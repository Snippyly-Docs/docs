const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const securityHeaders = [
  {
    key: 'Permissions-Policy',
    value: 'camera=*, microphone=*, geolocation=*, browsing-topics=*'
  }
]


module.exports = withNextra({
    async headers() {
      return [
        {
          // Apply these headers to all routes in your application.
          source: '/:path*',
          headers: securityHeaders,
        },
      ]
    },
  }
)
