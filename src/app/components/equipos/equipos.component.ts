import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {
  public equipoRojo: boolean = false;
  public puntosEquipoNegro: Number = 0;
  public puntosEquipoRojo: Number = 0;
  public randomPais: number = 0;
  public pista: boolean = false;
  public respuesta: boolean = false;
  public paices: any = [];
  constructor(private spinner: NgxSpinnerService, public api:ApiService, private nav:Router) {
    this.paices = this.api.paices;
    this.getRandomInt();
   }

  ngOnInit(): void {
  }
  getRandomInt() {
    this.randomPais = Math.floor(Math.random() * ((this.paices.length + 1) - 0)) + 0;
    console.log(this.randomPais);
    console.log(this.paices.length);
  }
  verPista(){
    this.pista = true;
  }
  verRespuesta(){
    this.respuesta = true;
  }
  correcto(){
    this.paices.splice(this.randomPais, 1);
    if (this.equipoRojo === false) {
      if (this.pista === true) {
        this.puntosEquipoNegro = (this.puntosEquipoNegro as number) + 10;
      } else {
        this.puntosEquipoNegro = (this.puntosEquipoNegro as number) + 20;
      }
    }
    if (this.equipoRojo === true) {
      if (this.pista === true) {
        this.puntosEquipoRojo = (this.puntosEquipoRojo as number) + 10;
      } else {
        this.puntosEquipoRojo = (this.puntosEquipoRojo as number) + 20;
      }
    }
    this.pista = false;
    this.respuesta = false;
    this.getRandomInt();
  }
  incorrecto(){
    this.equipoRojo = !this.equipoRojo;
    this.pista = false;
    this.respuesta = false;
    this.getRandomInt();
  }
}
