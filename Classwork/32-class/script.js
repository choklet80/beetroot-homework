class Slider {

    constructor(id) {
      this.slider = $(`#${id}`);
      this.items = this.slider.find(".slider__item");
      
      this.position = 0;
  
      this.init()
    }
  
    init() {
      this.updatePosition(this.position);
  
      this.slider.find(".slider__prev").on("click", () => {
        this.position--;
        this.updatePosition();
      });
      
      this.slider.find(".slider__next").on("click", () => {
        this.position++;      
        this.updatePosition();
      });
    }
    
    updatePosition() {
      if (this.position >= this.items.length) {
        this.position = 0;
      }
      if (this.position < 0) {
        this.position = this.items.length - 1
      }
  
      this.items.each((index, el) => {
        $(el).css({
          transform: `translateX(${(index - this.position) * 100}%)`,
        });
      });
    }
  }
  
  const slider = new Slider('slider')