import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data={
    username:"",
    password:""
  }

  constructor(private login: LoginserviceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  signUpClicked(){
    console.log("signup");   
  }

  doSubmitForm(){
    console.log("form submitted");
    console.log(this.data);
    if(this.data.username=='' || this.data.password==''){
      console.log("empty field");
      
    }
    this.login.doLogin(this.data).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/salesperson/home'])
      },
      error=>{
        console.log(error);
        
      }
    ) 
  }

}
