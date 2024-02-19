import {Component, EventEmitter, input, Input, OnInit, Output} from '@angular/core';
import { Boton } from '../boton.interface';
import {AppComponent} from "../../app.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})

export class BotonesComponent implements OnInit {

  //Variables de instancia de comunicación con el padre
  @Output()
  // esta se lanza o emite mediante el metodo (click) vez que pulsamos un boton
  // es una declaracion
  eventoBotonHijoPulsado =new EventEmitter<Boton>();

  @Input()
  eventoResetPadre: any;

  //Variables propias del componente
  @Input()
  boton:Boton={} as Boton;
  btnDesactivado:boolean = false; //Bandera html local


  constructor(){

  }

  ngOnInit(): void {
    // ahora esta subscrito a la variable local que ha llegado.
    // y se renderiza al pulsar el  boton reset del padre
    this.eventoResetPadre.subscribe(()=> this.btnDesactivado = false);

  }

  botonPulsado(boton: Boton) {
    // inicializa el envio  emit
    this.eventoBotonHijoPulsado.emit(this.boton);
    this.btnDesactivado = true;
    console.log(boton.texto);
  }

}
