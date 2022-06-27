import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  styles: [`
        :host ::ng-deep button {
            margin-right: .5em;
        }
    `]
})
export class SearchComponent implements OnInit {

  loading = [false, false, false, false]




  date1: Date = new Date;
  date2: Date = new Date;

  value20: number = 0;
  value21: number = 0;



  disabled: boolean = true;
  value5: any = 0;

  pt: any;

  constructor(private primengConfig: PrimeNGConfig) {


   }

   checarData(){
    if(this.date1 != null && this.date2 != null){
      var  df = this.date2.getTime() - this.date1.getTime();
      var dias = Math.ceil(df / (1000 * 3600 * 24));
      console.log(this.date1.getDate(), this.date2.getDate())
      console.log(dias);
      if(dias > 0){
      this.value5 = dias;
    }else{
      this.value5 = 'Erro';
    }
    }
   }
   load(index: number) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
}
  ngOnInit(): void {
    this.pt = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","segunda","terça","quarta","quinta","sexta","sabado" ],
      dayNamesShort: [ "dom","seg","ter","qua","qui","sex","sab" ],
      dayNamesMin: [ "D","S","T","Q","Q","S","S" ],
      monthNames: [ "janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro" ],
      monthNamesShort: [ "jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez" ],
  }

    this.primengConfig.ripple = true;
  }

}
