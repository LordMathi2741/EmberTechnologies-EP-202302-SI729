import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBundlePageComponent } from './the-bundle-page.component';

describe('TheBundlePageComponent', () => {
  let component: TheBundlePageComponent;
  let fixture: ComponentFixture<TheBundlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBundlePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheBundlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
