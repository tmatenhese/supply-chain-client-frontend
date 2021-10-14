import { Component, OnInit } from '@angular/core';
import { OrganisationDao } from '../organisation-dao';
import { OrganisationServiceService } from '../organisation-service.service';
import { ProductListComponent } from '../product-list/product-list/product-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css']
})
export class ViewProductDetailsComponent implements OnInit {


  id!: string;
  organisation!: OrganisationDao;

  constructor(private route: ActivatedRoute,private router: Router,
    private organisationService: OrganisationServiceService) { }

  ngOnInit() {
    this.organisation = new OrganisationDao();

    this.id = this.route.snapshot.params['id'];
    
    this.organisationService.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.organisation = data as OrganisationDao;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['/products']);
  }
}