import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { CalcComponent } from './calc/calc.component';
import { FormComponent } from './form/form.component';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {  MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    HomeComponent,
    ChatComponent,
    CalcComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    UiModule,
    MatDatepickerModule,

  ]
})
export class PagesModule { }
