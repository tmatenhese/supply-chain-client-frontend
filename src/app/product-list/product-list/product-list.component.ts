import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { OrganisationServiceService } from "../../organisation-service.service";
import { Product } from "../../product";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Observable<Product[]>;

  constructor(private organisationService: OrganisationServiceService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.products = this.organisationService.getProductList();
  }

  changeOwner(id: string, newOwner: string) {
    this.organisationService.changeOwner(id,newOwner)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.reloadData();
        },
        (error: any) => console.log(error));
  }

  productDetails(id: string){
    this.router.navigate(['product', id]);
  }
  updateDetails(id: string,owner:string){
    this.router.navigate(['update', id,owner]);
  }  
}