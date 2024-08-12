import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductformComponent } from './shared/components/products/productform/productform.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { UserformComponent } from './shared/components/users/userform/userform.component';
import { FaircardsComponent } from './shared/components/fairs/faircards/faircards.component';
import { FairdetailsComponent } from './shared/components/fairs/fairdetails/fairdetails.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { AuthComponent } from './shared/components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PagenotfoundComponent,
    UsersComponent,
    ProductsComponent,
    FairsComponent,
    ProductComponent,
    ProductformComponent,
    UserComponent,
    UserformComponent,
    FaircardsComponent,
    FairdetailsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
