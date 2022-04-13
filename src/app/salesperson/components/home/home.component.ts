import { Component, OnInit, ViewChild } from '@angular/core';
//import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Commission Earned' ], [ 'Monthly Quota' ]],
    datasets: [ {
      data: [ 300, 500 ]
    } ]
  };

  public pieChartType: ChartType = 'pie';

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };

  constructor() { }

  ngOnInit(): void {
   
  }
  

}
