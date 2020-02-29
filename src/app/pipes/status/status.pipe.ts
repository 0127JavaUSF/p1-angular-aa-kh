import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any): any {
    
    let status;

    switch(value){
      case 1: status = "Pending"; break;
      case 2: status = "Approved"; break;
      case 3: status = "Denied"; break;
    }
    
    return status;
  }

}
