import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  @Input() mainImage!: string;
  @Input() mainHeaderText!: string;
  @Input() mainText!: string;
  @Input() subText = '';

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.mainImage);
  }

}
