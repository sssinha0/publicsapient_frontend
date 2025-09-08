import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageComponentComponent } from './search-page-component.component';

describe('SearchPageComponentComponent', () => {
  let component: SearchPageComponentComponent;
  let fixture: ComponentFixture<SearchPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPageComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
