import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // form
  contactForm:FormGroup= this.fb.group({
    name:['',[Validators.required]],
    apellidos:['',[Validators.required]],
    fumas:['',[Validators.required]],
    lectura:['',[Validators.required]],
    libros:['',[]],
    estadoCivil:['',[Validators.required]],
  })
  selectItem:Array<string>=['si','no']
  selectLibros:Array<string>=['libro1','libro2','libro3'];
  activeSelect:boolean=true;
  whiteSpace:boolean=false;
  catalogSelect!:Array<any>;

  constructor(
    private fb:FormBuilder, 
    private catalogService:AuthService,
  ) { }

  ngOnInit(): void {
    this.catalogService.getCatalog()
    .subscribe({
      next: res=>{
        console.log('respondio',res)
      }
    })

    this.contactForm.get('lectura')?.valueChanges
    .subscribe({
      next: res=>{
        if(res == 'si'){
          this.activeSelect=false;
        }
        else{
          this.activeSelect=true;
        }
      }
    })

    this.contactForm.get('name')?.valueChanges
    .subscribe({
      next: res=>{
        for(let i=0; i< res.length;i++){
          if(res[i]==' '){this.whiteSpace=false; console.log(res.i)}
          else(this.whiteSpace=true)
        }
      }
    })
  }

  save(){}

}
