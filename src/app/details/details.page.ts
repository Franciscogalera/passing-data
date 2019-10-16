import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if(params && params.special){
        this.data = JSON.parse(params.special);
      }
    });
    console.log(this.data);
    
   }

  ngOnInit() {
  }

}
