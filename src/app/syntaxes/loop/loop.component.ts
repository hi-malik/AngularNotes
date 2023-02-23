import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent {
  user = ['Sam', 'Aap', 'Tom', 'Ram']
  userDetails = [
    {name : 'Sam', phone : '2222'},
    {name : 'Aap', phone : '3333'},
    {name : 'Tom', phone : '4444'},
    {name : 'Ram', phone : '5555'}
  ]

  name = ['A', 'B', 'C', 'D']
  nameDetails = [
    {name : 'A', other : [1,2,3]},
    {name : 'B', other : [4,5,6]},
    {name : 'C', other : [7,8,9]},
    {name : 'D', other : [10,11,12]}
  ]

}
