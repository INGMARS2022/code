
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, tap } from 'rxjs';
import { AuthResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private router:Router 
  ) { }

  login(email:string,password:string){
    //request body
    const url = 'https://desa.ies-webcontent.com.mx/login';
    const body = {username:email,password}
    return this.http.post<AuthResponse>(url,body)
    .pipe(
      tap({
        next: res=>{
          //save token in localStorage
          localStorage.setItem('token',res.data.token);
        },
        error: err=>{
          console.log(err)
        }
      }),
    )  
  }

  validarToken(){
    const token = localStorage.getItem('token') || '';
    if(token!=''){
      return of(true);
    } 
    else{
      return of(false);
    }
  }

  getCatalog(){
     //request body
     const url = 'http://201.131.20.125/BienesRaicesApi/api/services/app/Catalogo/EstadoCivil';
     const body = {}
     return this.http.post<any>(url,body)
  }
    
}
