import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  getClick(name : any, lname : string){
    alert("Himanshu");
    alert("Malik");
  }

  getConsole(value : any){
    console.warn(value);
  }

  getData(value : any){
    console.warn(value);
  }
}
