class Slider {
  constructor(className, options) {
    this.slider = document.querySelector(className);
    if (!this.slider) return;
    this.wrapper = this.slider.querySelector(".slider__wrapper");
    this.items = [...this.wrapper.children];
    this.position = 0;
    this.index = 0
    this.itemWidth;

    const { gap, perView } = options;

    this.items.forEach((item) => {
        item.style.marginRight = gap + 'px'
        item.style.width =
        (this.wrapper.offsetWidth - gap * (perView - 1)) / perView + "px";
        if (!this.itemWidth) this.itemWidth = item.offsetWidth;
    });

    if (options.autoplay) {
      setInterval(() => this.nextSlide(gap, perView), options.autoplay)
    }
  }

  nextSlide(gap, perView) {
    console.log(this)
    if(this.index >= this.items.length - 2) return
    this.index += perView -1
    this.position += ((this.itemWidth + gap));
    this.wrapper.style.transform = `translateX(-${this.position}px)`;
  }
}
