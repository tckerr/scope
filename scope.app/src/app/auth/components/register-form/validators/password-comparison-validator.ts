import {FormGroup, ValidatorFn} from '@angular/forms';

export function passwordComparisonValidator(field1: string, field2: string): ValidatorFn {
    return (formGroup: FormGroup): { [key: string]: any } => {
        const value1 = formGroup.controls[field1].value;
        const value2 = formGroup.controls[field2].value;
        if (value1 === value2 || !value1 || !value2) {
            return null;
        }
        return { passwordComparison: 'Passwords do not match'};
    };
}
