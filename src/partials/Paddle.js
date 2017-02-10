import { SVG_NS } from '../settings';

export default class Paddle {

    constructor(boardHeight, width, height, x, y, up, down) {
      this.boardHeight = boardHeight;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = 10; // put this into setting.js
      this.score = 0;

      document.addEventListener('keydown', event => {
      // console.log(event.keyCode);
        switch (event.keyCode) {
          case up: 
            this.up();          
          break;
          case down:
            this.down();
          break;
        }
      }); 

     }

  //method
  up(){ 
    this.y = Math.max(0, this.y - this.speed);
  }
  down(){
    this.y = Math.min(this.boardHeight-this.height, this.y + this.speed);
  }


  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return [leftX, rightX, topY, bottomY];
  }


    render(svg){
      let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', 'white');
        rect.setAttributeNS(null, 'x', this.x);
        rect.setAttributeNS(null, 'y', this.y);
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);

        svg.appendChild(rect);

    }
}