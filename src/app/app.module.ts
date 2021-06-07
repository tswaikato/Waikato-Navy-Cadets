import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { ContactComponent } from './contact/contact.component';
import { InfoBoxComponent } from './join/info-box/info-box.component';
import { InfoBoxImageComponent } from './join/info-box/info-box-image/info-box-image.component';
import { InfoBoxHeaderComponent } from './join/info-box/info-box-header/info-box-header.component';
import { InfoBoxTextComponent } from './join/info-box/info-box-text/info-box-text.component';
import { InfoBoxSubtextComponent } from './join/info-box/info-box-subtext/info-box-subtext.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    JoinComponent,
    ContactComponent,
    InfoBoxComponent,
    InfoBoxImageComponent,
    InfoBoxHeaderComponent,
    InfoBoxTextComponent,
    InfoBoxSubtextComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
