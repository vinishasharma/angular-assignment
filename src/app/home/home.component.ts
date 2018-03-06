import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.services';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private appService: AppService, private http: HttpClient) {
  }

  videoData = [];

  ngOnInit() {
   this.getObservableValue();
  }

  getObservableValue() {
    this.appService.getVideoLinks().subscribe((data: any) => {
        console.log('helo');
        this.videoData = data.items;
        console.log(JSON.stringify(data));
      },
      (err) => {
        this.videoData = err;
        console.log('error' + err);
      },
      () => {
        console.log('end');
      });
  }
}
