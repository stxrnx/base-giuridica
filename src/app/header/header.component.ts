import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

anagrafica = this.fb.group({

  mestiere: this.fb.array([

  ]),
  denominazione: ['', {
    validators:[Validators.required],
    updateOn:'blur'
  }],
  partitaIva:['', {
    validators:[Validators.required],
    updateOn:'blur'
  }],
  codiceFiscale:['', {
    validators:[Validators.required],
    updateOn:'blur'
  }],
  comuneSede: this.fb.array([

  ]),
  provincia:['', {
    validators:[Validators.required],
    updateOn:'blur'
  }],
  cap:['', {
    validators:[Validators.required],
    updateOn:'blur'
  }],
  localitaEstera:['', {
    validators:[],
    updateOn:'blur'
  }],
  indirizzoLegale:['', {
    validators:[Validators.required],
    updateOn:'blur'
  }],
  civico:['', {
    validators:[Validators.required],
    updateOn:'blur'
  }],
  email:['', {
    validators:[Validators.required, Validators.email],
    updateOn:'blur'
  }],
  pec:['', {
    validators:[],
    updateOn:'blur'
  }],
  telefono:['', {
    validators:[],
    updateOn:'blur'
  }],
  fax:['', {
    validators:[Validators.required],
    updateOn:'blur'
  }],
})


  constructor(private fb: FormBuilder){}

}
