import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebporfileinformationTableComponent } from './webporfileinformation-table.component';

describe('WebporfileinformationTableComponent', () => {
  let component: WebporfileinformationTableComponent;
  let fixture: ComponentFixture<WebporfileinformationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebporfileinformationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebporfileinformationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
