import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from '../../services/api.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public randomPais: number = 0;
  public pista: boolean = false;
  public respuesta: boolean = false;
  public paices: Array<any> = [];
  constructor(public api:ApiService, private nav:Router) {
    this.paices = this.api.dificil;
  }
  
  ngOnInit(): void {
  }
  getRandomInt() {
    this.randomPais = Math.floor(Math.random() * (251 - 0)) + 0;
    console.log(this.randomPais);
  }
  verPista(){
    this.pista = true;
  }
  verRespuesta(){
    this.respuesta = true;
  }
  facil(){
    localStorage.setItem('dificulty', 'facil')
    this.nav.navigate(['equipos']);
  }
  normal(){
    localStorage.setItem('dificulty', 'normal')
    this.nav.navigate(['equipos']);
  }
  dificil(){
    localStorage.setItem('dificulty', 'dificil')
    this.nav.navigate(['equipos']);
  }
}
