import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneCatalogComponent } from './scene-catalog.component';

describe('SceneCatalogComponent', () => {
  let component: SceneCatalogComponent;
  let fixture: ComponentFixture<SceneCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
