import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalLibraryComponent } from './additional-library.component';

describe('AdditionalLibraryComponent', () => {
  let component: AdditionalLibraryComponent;
  let fixture: ComponentFixture<AdditionalLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
