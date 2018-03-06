import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display-youtube',
  templateUrl: './display-youtube.component.html',
  styleUrls: ['./display-youtube.component.css']
})
export class DisplayYoutubeComponent implements OnInit {

  @Input() title = '';
  @Input() thumbnail = [];
  @Input() id = '';


  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log(this.title);
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }


}
