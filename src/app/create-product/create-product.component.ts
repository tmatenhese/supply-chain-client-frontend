import { Component, OnInit } from '@angular/core';
import { OrganisationServiceService } from "../organisation-service.service";
import { Router } from '@angular/router';
import { OrganisationDao } from '../organisation-dao';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  orgDao: OrganisationDao = new OrganisationDao();
  submitted!: boolean;

  constructor(private organisationService: OrganisationServiceService,
    private router: Router) { }

  ngOnInit() {
  }
  newOrganisation(): void {
    this.submitted = false;
    this.orgDao = new OrganisationDao();
  }

  save() {
    this.organisationService.createProduct(this.orgDao)
      .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
    this.orgDao = new OrganisationDao();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/products']);
  }
}