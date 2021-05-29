import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBoxImageComponent } from './info-box-image.component';

describe('InfoBoxImageComponent', () => {
  let component: InfoBoxImageComponent;
  let fixture: ComponentFixture<InfoBoxImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBoxImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBoxImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
