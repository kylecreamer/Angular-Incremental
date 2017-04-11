interface clickerJson {
  name: string;
  rate: number;
}


export class Clicker {
  private  name: string;
  private  rate: number;

    constructor(name: string, rate: number){
      this.name = name;
      this.rate = rate;
    }

    public increment(toIncrement: number){
      this.rate += toIncrement;

    }

    public decrement(toDecrement: number){
      this.rate -= toDecrement;
    }
}
