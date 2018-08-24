import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-obra-custo',
  templateUrl: './obra-custo.component.html'
})
export class ObraCustoComponent implements OnInit {

  @Input() porcentHora: number
  @Input() valorObraHora: number

  valorAcrescimo: number

  constructor() { }

  ngOnInit() {
  }

  AcrescimoPerc(): number{
    return (this.porcentHora * this.valorObraHora) / 100
  }

  total(): number{
      return this.AcrescimoPerc() + this.valorObraHora
  }

}