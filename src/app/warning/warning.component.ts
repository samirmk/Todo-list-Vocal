import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  texte : String = "Il faut que vous soyez connecté !!!"
  constructor() { }

  ngOnInit() {
  }

}
