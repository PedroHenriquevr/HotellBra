import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from './../../services/photo-service.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  images: any[] = [];

  constructor(private PhotoServiceService: PhotoServiceService) {}

  ngOnInit(): void {
    this.PhotoServiceService.getImages().then(
      (images) => (this.images = images)
    );
  }
}
