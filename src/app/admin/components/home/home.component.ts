import { Component, Inject, OnInit } from '@angular/core';
import { UploadfileService } from 'src/app/services/uploadfile.service';
//import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  file: File = null; 

  constructor(private uploadfile: UploadfileService) { }
  ngOnInit(): void {
  }
  onChange(event:any) {
    this.file = event.target.files[0];
    console.log("File: "+this.file);
  }
  uploadClicked(){
    this.uploadfile.upload(this.file).subscribe(
      response => {
        console.log(response);
        // userData.push(response);
        // console.log(userData);
        //this.router.navigate(['/salesperson/home'])
      },
      error=>{
        console.log(error);
        
      }
    ) 
  }
}

