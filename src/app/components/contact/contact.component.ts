import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private validators: ValidatorsService) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.form = this.formBuilder.group({
      name    : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      email   : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      message : ['', [Validators.required]],
      result  : ['', [Validators.required, this.validators.noResult]]
    });
  }

  guardar(){
    if (this.form.invalid) {
      Object.values( this.form.controls).forEach( control =>{
        control.markAsTouched();
      });
      return;
    }

    //ToDo: Post email, Service

    this.form.reset();
  }

  get nameNotValid(){
    return this.form.get('name').invalid && this.form.get('name').touched;
  }
  get emailNotValid(){
    return this.form.get('email').invalid && this.form.get('email').touched;
  }
  get messageNotValid(){
    return this.form.get('message').invalid && this.form.get('message').touched;
  }
  get resultNotValid(){
    return this.form.get('result').invalid && this.form.get('result').touched;
  }

}
