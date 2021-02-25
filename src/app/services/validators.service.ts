import { Injectable } from '@angular/core';
import { FormControl} from '@angular/forms';

interface ErrorValidate{
  [s: string]:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  noResult(control: FormControl): ErrorValidate{

    if (control.value  !== 100 ) {
      
      return {
        noResult: true
      };

    }

    return null;
  }
}
