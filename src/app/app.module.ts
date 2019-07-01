import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BusMoveComponent } from './bus-move/bus-move.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    BusMoveComponent,
    ServicesComponent
  ],
  imports: [
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
