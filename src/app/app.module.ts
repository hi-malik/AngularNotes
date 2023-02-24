import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
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
import { SyntaxesModule } from "./syntaxes/syntaxes.module";
import { BindingComponent } from './binding/binding.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe'

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        LogoutComponent,
        ForgotPassComponent,
        EventsComponent,
        DisplayComponent,
        ButtonComponent,
        BindingComponent,
        HeaderComponent,
        ChildComponent,
        UserDetailsComponent,
        UsdInrPipe
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        ReactiveFormsModule,
        MatSlideToggleModule,
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        UserAuthModule // register here
        ,
        SyntaxesModule,
        BrowserAnimationsModule,
        MatButtonModule
    ]
})
export class AppModule { }
