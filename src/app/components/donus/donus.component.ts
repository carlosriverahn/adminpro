import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donus',
  templateUrl: './donus.component.html',
  styles: [
  ]
})
export class DonusComponent {
  @Input() title: string = '';
  @Input() doughnutChartLabels: string[] = [ '', '', '' ];
  @Input() doughnutChartData: ChartData<'doughnut'> = {
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
