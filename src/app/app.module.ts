import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { UserAuthModule } from "./user-auth/user-auth.module";
import { EventsComponent } from './events/events.component';
import { DisplayComponent } from './display/display.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        LogoutComponent,
        ForgotPassComponent,
        EventsComponent,
        DisplayComponent,
        ButtonComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserAuthModule // register here
    ]
})
export class AppModule { }
