import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.queryParams.subscribe(params => {
      if(params && params.special){
        this.data = JSON.parse(params.special);
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
