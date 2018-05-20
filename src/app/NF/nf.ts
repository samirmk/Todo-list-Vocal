export type NFCallback = (nf: NF, eventName: string, value: any) => void;
export class NF {
  private cbList: Map<string, NFCallback[]>;

  constructor() {
    this.cbList = new Map<string, NFCallback[]>();
  }

  emit(eventName: string, value: any): this {
    if (this.cbList.has(eventName)) {
      const array = this.cbList.get(eventName);
      array.forEach( cb => cb(this, eventName, value));
    }
    return this;
  }

  on(eventName: string, cb: NFCallback): this {
    if (this.cbList.has(eventName)) {
      const array: NFCallback[] = this.cbList.get(eventName);
      array.push(cb);
    } else {
      this.cbList.set(eventName, [cb]);
    }
    return this;
  }

  off(eventName: string, cb: NFCallback): this {
    if (this.cbList.has(eventName)) {
      const array = this.cbList.get(eventName);
      array.splice(array.indexOf(cb), 1);
    }
    return this;
  }
}
