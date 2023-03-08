import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytitleComponent } from './mytitle.component';

describe('MytitleComponent', () => {
  let component: MytitleComponent;
  let fixture: ComponentFixture<MytitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MytitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
