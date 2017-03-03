import { RandomNumber } from './RandomNumber';
import { Identification } from './Identification';
import { SystemMessage } from './SystemMessage';
import { BarGraph } from './BarGraph';

export class Visuals {
  constructor(p){
    this.p = p;
    this.random_number = new RandomNumber(this.p);
    this.identification = new Identification(this.p);
    this.system_message = new SystemMessage(this.p);
    this.bar_graph = new BarGraph(this.p);
  }

  disp(){
    this.random_number.disp();
    this.identification.disp();
    this.system_message.disp();
    this.bar_graph.disp();
  }

  set_sysmsg(str){
    this.system_message.set(str);
  }
}
