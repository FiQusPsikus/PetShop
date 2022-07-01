import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyNowComponent } from './Components/buy-now/buy-now.component';
import { CartComponent } from './Components/cart/cart.component';
import { LoginScreenComponent } from './Components/login-screen/login-screen.component';
import { MainScreenComponent } from './Components/main-screen/main-screen.component';
import { AdminPanelComponent } from './Components/nav-bar/admin-panel/admin-panel.component';
import { CategoryAdminComponent } from './Components/nav-bar/admin-panel/category-admin/category-admin.component';
import { OrderAdminComponent } from './Components/nav-bar/admin-panel/order-admin/order-admin.component';
import { ProductAdminComponent } from './Components/nav-bar/admin-panel/product-admin/product-admin.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductPreviewComponent } from './Components/product-preview/product-preview.component';
import { RegisterScreenComponent } from './Components/register-screen/register-screen.component';

const routes: Routes = [
  {component:MainScreenComponent, path:""},
  {component:ProductListComponent, path:"category/:id"},
  {component:ProductListComponent, path:"category/:id"},
  {component:ProductListComponent, path:"category/:id"},
  {component:ProductListComponent, path:"category/:id"},
  {component:ProductPreviewComponent, path:"item_preview/:id"},
  {component:LoginScreenComponent, path:"login"},
  {component:RegisterScreenComponent, path:"register"},
  {component:BuyNowComponent, path:"buy_now"},
  {component:BuyNowComponent, path:"buy_now/item/:id"},
  {component:CartComponent, path:"cart"},
  {component:AdminPanelComponent, path:"admin_panel"},
  {component:CategoryAdminComponent, path:"admin_category"},
  {component:ProductAdminComponent, path:"admin_product"},
  {component:OrderAdminComponent, path:"admin_order"},
  {component:MainScreenComponent, path:"**"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
