import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadecolaboradoresComponent } from './listadecolaboradores.component';

describe('ListadecolaboradoresComponent', () => {
  let component: ListadecolaboradoresComponent;
  let fixture: ComponentFixture<ListadecolaboradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadecolaboradoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadecolaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
