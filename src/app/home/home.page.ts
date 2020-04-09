import { Component } from '@angular/core';
import { ApiAuthService } from '../services/api-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private apiAuth: ApiAuthService) {}

  ngOnInit() {
    this.apiAuth.getDynamicUrl('assets/data/news-info.json')
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

}
