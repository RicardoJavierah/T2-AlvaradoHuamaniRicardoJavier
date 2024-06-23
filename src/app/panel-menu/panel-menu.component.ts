import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-panel-menu',
  standalone: true,
  imports: [RouterOutlet,MaterialModule],
  templateUrl: './panel-menu.component.html',
  styleUrl: './panel-menu.component.css'
})
export class PanelMenuComponent {
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService
  ){

  }

  salir(): void{
    this.authService.logout();
    this.router.navigateByUrl("/login")
  }


  irPreDos():void{
    this.router.navigate(["tiempo"], {relativeTo: this.route})
  }
  irCurso():void{
    this.router.navigate(["Preg3"], {relativeTo: this.route})
  }
  irPost():void{
    this.router.navigate(["Preg4"], {relativeTo: this.route})
  }
  
}
