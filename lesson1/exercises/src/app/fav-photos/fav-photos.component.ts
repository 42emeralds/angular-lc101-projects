import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Good on the Ol' Eyeballs";
  image1 = 'https://imgix.bustle.com/rehost/2016/9/13/e3960346-c134-4021-a5d0-db4a2165e795.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70';
  image2 = 'https://uak14axc90-flywheel.netdna-ssl.com/wp-content/uploads/2016/01/Jane-Eyre15.jpg';
  image3 = 'https://shawglobalnews.files.wordpress.com/2019/08/425511.jpg?quality=70&strip=all';

  constructor() { }

  ngOnInit() {
  }

}