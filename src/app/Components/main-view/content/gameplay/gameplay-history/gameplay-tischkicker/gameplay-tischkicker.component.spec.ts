import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameplayTischkickerComponent } from './gameplay-tischkicker.component';

describe('GameplayTischkickerComponent', () => {
  let component: GameplayTischkickerComponent;
  let fixture: ComponentFixture<GameplayTischkickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameplayTischkickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameplayTischkickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
