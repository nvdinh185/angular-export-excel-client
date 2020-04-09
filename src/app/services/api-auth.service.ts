import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  constructor(private httpClient: HttpClient) { }

   /**
     * get url => req.paramS
     * @param url 
     * @param token 
     * @param options 
     */
    getDynamicUrl(url: string) {
      return this.httpClient.get(url)
          .toPromise()
          .then(data => {
              let rtn: any;
              rtn = data;
              return rtn;
          });
  }
}
