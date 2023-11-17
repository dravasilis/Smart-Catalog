import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogInfoComponent } from './catalog_info.component';

describe('InfoComponent', () => {
  let component: CatalogInfoComponent;
  let fixture: ComponentFixture<CatalogInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogInfoComponent]
    });
    fixture = TestBed.createComponent(CatalogInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
