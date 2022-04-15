import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  data={
    sp_name:"",
    // phone:"",
    city:"",
    email:"",
    pass:""
  }

  constructor(private signup: LoginserviceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  signUpClicked(){
    console.log("signup form submitted");
    console.log(this.data);
    if(this.data.sp_name=='' || this.data.pass=='' || this.data.city=='' || this.data.email==''){
      console.log("empty field"); 
    }
    this.signup.doSignUp(this.data).subscribe(
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
