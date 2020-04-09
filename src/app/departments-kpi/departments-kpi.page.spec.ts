import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DepartmentsKpiPage } from './departments-kpi.page';

describe('DepartmentsKpiPage', () => {
  let component: DepartmentsKpiPage;
  let fixture: ComponentFixture<DepartmentsKpiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsKpiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DepartmentsKpiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
