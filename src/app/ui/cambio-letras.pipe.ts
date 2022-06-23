import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/a|e|i|o|u/gi, function (x) {
      if     (x=='a'){return '4';}
      else if(x=='e'){return '3'}
      else if(x=='i'){return '1'}
      else if(x=='o'){return '0'}
      else if(x=='u'){return '9'}
      else{
        return x
      }
    });
  }

}
