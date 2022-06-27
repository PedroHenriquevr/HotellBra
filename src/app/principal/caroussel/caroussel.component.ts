import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from './../../services/photo-service.service';



@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})


export class CarousselComponent implements OnInit {

  images: any[] = [];

  constructor(private PhotoServiceService: PhotoServiceService) { }

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  ngOnInit() {
      this.PhotoServiceService.getImages().then(images => this.images = images);
  }

}
