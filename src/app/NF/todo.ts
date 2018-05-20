import { NF } from './nf';
import { TodoList } from './todo-list';

export class Todo extends NF {
  readonly liste: TodoList;
  readonly date: Date;
  texte: string;
  fait: boolean;

  constructor(texte: string, liste: TodoList, fait: boolean = false, date: Date = null) {
    super();
    this.texte = texte;
    this.date = date || new Date(Date.now());
    this.fait = fait || false;
    this.liste = liste;
  }

  dispose() {
    this.liste.Retirer(this);
  }

  Texte(texte: string) {
    this.texte = texte;
    this.emit('update', {texte: texte});
    return this;
  }

  Fait(fait: boolean) {
    this.fait = fait;
    this.emit('update', {fait: fait});
    return this;
  }

  on(eventName: 'update', cb: NFTodoCallback): this {
    return super.on(eventName, cb);
  }

  off(eventName: 'update', cb: NFTodoCallback): this {
    return super.off(eventName, cb);
  }
}

export interface EventTodo {
  fait?: boolean;
  texte?: string;
}
export type TodoSerialization = Array<{texte: string, fait: boolean, date: string}>;

export type TodoFilter = (c: Todo) => boolean;

export type NFTodoCallback = (nf: Todo, eventName: string, value: EventTodo) => void;
