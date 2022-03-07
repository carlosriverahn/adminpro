import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progress1: number = 35;
  progress2: number = 55;

  get getPorcent1() {
    return `${this.progress1}%`
  }


  get getPorcent2() {
    return `${this.progress2}%`
  }

}
