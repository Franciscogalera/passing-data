import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute, private dataService: DataService, 
    private router: Router) {
    this.route.queryParams.subscribe(params => {
      if(params && params.special){
        this.data = JSON.parse(params.special);
      }
    });
    //Extras state
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
    });
   }

  ngOnInit() {
    console.log('sfsdf', this.route.snapshot.data); 
    if(this.route.snapshot.data){
      this.data = this.dataService.getData(12);
      console.log(this.data);
    }
  }

}
