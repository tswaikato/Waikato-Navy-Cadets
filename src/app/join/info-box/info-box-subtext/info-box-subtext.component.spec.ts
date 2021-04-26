import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBoxSubtextComponent } from './info-box-subtext.component';

describe('InfoBoxSubtextComponent', () => {
  let component: InfoBoxSubtextComponent;
  let fixture: ComponentFixture<InfoBoxSubtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBoxSubtextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBoxSubtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
