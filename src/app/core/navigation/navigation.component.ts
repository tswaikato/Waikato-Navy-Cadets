import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public home = false;
  public join = false;
  public contact = false;

  constructor() {
    this.home = true;
  }

  ngOnInit(): void {
  }

}
