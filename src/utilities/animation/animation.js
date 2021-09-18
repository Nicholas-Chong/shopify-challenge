import { Power1, gsap } from 'gsap'

// Had to be included, otherwise production build does not work (animations break)
gsap.registerPlugin(Power1)

export const loadInAnimation = (className) => {
  var tl = gsap.timeline()
  tl.from(className, {
    duration: 0.5,
    autoAlpha: 0,
    y: 25,
    delay: 0.15,
    ease: Power1.easeIn,
  })
}

export const loadOutAnimation = (className) => {
  var tl = gsap.timeline()
  tl.to(className, {
    duration: 0.5,
    autoAlpha: 0,
    y: 25,
    delay: 0.15,
    ease: Power1.easeIn,
  })
}