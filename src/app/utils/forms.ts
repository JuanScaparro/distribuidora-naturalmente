import { FormGroup } from "@angular/forms"

export function hasFieldError( form: FormGroup, fieldName: string ): boolean {
  const hasError: boolean = 
                          form.controls[ fieldName ].dirty
                          && form.controls[ fieldName ].errors ? true : false
  return hasError
}