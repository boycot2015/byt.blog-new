/* eslint-disable no-var */

// 爱心
const clickStar = () => {
  function init(e: Window, t: Document) {
    function r() {
      for (let e = 0; e < s.length; e++) s[e].alpha <= 0
        ? (t.body.removeChild(s[e].el), s.splice(e, 1))
        : (s[
            e].y--, s[e].scale += 0.004, s[e].alpha -= 0.013, s[e].el.style.cssText = 'left:' + s[e].x
            + 'px;top:' + s[e].y + 'px;opacity:' + s[e].alpha + ';transform:scale(' + s[e].scale + ',' + s[e]
            .scale + ') rotate(45deg);background:' + s[e].color + ';z-index:99999')
      requestAnimationFrame(r)
    }

    function n() {
      // const t = 'function' == typeof e.onclick && e.onclick
      e.onclick = function (ev) {
        // t && t(this)
        o(ev)
      }
    }

    function o(e: MouseEvent) {
      const a: any = t.createElement('div')
      a.className = 'heart', s.push({
        el: a,
        x: e.clientX - 5,
        y: e.clientY - 5,
        scale: 1,
        alpha: 1,
        color: c(),
      }), t.body.appendChild(a)
    }

    function i(e: string) {
      const a: any = t.createElement('style')
      a.type = 'text/css'
      try {
        a.appendChild(t.createTextNode(e))
      }
      catch (t) {
        a.styleSheet.cssText = e
      }
      t.getElementsByTagName('head')[0]?.appendChild(a)
    }

    function c() {
      return 'rgb(' + ~~(255 * Math.random()) + ',' + ~~(255 * Math.random()) + ',' + ~~(255 * Math
        .random()) + ')'
    }
    var s: {
      y: any
      x: string | number
      scale: number
      el: any
      alpha: number
      color: string
    }[] = []
    e.requestAnimationFrame = e.requestAnimationFrame || function (e) {
      setTimeout(e, 1e3 / 60)
    }, i(
      '.heart{z-index:10;width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: \'\';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}',
    ), n(), r()
  }
  init(window, document)
}
// 随机文字
const clickText = (textArr: any) => {
  (function () {
    let a_idx = 0
    window.onclick = function (event) {
      const arr = textArr || [
        'Nodejs', 'html', 'css', 'Vercel',
        'javascript', 'Vue', 'React', 'uni-app', 'Ghat GPT', 'Ghat GPT-3.5',
        'uni-app', 'Tarojs', 'micro-app', 'minio', 'MongoDB', 'MySQL',
        'pinia', 'Koa.js', 'Express', 'SSR', 'Vite', 'webpack', 'rollup',
        'unity 3D', 'Tree.js', 'Nuxt', 'Next', 'Nest', 'Github', 'Gitlab', 'Gitee',
      ]

      const heart: any = document.createElement('b') // 创建b元素
      heart.onselectstart = new Function('event.returnValue=false') // 防止拖动

      document.body.appendChild(heart).innerHTML = arr[a_idx] // 将b元素添加到页面上
      a_idx = (a_idx + 1) % arr.length
      heart.style.cssText = 'z-index:10;position: fixed;left:-100%;' // 给p元素设置样式

      var f = 16, // 字体大小
        x = event.clientX - f / 2, // 横坐标
        y = event.clientY - f, // 纵坐标
        c = randomColor(), // 随机颜色
        a = 1, // 透明度
        s = 1.2 // 放大缩小

      var timer = setInterval(function () { // 添加定时器
        if (a <= 0) {
          document.body.removeChild(heart)
          clearInterval(timer)
        }
        else {
          heart.style.cssText = 'z-index:10;font-size:16px;cursor: default;position: fixed;color:'
          + c + ';left:' + x + 'px;top:' + y + 'px;opacity:' + a + ';transform:scale('
          + s + ');'

          y--
          a -= 0.016
          s += 0.002
        }
      }, 15)
    }
    // 随机颜色
    function randomColor() {
      return 'rgb(' + (~~(Math.random() * 255)) + ',' + (~~(Math.random() * 255)) + ',' + (~~(Math
        .random() * 255)) + ')'
    }
  }())
}
// 烟花
const clickFire = () => {
  function clickEffect() {
    const balls: any[] = []
    let longPressed = false
    let longPress: string | number | NodeJS.Timeout | undefined
    let multiplier = 0
    let width: number, height: number
    let origin: { x: any, y: any }
    let normal: { x: any, y: any }
    let ctx: any
    const colours = ['#F73859', '#14FFEC', '#00E0FF', '#FF99FE', '#FAF15D']
    const canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
    canvas.setAttribute('style', 'width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;')
    const pointer = document.createElement('span')
    pointer.classList.add('pointer')
    document.body.appendChild(pointer)

    if (canvas.getContext && window.addEventListener) {
      ctx = canvas.getContext('2d')
      updateSize()
      window.addEventListener('resize', updateSize, false)
      loop()
      window.addEventListener('mousedown', function (e) {
        pushBalls(randBetween(10, 20), e.clientX, e.clientY)
        document.body.classList.add('is-pressed')
        longPress = setTimeout(function () {
          document.body.classList.add('is-longpress')
          longPressed = true
        }, 500)
      }, false)
      window.addEventListener('mouseup', function (e) {
        clearInterval(longPress)
        if (longPressed == true) {
          document.body.classList.remove('is-longpress')
          pushBalls(randBetween(50 + Math.ceil(multiplier), 100 + Math.ceil(multiplier)), e.clientX, e.clientY)
          longPressed = false
        }
        document.body.classList.remove('is-pressed')
      }, false)
      window.addEventListener('mousemove', function (e) {
        const x = e.clientX
        const y = e.clientY
        pointer.style.top = y + 'px'
        pointer.style.left = x + 'px'
      }, false)
    }
    else {
      console.log('canvas or addEventListener is unsupported!')
    }

    function updateSize() {
      canvas.width = window.innerWidth * 2
      canvas.height = window.innerHeight * 2
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx?.scale(2, 2)
      width = (canvas.width = window.innerWidth)
      height = (canvas.height = window.innerHeight)
      origin = {
        x: width / 2,
        y: height / 2,
      }
      normal = {
        x: width / 2,
        y: height / 2,
      }
    }
    class Ball {
      x: any
      y: any
      angle: number
      multiplier: number
      vx: number
      vy: number
      r: number
      color: string
      constructor(x = origin.x, y = origin.y) {
        this.x = x
        this.y = y
        this.angle = Math.PI * 2 * Math.random()
        if (longPressed == true) {
          this.multiplier = randBetween(14 + multiplier, 15 + multiplier)
        }
        else {
          this.multiplier = randBetween(6, 12)
        }
        this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle)
        this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle)
        this.r = randBetween(8, 12) + 3 * Math.random()
        this.color = colours[Math.floor(Math.random() * colours.length)] || ''
      }

      update() {
        this.x += this.vx - normal.x
        this.y += this.vy - normal.y
        normal.x = -2 / window.innerWidth * Math.sin(this.angle)
        normal.y = -2 / window.innerHeight * Math.cos(this.angle)
        this.r -= 0.3
        this.vx *= 0.9
        this.vy *= 0.9
      }
    }

    function pushBalls(count = 1, x = origin.x, y = origin.y) {
      for (let i = 0; i < count; i++) {
        balls.push(new Ball(x, y))
      }
    }

    function randBetween(min: number, max: number) {
      return Math.floor(Math.random() * max) + min
    }

    function loop() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0)'
      ctx?.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < balls.length; i++) {
        const b = balls[i]
        if (b.r < 0) continue
        ctx.fillStyle = b.color
        ctx?.beginPath()
        ctx?.arc(b.x, b.y, b.r, 0, Math.PI * 2, false)
        ctx?.fill()
        b.update()
      }
      if (longPressed == true) {
        multiplier += 0.2
      }
      else if (!longPressed && multiplier >= 0) {
        multiplier -= 0.4
      }
      removeBall()
      requestAnimationFrame(loop)
    }

    function removeBall() {
      for (let i = 0; i < balls.length; i++) {
        const b = balls[i]
        if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
          balls.splice(i, 1)
        }
      }
    }
  }
  clickEffect()
}
// 蜘蛛
const showSpider = () => {
  function init() {
    function n(n: { getAttribute: (arg0: any) => any }, e: string, t: string | number) {
      return n.getAttribute(e) || t
    }

    function e(n: string) {
      return document.getElementsByTagName(n)
    }

    function t() {
      const t = e('script'), o = t.length, i = t[o - 1]
      return { l: o, z: n(i, 'zIndex', 1), o: n(i, 'opacity', 0.5), c: n(i, 'color', '0,0,0'), n: n(i, 'count', 99) }
    }

    function o() {
      a = m.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, c = m.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }

    function i() {
      r?.clearRect(0, 0, a, c)
      let n, e, t, o, m, l
      s.forEach(function (i, x) {
        for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c || i.y < 0 ? -1 : 1, r?.fillRect(i.x - 0.5, i.y - 0.5, 1, 1), e = x + 1; e < u.length; e++) n = u[e], null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y, l = o * o + m * m, l < n.max && (n === y && l >= n.max / 2 && (i.x -= 0.03 * o, i.y -= 0.03 * m), t = (n.max - l) / n.max, r?.beginPath(), r.lineWidth = t / 2, r.strokeStyle = 'rgba(' + d.c + ',' + (t + 0.2) + ')', r?.moveTo(i.x, i.y), r?.lineTo(n.x, n.y), r?.stroke()))
      }), x(i)
    }

    var a: number = 0, c: number = 0, u: string | any[], m = document.createElement('canvas'), d = t(), l = 'c_n' + d.l, r: any = m.getContext('2d'),
      x = window.requestAnimationFrame || function (n) {
        window.setTimeout(n, 1e3 / 45)
      }, w = Math.random, y: any = { x: null, y: null, max: 2e4 }
    m.className = l, m.style.cssText = 'pointer-events: none;position:fixed;top:0;left:0;z-index:' + d.z + ';opacity:' + d.o, e('body')[0]?.appendChild(m), o(), window.onresize = o, window.onmousemove = function (n) {
      n = n || window.event, y.x = n.clientX, y.y = n.clientY
    }, window.onmouseout = function () {
      y.x = null, y.y = null
    }
    for (var s: { x: number, y: number, xa: number, ya: number, max: number }[] = [], f = 0; d.n > f; f++) {
      const h = w() * a, g = w() * c, v = 2 * w() - 1, p = 2 * w() - 1
      s.push({ x: h, y: g, xa: v, ya: p, max: 6e3 })
    }
    u = s.concat([y]), setTimeout(function () {
      i()
    }, 100)
  }
  init()
}
interface EffectProps {
  name: string
  cb: (params?: any) => void
}
export {
  clickStar,
  clickText,
  clickFire,
  showSpider,
}
const effect: EffectProps[] = [
  {
    name: '爱心',
    cb: clickStar,
  },
  {
    name: '随机文字',
    cb: clickText,
  },
  {
    name: '烟花',
    cb: clickFire,
  },
  {
    name: '蜘蛛',
    cb: showSpider,
  },
]
export default effect
