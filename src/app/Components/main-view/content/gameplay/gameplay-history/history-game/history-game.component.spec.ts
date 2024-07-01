import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryGameComponent } from './history-game.component';

describe('HistoryGameComponent', () => {
  let component: HistoryGameComponent;
  let fixture: ComponentFixture<HistoryGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
