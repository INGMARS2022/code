import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //message
  showMessages:boolean=false;
  stringMessage:string='';
  typeMessage!:boolean;

  //spinner
  spinner:boolean=false

  // login form
  login:FormGroup= this.fb.group({
    email:['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(3)]],
  })


  constructor(
    private fb:FormBuilder, 
    private route:Router,
    private auth:AuthService, 
  ) { }
  ngOnInit(): void {
  }
 
  logIn(){
    // form values
    this.spinner=true;
    const {email,password} = this.login.value;
    console.log(email,password)
    this.auth.login(email,password)
    .subscribe({
      next: res=>{
        /*this.showMessages=true;
        this.typeMessage=true;
        this.stringMessage=res.mensaje;*/
        this.spinner=false;
        this.route.navigateByUrl('pages');
        console.log(res)},
      error: err=>{
        this.showMessages=true;
        this.typeMessage=false;
        this.stringMessage=err.error.mensaje;
        this.spinner=false;
        console.log(err)}
    })
  }
  show(val:boolean){
    this.showMessages=false;
  }

}
