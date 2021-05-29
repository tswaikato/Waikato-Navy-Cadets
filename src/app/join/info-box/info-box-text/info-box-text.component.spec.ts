import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBoxTextComponent } from './info-box-text.component';

describe('InfoBoxTextComponent', () => {
  let component: InfoBoxTextComponent;
  let fixture: ComponentFixture<InfoBoxTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBoxTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBoxTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
