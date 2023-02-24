import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  data : any = {};
  getRegister(val : any){
    console.warn(val)
    this.data = val;
  }
  display = false;
  getHide(){
    this.display = !this.display;
  }

  todoData : any[] = [];
  getData(data : any){
    this.todoData.push({id:this.todoData.length, name:data})
    console.warn(this.todoData);
  }

  removeData(id : number){
    console.warn(id);
  }

  dte = 10;
  removeDte(){
    this.dte = Math.random()*10;
  }
  
  userDetails = [
    {name : "Sam", age : 20},
    {name : "Dam", age : 30},
    {name : "Cam", age : 40},
    {name : "Ham", age : 50}
  ]

  name : any;

  Hello = "Hello World";

  userLogin(item : any){
    console.log(item);
  }

  lginForm = new FormGroup({
    name : new FormControl('', [Validators.required]),
    password : new FormControl('')
  })

  loginData(){
    console.warn(this.lginForm.value);
  }

  get validy(){
    return this.lginForm.get('validy')
  }
}
