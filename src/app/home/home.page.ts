import { Component } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {
    name: 'Francisco Jose',
    website: 'www.google.de',
    interests: ['Ionic', 'Angular', 'Crypto']
  };
  
  constructor(private router: Router, private dataService: DataService) {
    
  }

  passDatawithQuery(){
    const navData: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.user)
      }
    };
    this.router.navigate(['details'], navData);
  }

  passDatawithService(){
    this.dataService.setData(12, this.user);
    this.router.navigateByUrl('/details/12');
  }

  passDatawithState(){
    const navData: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    this.router.navigate(['details'], navData);
  }

}
