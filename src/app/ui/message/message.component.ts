import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()   showMessage!:boolean;
  @Input()   typeMessage!:boolean;
  @Input()   stringMessage:string='';
  @Output()  statusMessage = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    //if(this.type)
  }
  divClose(){
    this.statusMessage.emit(true);
  }
}
