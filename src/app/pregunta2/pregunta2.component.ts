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

  calculo (hora:HTMLInputElement,minuto:HTMLInputElement){
    let calchora = parseInt(hora.value)*1500;
    let calcmin = parseFloat(minuto.value)*(1500/60);
    return calchora+calcmin;
  }

}
