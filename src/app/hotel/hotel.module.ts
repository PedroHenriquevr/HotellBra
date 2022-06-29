import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { ListaComponent } from './lista/lista.component';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [ListaComponent],
  imports: [CommonModule, HotelRoutingModule, ImageModule],
})
export class HotelModule {}
