import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { EquiporojoComponent } from '../equiporojo/equiporojo.component';
import { EquiponegroComponent } from '../equiponegro/equiponegro.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {
  public timeLeft: number = 60;
  public subscribeTimer: any;
  public interval:any;
  public audio: any;
  public equipoRojo: boolean = false;
  public puntosEquipoNegro: Number = 0;
  public puntosEquipoRojo: Number = 0;
  public randomPais: number = 0;
  public pista: boolean = false;
  public respuesta: boolean = false;
  public paices: any = [];
  constructor(private spinner: NgxSpinnerService, public api:ApiService, private nav:Router, private dialog:MatDialog) {
    this.paices = this.api.paices;
    this.getRandomInt();
   }

  ngOnInit(): void {
this.startTimer();
  }
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.respuesta = true;
        setTimeout(() => {
          this.incorrecto();
        }, 3000);
      }
    },1000)
  }
  getRandomInt() {
    this.randomPais = Math.floor(Math.random() * ((this.paices.length + 1) - 0)) + 0;
    console.log(this.randomPais);
    console.log(this.paices.length);
  }
  verPista(){
    this.playAudio('pista.mp3', 1);
    this.pista = true;
  }
  verRespuesta(){
    clearInterval(this.interval);
    this.respuesta = true;
  }
  playAudio(sonido:string, vol:number){
    this.audio = new Audio();
    this.audio.src = `./assets/effects/${sonido}`;
    this.audio.volume = vol;
    this.audio.load();
    this.audio.play();    
  }
  correcto(){
    
    this.playAudio('correct.mp3',1);
    this.paices.splice(this.randomPais, 1);
    if (this.equipoRojo === false) {
      if (this.pista === true) {
        this.puntosEquipoNegro = (this.puntosEquipoNegro as number) + 10;
        if (this.puntosEquipoNegro >= 100) {
          this.dialog.open(EquiponegroComponent);
          this.puntosEquipoNegro = 0;
          this.puntosEquipoRojo = 0;
        }
      } else {
        this.puntosEquipoNegro = (this.puntosEquipoNegro as number) + 20;
        if (this.puntosEquipoNegro >= 100) {
          this.dialog.open(EquiponegroComponent);
          this.puntosEquipoNegro = 0;
          this.puntosEquipoRojo = 0;
        }
      }
    }
    if (this.equipoRojo === true) {
      if (this.pista === true) {
        this.puntosEquipoRojo = (this.puntosEquipoRojo as number) + 10;
        if (this.puntosEquipoRojo >= 100) {
          this.dialog.open(EquiporojoComponent);
          this.puntosEquipoNegro = 0;
          this.puntosEquipoRojo = 0;
        }
      } else {
        this.puntosEquipoRojo = (this.puntosEquipoRojo as number) + 20;
        if (this.puntosEquipoRojo >= 100) {
          this.dialog.open(EquiporojoComponent);
          this.puntosEquipoNegro = 0;
          this.puntosEquipoRojo = 0;
        }
      }
    }
    this.pista = false;
    this.respuesta = false;
    this.getRandomInt();
    clearInterval(this.interval);
    this.timeLeft = 60;
    this.startTimer();
    /* this.playAudio('timer.mp3', 0.05); */
  }
  incorrecto(){
    this.playAudio('incorrect.mp3',1);
    this.paices.splice(this.randomPais, 1);
    this.equipoRojo = !this.equipoRojo;
    this.pista = false;
    this.respuesta = false;
    this.getRandomInt();
    clearInterval(this.interval);
    this.timeLeft = 60;
    this.startTimer();
    /* this.playAudio('timer.mp3', 0.05); */
  }
}
