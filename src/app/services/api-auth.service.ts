import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  constructor(private httpClient: HttpClient) { }

  /**
    * get url
    * @param url 
    */
  getDynamicUrl(url: string, options?: any) {
    return this.httpClient.get(url, options)
      .toPromise()
      .then(data => {
        let rtn: any = data;
        return rtn;
      });
  }
}
