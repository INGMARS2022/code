import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showModal:boolean=false;
  name:string='';
  // login form
  nameForm:FormGroup= this.fb.group({
    name:['',[Validators.required]],
  })


  constructor(
    private fb:FormBuilder, 
    private route:Router,
  ) { }

  ngOnInit(): void {
  }
  show(){
    this.showModal=true;
  }
  enviar(){
    const {name} = this.nameForm.value;
    this.name=name;
    this.showModal=false;
  }
}
