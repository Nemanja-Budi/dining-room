import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RestoranListComponent } from './components/core/restoran-list/restoran-list.component';
import { HomeComponent } from './components/core/home/home.component';
import { AboutComponent } from './components/core/about/about.component';
import { PaganationComponent } from './components/core/restoran-list/paganation/paganation.component';
import { PriceRangeComponent } from './components/core/restoran-list/price-range/price-range.component';
import { RestoranItemComponent } from './components/core/restoran-list/restoran-item/restoran-item.component';
import { ModalModule } from './components/core/restoran-list/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    RestoranListComponent,
    HomeComponent,
    AboutComponent,
    PaganationComponent,
    PriceRangeComponent,
    RestoranItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
