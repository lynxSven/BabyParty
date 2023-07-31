import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemListComponent } from './item-list/item-list.component';
import { HeadlineComponent } from './headline/headline.component';

import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login/login.component';
import { ItemContainerComponent } from './item-container/item-container.component';
import { FoodComponent } from './food/food.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    HeadlineComponent,
    LoginComponent,
    ItemContainerComponent,
    FoodComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
