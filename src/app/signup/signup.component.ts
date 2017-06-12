import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CustomValidator } from '../common/customValidator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupFormModel: FormGroup;
  public submitted: Boolean = false;

  public constructor(
    private _fb: FormBuilder,
    private _customValidator: CustomValidator
  ) {
  }

  public ngOnInit(): void {
    this.signupFormModel = this._fb.group({
        firstName: ['', [Validators.required, Validators.minLength(5), this._customValidator.nameValidator]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, this._customValidator.passwordValidator]]
      });
    console.log(this.signupFormModel);
  }

  public onSubmit (values: any): void {
    this.submitted = true;
    console.log(values);
  }

  public checkValidation(control: FormControl): Boolean {
    return control.invalid && (control.dirty || control.touched || this.submitted);
  }

}
