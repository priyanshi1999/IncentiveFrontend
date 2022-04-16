import { Component, OnInit, ViewChild } from '@angular/core';
//import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { userData } from 'src/app/tempdata/userdata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  userDetails:any;

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
    this.userDetails= [...userData];
    //this.changeNumbers(12, "comm");
    //this.changeNumbers(14, "quota");
  }

  // changeNumbers(data: any, id: any){
  //   var counterComm= document.getElementById(id);
  //   let count=1;
  //   setInterval( () => {
  //     if(count < data){
  //       count++;
  //       counterComm.innerText= count.toString();
  //     }
  //   } ,1);
  // }
}
