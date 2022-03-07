import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increase',
  templateUrl: './increase.component.html',
  styleUrls: ['./increase.component.css']
})
export class IncreaseComponent implements OnInit {
  @Input() progress: number = 25;

  @Output() changeValueEmit: EventEmitter<number> = new EventEmitter();

  get getPorcent() {
    return `${this.progress}%`
  }
  constructor() { }

  ngOnInit(): void {
  }

  changeValuePorcent(value: number): void {
    if (this.progress >= 100 && value >= 0) {
      this.changeValueEmit.emit(100)
      this.progress = 100
      return;
    }
    this.changeValueEmit.emit(100)

    if (this.progress <= 0 && value <= 0) {
      this.changeValueEmit.emit(0);
      this.progress = 0;
      return;
    }
    this.progress += value
    this.changeValueEmit.emit(this.progress);
  }

  onchange(value: number) {
    if ( value <= 0 ){
      this.progress = 0;
    }else if ( value >= 100){
      this.progress = 100;
    }else{
      this.progress = value;
    }

    this.changeValueEmit.emit( this. progress );
  }

}
