import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ // gives the path to main html file
    SignInComponent,
    SignUpComponent
  ]
})
export class UserAuthModule { }
