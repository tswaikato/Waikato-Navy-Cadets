import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {HomeComponent} from '../../home/home.component';
import {JoinComponent} from '../../join/join.component';
import {ContactComponent} from '../../contact/contact.component';

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
  }

  public getBoldClass(path: string): string {
    return (this.router.url === path) ? 'font-bold' : '';
  }

  public onHomeClick(): void{
    this.makeLinksFalse();
    this.home = true;
  }

  public onJoinClick(): void{
    this.makeLinksFalse();
    this.join = true;
  }

  public onContactClick(): void{
    this.makeLinksFalse();
    this.contact = true;
  }

  private makeLinksFalse(): void{
    this.home = false;
    this.join = false;
    this.contact = false;
  }

  ngOnInit(): void {
  }

}
