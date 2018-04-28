import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';


export function passwordComparisonValidator(password: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const repeat = control.value;
        if (password === repeat || !password || !repeat) {
            return null;
        }
        return { appPasswordComparison: 'Passwords do not match'};
    };
}

@Directive({
    selector: '[appPasswordComparison]',
    providers: [{provide: NG_VALIDATORS, useExisting: PasswordComparisonValidatorDirective, multi: true}]
})
export class PasswordComparisonValidatorDirective implements Validator {
    @Input('sourcePassword') password: string;

    validate(control: AbstractControl): { [key: string]: any } {
        // console.log('Testing', control.value, 'against', this.password);
        return this.password ? passwordComparisonValidator(this.password)(control)
            : null;
    }
}
