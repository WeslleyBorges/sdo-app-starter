import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'mt-avanco',
  templateUrl: './avanco.component.html'
})
export class AvancoComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  avancoObraForm: FormGroup;

  ngOnInit() {
    this.avancoObraForm = this.fb.group({
      numeroObra: this.fb.control('', [Validators.required]),
      subObra: this.fb.control('', [Validators.required]),
      processo: this.fb.control('', [Validators.required]),
      data: this.fb.control('', [Validators.required]),
      hora: this.fb.control('', [Validators.required]),
      statusObra: this.fb.control('', [Validators.required]),
      turno: this.fb.control('', [Validators.required])
    })
  }

}
