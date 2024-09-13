import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  // 1 writable signal
  // counter : WritableSignal<number> = signal(0);
  // FED_Learning = signal("Welcome to FED Learning");
  // signalArray = signal([]);
  // signalObj = signal({});
  counter = signal(0);

  defaultValue() {
    this.counter.set(10);
  }

  increament() {
    this.counter.update(value => value + 1);
  }

  decreament() {
    this.counter.update(value => value - 1);
  }

  resetValue() {
    this.counter.set(0);
  }

  // 2 computed signal
  counterSquare : Signal<number> = computed(()=>{
    // return this.counter() * this.counter();
    // return Math.pow(this.counter(),2);
    return this.counter() ** 2;
  })

  // 3. effects
  constructor(){
    effect(()=> console.log('Value of counter is : ' + this.counter()));
  }

}
