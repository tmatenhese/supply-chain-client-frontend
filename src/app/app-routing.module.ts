import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';




const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'add-new', component: CreateProductComponent },
  { path: 'product/:id', component: ViewProductDetailsComponent },
  { path: 'update/:id/:owner', component: UpdateProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



