import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleriaModule} from 'primeng/galleria';
import { HeaderComponent } from './header/header.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {FormsModule} from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {SidebarModule} from 'primeng/sidebar';



@NgModule({
  declarations: [
    HeaderComponent,
    CarousselComponent,
    SearchComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    CarousselComponent,
    SearchComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    InputNumberModule,
    ButtonModule,
    RippleModule,
    SidebarModule
  ]
})
export class PrincipalModule {

}
