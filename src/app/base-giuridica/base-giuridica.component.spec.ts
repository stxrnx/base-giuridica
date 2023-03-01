import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseGiuridicaComponent } from './base-giuridica.component';

describe('BaseGiuridicaComponent', () => {
  let component: BaseGiuridicaComponent;
  let fixture: ComponentFixture<BaseGiuridicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseGiuridicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseGiuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
