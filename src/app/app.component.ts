import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Namaste';
  getAny(){
    return "Hi Lore, I am from getAny()";
  }
  getRegister(val : any){
    console.warn(val)
  }
  
}
