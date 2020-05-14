import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DownUpExcelPage } from './down-up-excel.page';

describe('DownUpExcelPage', () => {
  let component: DownUpExcelPage;
  let fixture: ComponentFixture<DownUpExcelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownUpExcelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DownUpExcelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
