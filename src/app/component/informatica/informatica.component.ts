import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informatica',
  templateUrl: './informatica.component.html',
  styleUrls: ['./informatica.component.css']
})
export class InformaticaComponent implements OnInit {
  testo1: string ="testo di prova"
  testo2: number = 2;
  astuccio:string;
  controllo:boolean;
  idTesto: number;
  descrizioneTesto:string;
   myArr = [
    {id: '1',
     descrizione: 'test1'
    },
    {id: '2',
     descrizione: 'test2'
    },
   ];
    testArr = [
    {id: '1',
     description: 'Angular'
    },
    {id: '2',
    description: 'React'
   },
   {id: '1',
   description: 'Java Script'
   },
    {id: '1',
   description: 'Html'
   }
  ];
  arrProva= [
    {id: '1', 
    descrizione: "hello world", 
    language: "English"
  }
  ]
  constructor() { }

  ngOnInit(): void {
    this.testo1 = "lorum ipsum";
    //this.classeDemo();
    this.controllo=false;
    console.log(this.myArr)
  }
  classeDemo(){
    this.testo2 = 3
  }
  caricaAstuccio(){
    this.astuccio= "mattite";
    this.controllo= true;
  }
  addItems(){
    this.arrProva.push({id:'2', descrizione: 'ciao mondo', language: "Italiano"} )
  }
  verificaId(element:number){
     console.log(element,'id')
  }
  verificaTesto(element:string){
    console.log(element, 'testo')
  }

}

