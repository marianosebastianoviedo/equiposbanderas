import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public randomPais: number = 0;
  public pista: boolean = false;
  public respuesta: boolean = false;
  public pais: any = {};
  constructor(private spinner: NgxSpinnerService, public api:ApiService, private nav:Router) {
    this.pais = this.api.pais;
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
  comenzar(){
    this.nav.navigate(['equipos']);
  }
}
