import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { Todo } from './../NF/todo';

@Component({
  selector: 'app-chose',
  templateUrl: './chose.component.html',
  styleUrls: ['./chose.component.css']
})
export class ChoseComponent implements OnInit {

  @Input ('nf') nf: Todo;
  @ViewChild('newText') newTextInput: ElementRef;
  editing: boolean;

  constructor() {
    this.editing = false;
  }

  ngOnInit() {
  }

  dispose() {
    this.nf.dispose();
  }

  fait(fait: boolean) {
    this.nf.Fait(fait);
  }

  edit() {
    this.editing = true;
    requestAnimationFrame(() => {
      this.newTextInput.nativeElement.focus();
    });
  }

  setText(value) {
    this.nf.Texte(value);
    this.editing = false;
  }

}
