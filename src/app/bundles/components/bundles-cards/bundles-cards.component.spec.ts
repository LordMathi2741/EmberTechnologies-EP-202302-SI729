import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlesCardsComponent } from './bundles-cards.component';

describe('BundlesCardsComponent', () => {
  let component: BundlesCardsComponent;
  let fixture: ComponentFixture<BundlesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundlesCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BundlesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
