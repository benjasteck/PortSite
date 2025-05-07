export default {
  mounted(el) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target

        if (entry.isIntersecting) {
          if (target.classList.contains('hidden')) {
            target.classList.add('show')
          } else if (target.classList.contains('hidden2')) {
            target.classList.add('show2')
          }
        } else {
          if (target.classList.contains('services')) {
            if (window.innerWidth > 1761) {
              target.classList.remove('show')
              target.style.transitionDelay = '0ms'
            }
          } else {
            target.classList.remove('show', 'show2')
          }
        }
      })
    })

    observer.observe(el)
  },
}
