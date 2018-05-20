import { Component, OnInit,Input } from '@angular/core';
import {VocaleSoundService} from './vocale-sound.service';

@Component({
  selector: 'app-vocale',
  templateUrl: './vocale.component.html',
  styleUrls: ['./vocale.component.css'],
  providers: [VocaleSoundService]

})
export class VocaleComponent implements OnInit {

  @Input ('choseTexte') choseTexte: String;

  constructor(private vocaleSoundService: VocaleSoundService) { }

  ngOnInit() {
  }

  speechSynthesis(){
    let str: string = String(this.choseTexte);

    this.vocaleSoundService.speech(str); // faire appelle à la méthode speech du service VocaleSoundService en prenant en paramètre le texte de que le user à pronancé
  }

}
