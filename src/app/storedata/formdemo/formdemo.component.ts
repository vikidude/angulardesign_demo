import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';


function ageRangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
          return { 'ageRange': true };
      }
      return null;
  };
}

@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.css']
})
export class FormdemoComponent implements OnInit {

  form: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group( {
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required ]),
      password : new FormControl('', [Validators.required, Validators.minLength(5)]),
      mobileNumber: new FormControl('', [Validators.required, Validators.min(10)]),
      age: new FormControl('', [Validators.required,ageRangeValidator(10,20)])
    })
  
  }
  onSubmit() {
    alert(JSON.stringify(this.form.value));
  }
  onReset() {
      this.form.reset();
  }

}
