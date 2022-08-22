import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocInfosComponent } from './bloc-infos.component';

describe('BlocInfosComponent', () => {
  let component: BlocInfosComponent;
  let fixture: ComponentFixture<BlocInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
