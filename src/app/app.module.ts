import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './user-list/edit-user/edit-user.component';
import { userService } from './user.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './shared/alert/alert.component';
import { UserAlertComponent } from './shared/user-alert/user-alert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from './auth.service';
import { AuthGaurd } from './auth-gaurd.service';
import { CheckPasswordDirective } from './user-list/edit-user/check-password.directive';




@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserListComponent,
    EditUserComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavbarComponent,
    AlertComponent,
    UserAlertComponent,
    CheckPasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule

  ],
  providers: [AuthService,AuthGaurd],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
