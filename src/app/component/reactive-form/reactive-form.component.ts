import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
   nome = new FormControl('', [Validators.required,
     Validators.maxLength(10), Validators.pattern('')]);
   eta = new FormControl(57);
   paese = new FormControl({value:'Italia', disabled: true})

 utenteForm =new FormGroup({
   nome: new FormControl('Gianni', Validators.maxLength(10)),
   cognome: new FormControl('Izzo'),
   eta: new FormControl(27),
   citta: new FormControl('Roma'),
   paese: new FormControl('Italia')


 }) 
 constructor() { }
 get c(){
   return this.utenteForm.controls;
 }
  ngOnInit(): void {
  }
 setName(){
   this.nome.setValue('Nirmalie');
   this.paese.enable();
 }
 setResetName(){
   this.nome.reset();
   this.paese.disable();
 }
 onFormSubmit(){
   console.log('Nome:' + this.utenteForm.get('nome').value);
   console.log('Cognome:' + this.utenteForm.get('cognome').value);
   console.log('Eta:' + this.utenteForm.get('eta').value);
   console.log('Citta:' + this.utenteForm.get('citta').value);
   console.log('Paese:' + this.utenteForm.get('paese').value);
 };
 }

