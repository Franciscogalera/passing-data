import { Component } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';


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
  
  constructor(private router: Router) {
    
  }

  passDatawithQuery(){
    const navData: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.user)
      }
    };
    this.router.navigate(['details'], navData);
  }

  passDatawithService(){}

  passDatawithState(){}

}
