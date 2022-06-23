import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarDashboardGuard } from '../guards/validar-dashboard.guard';
import { CalcComponent } from './calc/calc.component';
import { ChatComponent } from './chat/chat.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes=[
  {
      path:'',
      children:[
          {
              path:'home',
              component:HomeComponent,
              canActivate:[ValidarDashboardGuard]
          },
          {
            path:'chat',
            component:ChatComponent,
            canActivate:[ValidarDashboardGuard]
          },
          {
            path:'form',
            component:FormComponent ,
            canActivate:[ValidarDashboardGuard]
          },
          {
            path:'calc',
            component:CalcComponent ,
            canActivate:[ValidarDashboardGuard]
          },
          {
            path:'**',
            redirectTo:'home'
          }
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
