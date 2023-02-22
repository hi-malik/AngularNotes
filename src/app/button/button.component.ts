import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  count = 0;
  getCounter(type: string){
    type === 'add' ? this.count++ : this.count--;
    
  }
}
