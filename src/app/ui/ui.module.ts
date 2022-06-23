import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { MessageComponent } from './message/message.component';
import { CambioLetrasPipe } from './cambio-letras.pipe';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    MessageComponent,
    CambioLetrasPipe,
    NavComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  exports:[
    MessageComponent,
    CambioLetrasPipe,
    NavComponent
  ]
})
export class UiModule { }
