import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }
  url1 = 'assets/img/photo1.png';
  url2 = 'assets/img/photo2.png';
  url3 = 'assets/img/photo3.png';
  url4 = 'assets/img/photo4.png';
  url5 = 'assets/img/photo5.png';
  url6 = 'assets/img/photo6.png';
  url7 = 'assets/img/photo7.png';
  url8 = 'assets/img/photo8.png';
  url9 = 'assets/img/photo9.png';

  ngOnInit(): void {
  }

  getPhotos(num: number): any{
    const photos = [];
    for (let i = 1; i < 10 ; i++)  {
      photos.push(`assets/img/photo${i}.png`);
    }
    return photos[num];
  }
}
