import { Component, OnInit } from '@angular/core';

import { UserApiService } from './services/user-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor (private userThang: UserApiService) { }

  ngOnInit() {
    this.userThang.getCheckLogin()
    // no ".then(() => {??})" because "getCheckLogin()"
    // already has the ".then()" that what we need
    .catch((err) => {
       alert('Sorry Something is wrong here!!!...')
    })
  }
}
