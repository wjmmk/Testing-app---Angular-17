import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('It should be the same as the initial snapshot of the component', () => {
    expect(compiled).toMatchSnapshot();
  })

  test('should increase based on the arguments passed to the increaseBy(arg...)', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15)
  })

  test('It should increase the value when you press the +1 button', () => {
    const button = compiled.querySelectorAll('button')
    button[0].click()
    expect(component.counter).toBe(11)
  })

  test('I should update the value of the h3 tag related to the counter', () => {
    component.increaseBy(10)
    fixture.detectChanges()

    const h3 = compiled.querySelector('h3')
    expect(h3?.textContent).toContain('20')
  })
});
