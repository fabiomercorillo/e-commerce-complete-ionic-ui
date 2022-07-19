import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab1SearchCartComponent } from './tab1-search-cart.component';

describe('Tab1HeaderComponent', () => {
  let component: Tab1SearchCartComponent;
  let fixture: ComponentFixture<Tab1SearchCartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1SearchCartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1SearchCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
