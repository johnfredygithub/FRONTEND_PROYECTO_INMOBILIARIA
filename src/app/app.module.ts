import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';/////llamar routing
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';/////llamar apocomponen
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
//////dialog botones
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogusersComponent } from './dialog/dialogusers/dialogusers.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import {MaterialExampleModule} from '../material.module';
//import {FormFieldErrorExample} from './form-field-error-example';
import {MatNativeDateModule} from '@angular/material/core';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './partials/menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    DialogusersComponent,
    HomeComponent,
    MenuComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    MatSelectModule,
    MatIconModule ,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    NgbModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
