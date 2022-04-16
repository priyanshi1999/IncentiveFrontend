import { Component, OnInit } from '@angular/core';
import { userData } from 'src/app/tempdata/userdata';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userDetails:any;
  constructor() { }

  ngOnInit(): void {
    this.getHeaderData();
    console.log(userData[0].sp_name);
    this.userDetails= [...userData];
    //console.log("userDEtails: "+this.userDetails);
    userData[0].quota= 50000;
    console.log(userData[0].quota);
    
  }

  getHeaderData(){

  }

}
