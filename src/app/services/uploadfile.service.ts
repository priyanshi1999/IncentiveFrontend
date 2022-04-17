import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadfileService {

  constructor(private http:HttpClient) { }

  upload(file:any):Observable<any> {
  
    // Create form data
    const File = new FormData(); 
      
    // Store form name as "file" with file data
    File.append("File", file, file.name);
      
    // Make http post request over api
    // with formData as req
    return this.http.post("http://localhost:8081/uploadFile", File)
}
}
