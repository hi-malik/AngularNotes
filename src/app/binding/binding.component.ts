import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  color = 'red';
  bgColor = 'yellow';
  colorChanged(){
    this.color = 'blue';
    this.bgColor = 'orange';
  }
}
