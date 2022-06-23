import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  dateNew!:string;
  // date form
  dateForm:FormGroup= this.fb.group({
    dateActual:['',[Validators.required]],
    dateAno:[0,[Validators.required,Validators.max(10)]],
    dateMes:[0,[Validators.required,Validators.max(10)]],
    dateDia:[0,[Validators.required,Validators.max(20)]],
  })

  constructor(
    private fb:FormBuilder, 
    private route:Router,
  ) { }

  ngOnInit(): void {
  }
  calcular(){
    const {dateActual,dateAno,dateMes,dateDia} = this.dateForm.value;
    let dia= parseInt(dateActual.getDate());
    let mes= parseInt(dateActual.getMonth())+1;
    let ano= parseInt(dateActual.getFullYear());
    let diaA = parseInt(dateDia);
    let mesA = parseInt(dateMes);
    let anoA = parseInt(dateAno);

    console.log(dia,mes,ano);

    if(mes===2){
      console.log('28')
      if( dia+diaA>28){
        dia= dia+diaA-28;
        mes= mes+1;
      }
      else{
        dia=dia+diaA;
      }
      if(mes+mesA>12){
        mes= mes+mesA-12;
        ano= ano+1
      }
      else{
        mes=mes+mesA;
      }
      ano=ano+anoA;
    }
    else if(mes===1 || mes===3 || mes===5 || mes==7 || mes===8 || mes===10 || mes===12){
      console.log('31')
      if( dia+diaA>31){
        dia= dia+diaA-31;
        mes= mes+1;
      }
      else{
        dia=dia+diaA;
      }
      if(mes+mesA>12){
        mes= mes+mesA-12;
        ano= ano+1
      }
      else{
        mes=mes+mesA;
      }
      ano=ano+anoA;
    }
    else{
      console.log('30')
      if( dia+diaA>30){
        dia= dia+diaA-30;
        mes= mes+1;
      }
      else{
        dia=dia+diaA;
      }
      if(mes+mesA>12){
        mes= mes+mesA-12;
        ano= ano+1
      }
      else{
        mes=mes+mesA;
      }
      ano=ano+anoA;
    }
    this.dateNew=`${ano}-${mes}-${dia}`
    console.log(dia,mes,ano)

  }

}
