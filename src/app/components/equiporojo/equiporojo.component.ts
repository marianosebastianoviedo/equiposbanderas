import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equiporojo',
  templateUrl: './equiporojo.component.html',
  styleUrls: ['./equiporojo.component.scss']
})
export class EquiporojoComponent implements OnInit {
  audio:any;
  constructor() { }

  ngOnInit(): void {
    this.playAudio('rojowin.mp3',0.5);
  }
  playAudio(sonido:string, vol:number){
    this.audio = new Audio();
    this.audio.src = `./assets/effects/${sonido}`;
    this.audio.volume = vol;
    this.audio.load();
    this.audio.play();    
  }
}
