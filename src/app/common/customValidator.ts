/**
 * Created by sergio on 6/11/17.
 */
import { FormControl } from '@angular/forms';


export class CustomValidator {
  public nameValidator(control: FormControl): { [key: string]: boolean } {
    const value: string = control.value || '';
    const valid: boolean = /^[a-zA-Z]*$/.test(value);
    return (valid ? null : { customValidation: true });
  }

  public passwordValidator(control: FormControl): { [key: string]: boolean } {
    const value: string = control.value || '';
    const valid: boolean = /^[a-zA-Z0-9]*$/.test(value);
    return (valid ? null : { passwordValidation: true });
  }
}
