import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PanelMenuComponent } from './panel-menu/panel-menu.component';
import { Pregunta2Component } from './pregunta2/pregunta2.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"menu",component:PanelMenuComponent},
    {path:"tiempo",component:Pregunta2Component}
];
