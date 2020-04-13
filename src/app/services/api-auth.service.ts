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
  getDynamicUrl(url: string) {
    return this.httpClient.get(url)
      .toPromise()
      .then(data => {
        let rtn: any = data;
        return rtn;
      });
  }
}
