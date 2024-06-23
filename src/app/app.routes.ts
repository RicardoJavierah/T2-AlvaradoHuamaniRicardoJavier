import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PanelMenuComponent } from './panel-menu/panel-menu.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"menu",component:PanelMenuComponent}
];
