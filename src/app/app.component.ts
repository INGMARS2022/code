import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech';
  spinner:boolean=false;
  constructor(private router:Router){
    //show spinner
    this.router.events.subscribe(event => {

      if(event instanceof NavigationStart){
        this.spinner = true;
      }
      if(event instanceof NavigationEnd){
        this.spinner = false;
      }
    });

  }
}
