import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-box-image',
  templateUrl: './info-box-image.component.html',
  styleUrls: ['./info-box-image.component.scss']
})
export class InfoBoxImageComponent implements OnInit {

  @Input() imageUrl!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
