import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MenuComponent } from './menu/menu.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ResponsiveMenuComponent } from './responsive-menu/responsive-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    MenuComponent,
    ImprintComponent,
    DataProtectionComponent,
    FooterComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    ResponsiveMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
