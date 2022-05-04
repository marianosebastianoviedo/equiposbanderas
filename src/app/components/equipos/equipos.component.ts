import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from '../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { EquiporojoComponent } from '../equiporojo/equiporojo.component';
import { EquiponegroComponent } from '../equiponegro/equiponegro.component';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {

  public ganaSound:HTMLAudioElement = new Audio();
  public pierdeSound:HTMLAudioElement = new Audio();
  public pistaSound:HTMLAudioElement = new Audio();
  public musicaSound:HTMLAudioElement = new Audio();

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

    this.ganaSound.src = `./assets/effects/correct.mp3`;
    this.ganaSound.load();
    this.pierdeSound.src = `./assets/effects/incorrect.mp3`;
    this.pierdeSound.volume = 0.05;
    this.pierdeSound.load();
    this.pistaSound.src = `./assets/effects/pista.mp3`;
    this.pistaSound.load();
    this.musicaSound.src = `./assets/effects/timer.mp3`;
    this.musicaSound.volume = 0.06;
    this.musicaSound.load();
   }

  ngOnInit(): void {
    this.musicaSound.play();
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.respuesta = true;
        this.incorrecto();
      }
    },900);
  }

  getRandomInt() {
    this.randomPais = Math.floor(Math.random() * ((this.paices.length + 1) - 0)) + 0;
    console.log(this.randomPais);
    console.log(this.paices.length);
  }

  verPista(){
    this.pistaSound.play();
    this.pista = true;
  }

  verRespuesta(){

    this.musicaSound.currentTime = 57.5;
    clearInterval(this.interval);
    this.respuesta = true;
  }

  correcto(){
    
    this.ganaSound.play();
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
    this.musicaSound.pause();
    this.musicaSound.currentTime = 0;
    this.musicaSound.play();
  }

  incorrecto(){
    this.pierdeSound.play();
    this.paices.splice(this.randomPais, 1);
    this.equipoRojo = !this.equipoRojo;
    this.pista = false;
    this.respuesta = false;
    this.getRandomInt();
    clearInterval(this.interval);
    this.timeLeft = 60;
    this.startTimer();
    this.musicaSound.pause();
    this.musicaSound.currentTime = 0;
    this.musicaSound.play();
  }

}
