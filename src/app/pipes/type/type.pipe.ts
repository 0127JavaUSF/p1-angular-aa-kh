import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: any): any {
    let type;

    switch(value){
      case 1: type = "Lodging"; break;
      case 2: type = "Travel"; break;
      case 3: type = "Food"; break;
      case 4: type = "Other"; break;
    }

    return type;
  }

}
