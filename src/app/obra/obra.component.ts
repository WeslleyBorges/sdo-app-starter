import { Component, OnInit } from '@angular/core';
import { Obra } from './obra.model';

@Component({
  selector: 'mt-obra',
  templateUrl: './obra.component.html'
})
export class ObraComponent implements OnInit {

  porcentHora: number = 25.0
  valorObraHora: number = 10000

  constructor() { }

  ngOnInit() {
  }

}
