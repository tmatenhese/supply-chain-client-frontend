import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisationServiceService } from '../organisation-service.service';
import { OrganisationDao } from '../organisation-dao';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id!: string;
  owner!: string;
  organisation!: OrganisationDao;

  constructor(private route: ActivatedRoute,private router: Router,
    private organisationService: OrganisationServiceService) { }

  ngOnInit() {
    this.organisation = new OrganisationDao();

    this.id = this.route.snapshot.params['id'];
    this.owner = this.route.snapshot.params['owner'];
    
    this.organisationService.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.organisation = data  as OrganisationDao;
      }, error => console.log(error));
  }

  updateProduct() {
    this.organisationService.changeOwner(this.id, this.organisation.newOwner)
      .subscribe(data => console.log(data), error => console.log(error));
    this.organisation = new OrganisationDao();
    this.gotoList();
  }

  onSubmit() {
    this.updateProduct();    
  }

  gotoList() {
    this.router.navigate(['/products']);
  }
}
