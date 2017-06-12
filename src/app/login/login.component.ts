import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CustomValidator } from '../common/customValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginFormModel: FormGroup;
  public submitted: Boolean = false;

  public constructor(
    private _fb: FormBuilder,
    private _customValidator: CustomValidator
  ) { }

  public ngOnInit(): void {
    this.loginFormModel = this._fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this._customValidator.passwordValidator]]
    });
    console.log(this.loginFormModel);
  }

  public onSubmit (): void {
    this.submitted = true;
    console.log(this.loginFormModel);
  }

  public checkValidation(control: FormControl): Boolean {
    return control.invalid && (control.dirty || control.touched || this.submitted);
  }

}
