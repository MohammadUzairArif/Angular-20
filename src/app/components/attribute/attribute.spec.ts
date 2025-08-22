import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attribute } from './attribute';

describe('Attribute', () => {
  let component: Attribute;
  let fixture: ComponentFixture<Attribute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Attribute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Attribute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
