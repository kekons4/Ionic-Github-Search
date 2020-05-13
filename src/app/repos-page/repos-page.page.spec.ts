import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReposPagePage } from './repos-page.page';

describe('ReposPagePage', () => {
  let component: ReposPagePage;
  let fixture: ComponentFixture<ReposPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReposPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
