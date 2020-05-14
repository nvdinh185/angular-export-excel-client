import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  constructor() { }

  delay(milisecond, data?) {
    return new Promise<any>((resolve, reject) => {
      let startTime = Date.now();
      let intervalObj = setInterval(() => {
        // console.log('ktra', data);
        if ((data && data.length) || (Date.now() - startTime > milisecond)) {
          resolve()
          clearInterval(intervalObj);
          intervalObj = null;
        }
      }, 1000)
    })
  }
}
