import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { TodoList } from './../NF/todo-list';
import { TodoListService } from './../NF/todo-list.service';
import { Todo } from './../NF/todo';
import { TodoFilter } from './../NF/todo';

@Component({
  selector: 'app-list-des-choses',
  templateUrl: './list-des-choses.component.html',
  styleUrls: ['./list-des-choses.component.css']
})
export class ListDesChosesComponent implements OnInit {

  @Input() title: string;
  @ViewChild('newTodo') newTodo: ElementRef;
  public nf: TodoList;
  private choses: Todo[];
  toggle: boolean;
  filterAll: TodoFilter;
  filterCompleted: TodoFilter;
  filterActives: TodoFilter;
  currentFilter: TodoFilter;

  constructor (private todoListService: TodoListService) {
    this.choses = [];
    this.toggle = false;
    this.filterAll = () => true;
    this.filterCompleted = (c) => c.fait;
    this.filterActives = (c) => !c.fait;
    this.currentFilter = this.filterAll;
  }

  ngOnInit() {
    this.todoListService.getData().then((nf) => {
      this.nf = nf;
      this.choses = nf.choses;
    });
  }

  getChoses(): Todo[] {
    return this.choses.filter(this.currentFilter);
  }

  getCountTodo() {
    return this.choses.reduce((acc, chose) => {
      return acc + (chose.fait ? 0 : 1);
    }, 0);
  }

  getCountCompleted() {
    return this.choses.reduce((acc, chose) => {
      return acc + (chose.fait ? 1 : 0);
    }, 0);
  }

  disposeAll() {
    return this.choses.filter(this.filterCompleted).forEach(c => c.dispose());
  }

  addTodo() {
    this.nf.Ajouter(this.newTodo.nativeElement.value);
    this.newTodo.nativeElement.value="";
  }

  toggleAllChange() {
    const check = !this.toggleAll();
    this.choses.forEach((c) => c.Fait(check));
  }

  toggleAll(): boolean {
    return this.choses.reduce((acc, c) => acc && c.fait, true);
  }

}
