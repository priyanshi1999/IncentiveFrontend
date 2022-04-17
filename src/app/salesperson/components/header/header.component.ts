import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userData } from 'src/app/tempdata/userdata';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userDetails:any;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    console.log(userData[0].sp_name);
    this.userDetails= [...userData];
    //console.log("userDEtails: "+this.userDetails);
    // userData[0].quota= 50000;
    // console.log(userData[0].quota);
    
  }

  logoutClicked(){
    userData.pop();
    console.log(userData);
    this.router.navigate(['/login']);
  }
}
