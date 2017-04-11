interface tickerJson {
  name: string;
  count: number;
}

export class Ticker {
  private  name: string;
  private  count: number;

    constructor(name: string, count: number){
      this.name = name;
      this.count = count;
    }

    public increment(toIncrement: number){
      this.count += toIncrement;

    }
    public decrement(toDecrement: number){
      this.count -= toDecrement;
    }
}
