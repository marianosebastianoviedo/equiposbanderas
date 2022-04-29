import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equiponegro',
  templateUrl: './equiponegro.component.html',
  styleUrls: ['./equiponegro.component.scss']
})
export class EquiponegroComponent implements OnInit {
  audio:any;
  constructor() { }

  ngOnInit(): void {
    this.playAudio('negrowin.mp3',0.5);
  }
  playAudio(sonido:string, vol:number){
    this.audio = new Audio();
    this.audio.src = `./assets/effects/${sonido}`;
    this.audio.volume = vol;
    this.audio.load();
    this.audio.play();    
  }
}
