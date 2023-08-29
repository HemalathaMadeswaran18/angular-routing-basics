import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get('https://dummyapi.io/data/v1/user?limit=10',{
    headers:{
      'app-id':'64ed7aba9d50b3128c670615'
    }
   } );
  }

  getUser(id:string){
    return this.http.get(`https://dummyapi.io/data/v1/user/${id}`,{
    headers:{
      'app-id':'64ed7aba9d50b3128c670615'
    }
   } );
  }
  







}
