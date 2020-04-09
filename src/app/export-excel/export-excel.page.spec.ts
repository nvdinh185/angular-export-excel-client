import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExportExcelPage } from './export-excel.page';

describe('ExportExcelPage', () => {
  let component: ExportExcelPage;
  let fixture: ComponentFixture<ExportExcelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportExcelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExportExcelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
