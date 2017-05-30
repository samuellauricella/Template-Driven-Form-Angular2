import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators,FormArray, FormBuilder, FormControl} from '@angular/forms'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  formErrors = {
    name:'',
    username:''
  }

  validationMessages = {
    name:{
      required: 'Name is required',
      minlength: 'Name must be 3 characters'
    },
    username: {
      required: 'Name is required',
      minlength: 'Name must be 3 characters'
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm()
  }

  buildForm(){
    this.form = this.fb.group({
      name: ['', Validators.minLength(3)],
      username: ['', Validators.minLength(3)],
      addresses: this.fb.array([
        this.fb.group({
          city:[''],
          country: ['']
        })
      ])
    });
    this.form.valueChanges.subscribe(data => this.validateForm());
  }

  validateForm(){
    for (let field in this.formErrors){
      this.formErrors[field]= '';
      let input = this.form.get(field);

      if (input.invalid && input.dirty){
        for(let error in input.errors){
          this.formErrors[field]= this.validationMessages[field][error];
        }
      }
    }
  }

  addAddress(){
    let addresses = <FormArray>this.form.get('addresses');
    addresses.push(this.fb.group({
      city:[''],
      country:['']
    }));
  }

  removeAddress(i){
    let addresses = <FormArray> this.form.get('addresses');
    addresses.removeAt(i);
  }

  processForm(){
    console.log(this.form.value)
  }
}
