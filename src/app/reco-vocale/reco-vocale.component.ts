import {Component, OnInit, Input} from '@angular/core';
import {RecoVocaleService} from "./reco-vocale.service";
import {VocaleSoundService} from "../vocale/vocale-sound.service";
import {TodoList} from "../NF/todo-list";
import {TodoListService} from "../NF/todo-list.service";

@Component({
  selector: 'app-reco-vocale',
  templateUrl: './reco-vocale.component.html',
  styleUrls: ['./reco-vocale.component.css'],
  providers: [RecoVocaleService, VocaleSoundService]

})
export class RecoVocaleComponent implements OnInit {

  @Input('nf') nf: TodoList;
  private choses: any;

  constructor(private sound: VocaleSoundService, private recoVocaleService: RecoVocaleService, private todoListService: TodoListService) {
  }

  ngOnInit() {
    this.todoListService.getData().then((nf) => {
      this.nf = nf;
      this.choses = nf.choses;
    });
  }

  ngOnDestroy() {
    this.recoVocaleService.DestroySpeechObject();
  }

  // Méthode pour la reconnaissance vocale par mot clés (ajoutes,supprimer, modifier, lire )
  speechRecognition() {
    this.sound.speech("Votre tout doux liste vous écoute");
    this.recoVocaleService.record().subscribe(   // on fait appelle à la méthode record du recoVocaleService qui retourne un observable sur lequel on applique la méthode subscribe
      (value) => {
        console.log(value);
        if (value === "ajouter une tâche") {             // pour ajouter une tâche
          this.recoVocaleService.DestroySpeechObject();
          this.ajouterUneTache();
        } else if (value === "supprimer une tâche") {   // pour supprimer une tâche
          this.recoVocaleService.DestroySpeechObject();
          this.supprimerUneTache();
        } else if (value === "modifier une tâche") {    // pour modifier une tâche
          this.recoVocaleService.DestroySpeechObject();
          this.modifierUneTache();
        } else if (value === "tâches réstantes") {      // pour lire les tâches réstantes
          this.recoVocaleService.DestroySpeechObject();
          let count = this.choses.reduce((acc, chose) => {
            return acc + (chose.fait ? 0 : 1);
          }, 0);
          this.sound.speech("il vous reste " + count + "tâches à faire");
        } else if (value === "tâches réstantes") {
          this.sound.speech("Alors il vous reste à faire");
          this.choses.forEach((chose, i) => {
            if (!chose.fait) {
              this.sound.speech(chose.texte);
            }
          });
          console.log("esle if");
        } else if (value === "valider toutes les tâches") {
          this.choses.forEach((chose, i) => {
            chose.Fait(true);
          });
        } else if (value === "lire toutes les tâches") {
          this.choses.forEach((chose, i) => {
            this.sound.speech(chose.texte);
          });
        } else if (value === "supprimer les tâches effectuées") {
          this.choses.forEach((chose, i) => {
            if (chose.fait) {
              chose.dispose();
            }
          });
          this.sound.speech("tâches nettoyées");
        } else {
          this.sound.speech("Je n'ai pas compris, veuillez répétez s'il vous plait? ");
          this.recoVocaleService.DestroySpeechObject();
        }
      }
    );
  }

    ajouterUneTache()
    {
      this.sound.speech("C'est parti !");
      this.recoVocaleService.record().subscribe(
        (value) => {
          this.nf.Ajouter(value);
          this.recoVocaleService.DestroySpeechObject();
          this.sound.speech(value + " à été ajoutée");
        }
      );
    }

    supprimerUneTache()
    {
      this.sound.speech("Laquelle ?");
      this.recoVocaleService.record().subscribe(
        (value) => {
          this.choses.forEach((chose, i) => {
            if (chose.texte === value) {
              this.recoVocaleService.DestroySpeechObject();
              this.sound.speech("Suppression de : " + value);
              chose.dispose();
            }
          });
          if (value === "annuler") {
            this.recoVocaleService.DestroySpeechObject();
            this.sound.speech("Okay on annule");
          }
        }
      );
    }

    modifierUneTache()
    {
      this.sound.speech("Laquelle ?");
      this.recoVocaleService.record().subscribe(
        (value) => {
          this.choses.forEach((chose, i) => {
            if (chose.texte === value) {
              this.recoVocaleService.DestroySpeechObject();
              this.sound.speech("Okay j'écoutes : ");
              this.recoVocaleService.record().subscribe(
                (value) => {
                  chose.Texte(value);
                  this.recoVocaleService.DestroySpeechObject();
                  this.sound.speech("Modification Effectuée");
                });
            }
          });
          if (value === "annuler") {
            this.recoVocaleService.DestroySpeechObject();
            this.sound.speech("Okay on annule");
          }
        }
      );
    }

  }

