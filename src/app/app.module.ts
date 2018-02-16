import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { PostComponent } from './post/post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';

import { CardService } from './Service/card.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    PostComponent,
    DashboardComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RoutingModule,
    ChartsModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
