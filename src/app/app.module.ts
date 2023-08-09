import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { CarouselItemsComponent } from './components/carousel-items/carousel-items.component';
import { AmountBoxComponent } from './components/amount-box/amount-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SvgComponentsModule } from './svg-components/svg-components.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardBoxComponent,
    CarouselItemsComponent,
    AmountBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
		SvgComponentsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
