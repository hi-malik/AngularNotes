import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  displayVal = '';
  getValue(val : any){
    console.warn(val);
    this.displayVal = val;
  }

  buttonDisp = '';
  getButtonval(val : any){
    console.warn(val);
    this.buttonDisp = val;
  }
}
