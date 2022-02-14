/**
 * Some arbitrary js script
 */
class Demo {

  /**
   * Init early
   * This is called before any other script is included on the page, so you can't use any framework features here
   * Should be used to pre-setup your code if it is required
   */
  static initEarly () {

  }

  /**
   * Init late
   * This is called after any other script is included on the page, so you can actually use very framework feature here
   * At this point, the initial DOM is available because this script is called before the ending </body> tag
   */
  static initLate () {

  }
}

FramelixInit.late.push(Demo.initLate)