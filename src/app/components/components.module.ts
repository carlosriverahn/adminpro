import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncreaseComponent } from './increase/increase.component';
import { FormsModule } from '@angular/forms';
import { DonusComponent } from './donus/donus.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncreaseComponent,
    DonusComponent
  ],
  exports: [
    IncreaseComponent,
    DonusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }
