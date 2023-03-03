import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseGiuridica } from './base.model';

@Component({
  selector: 'app-base-giuridica',
  templateUrl: './base-giuridica.component.html',
  styleUrls: ['./base-giuridica.component.scss']
})
export class BaseGiuridicaComponent implements OnInit {

  messaggio: string = 'pippo';

  form = this.fb.group({
    nome:['',{
      validators:[Validators.required],
      updateOn: 'blur'
    }],
    cognome: ['', Validators.required],
    codiceFiscale:['', Validators.required],
    denominazione:['', Validators.required],
    partitaIva:['', Validators.required],
    giuridicaOpt:['1', Validators.required]
  })

  constructor(private fb: FormBuilder){}

 ngOnInit() {

  
  }
  
}
