import {ValidatorFn} from '@angular/forms'

export function EmailValidtor(domains: string[]): ValidatorFn{
    const doms = domains.join("|")
    const regEx = new RegExp(`^[\w-\.]+@([\w-]+\.${doms})$`)
return(control) => {
    return control.value === '' || regEx.test(control.value) ? null : {EmailValidtor:true}
}
}