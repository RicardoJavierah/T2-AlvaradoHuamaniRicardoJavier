import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [MaterialModule,RouterOutlet],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {

}
