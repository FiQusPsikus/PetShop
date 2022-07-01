import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { MainScreenComponent } from './Components/main-screen/main-screen.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { MainMenuProductComponent } from './Components/main-screen/Components/main-menu-product/main-menu-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductItemComponent } from './Components/product-list/product-item/product-item.component';

import {HttpClientModule} from '@angular/common/http';
import { ProductPreviewComponent } from './Components/product-preview/product-preview.component'; // add this line

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginScreenComponent } from './Components/login-screen/login-screen.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterScreenComponent } from './Components/register-screen/register-screen.component';
import { CartComponent } from './Components/cart/cart.component';
import { CartItemComponent } from './Components/cart/cart-item/cart-item.component';
import { BuyNowComponent } from './Components/buy-now/buy-now.component';
import { OrderPreviewComponent } from './Components/buy-now/order-preview/order-preview.component';
import { OrderItemComponent } from './Components/buy-now/order-preview/order-item/order-item.component';
import { AdminPanelComponent } from './Components/nav-bar/admin-panel/admin-panel.component';
import { CategoryAdminComponent } from './Components/nav-bar/admin-panel/category-admin/category-admin.component';
import { ProductAdminComponent } from './Components/nav-bar/admin-panel/product-admin/product-admin.component';
import { OrderAdminComponent } from './Components/nav-bar/admin-panel/order-admin/order-admin.component';
import { OrderItemAdminComponent } from './Components/nav-bar/admin-panel/order-admin/order-item-admin/order-item-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainScreenComponent,
    MainMenuProductComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductPreviewComponent,
    LoginScreenComponent,
    RegisterScreenComponent,
    CartComponent,
    CartItemComponent,
    BuyNowComponent,
    OrderPreviewComponent,
    OrderItemComponent,
    AdminPanelComponent,
    CategoryAdminComponent,
    ProductAdminComponent,
    OrderAdminComponent,
    OrderItemAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    NgbModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
