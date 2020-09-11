module.exports = {
  webpack: (config) => {
    config.target = 'electron-renderer'
    config.externals = [...config.externals, {
      puppeteer: 'require("puppeteer")',
    }]
    return config
  },
};
