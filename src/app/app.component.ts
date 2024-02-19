import {Component, EventEmitter, Input} from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {BotonesComponent} from './components/botones/botones.component';
import {Boton} from './components/boton.interface';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [NgFor, CommonModule, RouterOutlet, BotonesComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    //Variables de instancia de comunicación con los hijos

    sumaDeValores: number = 0;
    botonesPulsados: Boton[] = [];
    pulsado: string = "No se ha pulsado ningún boton";
    cadena: string = "";

    eventoResetPulsado = new EventEmitter<boolean>;


    //Variables propias del componente
    botones: Boton[] = [

        {id: 1, texto: 'Rojo', valor: 3},
        {id: 2, texto: 'Azul', valor: 7},
        {id: 3, texto: 'Verde', valor: 6},
        {id: 4, texto: 'Marrón', valor: 4},
        {id: 5, texto: 'Amarillo', valor: 8},
        {id: 6, texto: 'Naranja', valor: 2},
        {id: 7, texto: 'Blanco', valor: 1},
        {id: 8, texto: 'prueba', valor: -31},
    ];
    @Input()
    botonRecibido: Boton = {} as Boton;
    constructor() {
    }

    //Métodos de instancia
    botonPulsado(boton: Boton) {
        this.sumaDeValores += boton.valor;
        this.botonesPulsados.push(boton);
        this.cadena += boton.texto;
        this.pulsado = "Ya ha iniciado con " + this.botonesPulsados.length + " boton/es";

    }
    ArrayPulsado(){
        // mapeamos el array de botones a un array de String
        return this.botonesPulsados.map((b)=> b.texto);

    }
    resetPadre(){
        this.sumaDeValores = 0;
        this.botonesPulsados = [];
        this.pulsado = "No se ha pulsado ningún botón";
        this.cadena = "";
        this.eventoResetPulsado.emit(true);
    }




}
