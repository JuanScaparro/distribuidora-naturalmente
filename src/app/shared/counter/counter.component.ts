import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input("max-count") maxCount: number = 0;

  @Output("selected-count") selectedCountEmitter: EventEmitter<number> = new EventEmitter<number>();

  public counter: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  public setSelectedCount(counter: number) {
    this.counter = counter
    this.selectedCountEmitter.emit(this.counter)
  }

}
