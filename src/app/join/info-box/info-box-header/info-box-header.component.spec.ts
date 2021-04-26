import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBoxHeaderComponent } from './info-box-header.component';

describe('InfoBoxHeaderComponent', () => {
  let component: InfoBoxHeaderComponent;
  let fixture: ComponentFixture<InfoBoxHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBoxHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBoxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
