import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: string, param:string): string {
    let result:string = "";
    if(param == "a"){
      result = `Mr.${value}`;
    } else if(param == "b"){
      result = `Ms.${value}`;
    } else {
      result = `${value} san`;
    }
    return result;
  }

}

// {{name|salutation:'a'}}