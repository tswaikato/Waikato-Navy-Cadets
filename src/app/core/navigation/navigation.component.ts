import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public home = false;
  public join = false;
  public contact = false;

  constructor(private router: Router) {
    switch (this.router.url){
      case '': this.home = true; break;
      case '/join': this.join = true; break;
    }
  }

  ngOnInit(): void {
  }

}
