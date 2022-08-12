const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()

  const page = await browser.newPage()
  page.goto('http://localhost:3000/headless.html')
  page.on('load', async () => {
    
    await page.type('#username', 'bob')
    await page.type('#password', 'bob')
    await page.tap('#login-btn')

    // 登录后的操作
    await browser.close()
  })
})()

// 延时函数
let timeout = function (delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(1)
      } catch (e) {
        reject(0)
      }
    }, delay)
  })
}