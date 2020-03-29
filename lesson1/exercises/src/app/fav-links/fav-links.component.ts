import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.sierraclub.org/sierra/tags/27037?utm_source=insider&utm_medium=email&utm_campaign=newsletter', 'https://stlcityrecycles.com/recycle-with-us/database/'];
  constructor() { }

  ngOnInit() {
  }

}
