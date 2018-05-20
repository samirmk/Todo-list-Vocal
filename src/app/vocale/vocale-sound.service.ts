import { Injectable } from '@angular/core';

@Injectable()
export class VocaleSoundService {

  constructor() { }

  speech(vocal :string){  // méthode speech qui la lance la reconnaissance vocale.
    let synth = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(vocal);
    if (!("webkitSpeechRecognition" in window)) {
      alert("Oooops !!!! Vous avez besoin d'un navigateur Google Chrome");
      console.log("c'est pas google chrome");
    }
    else{
      synth.speak(utterance);
      console.log("VocaleSoundService : " + vocal);
    }

  }
}
