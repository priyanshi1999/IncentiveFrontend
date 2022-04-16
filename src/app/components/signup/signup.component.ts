import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { userData } from 'src/app/tempdata/userdata';

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
    pass:"",
    quota:0
  }

  // userDetails:any;

  constructor(private signup: LoginserviceService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  signUpClicked(){
    console.log("signup form submitted");
    console.log(this.data);
    if(this.data.sp_name=='' || this.data.pass=='' || this.data.city=='' || this.data.email==''){
      console.log("empty field"); 
    }
    if(this.data.city==('Mumbai') || this.data.city==('mumbai')){
      this.data.quota=10000000;
    }
    if(this.data.city==('Gurugram') || this.data.city==('gurugram')){
      this.data.quota=10000000;
    }
    if(this.data.city==('Bangalore') || this.data.city==('bangalore')){
      this.data.quota=8000000;
    }
    if(this.data.city==('Hyderabad') || this.data.city==('hyderabad')){
      this.data.quota=6000000;
    }
    if(this.data.city==('Chennai') || this.data.city==('chennai')){
      this.data.quota=6000000;
    }
    this.signup.doSignUp(this.data).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/login'])
      },
      error=>{
        console.log(error);  
      }
    ) 
  }

}
