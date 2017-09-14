import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { InnerSampleComponent } from './sample/inner-sample.component';
import { LilsamComponent } from './sample/lilsam.component';
import { InLilSamComponent } from './sample/in-lil-sam.component';
import { BannerComponent } from './banner/banner.component';
import { MyNavComponent } from './banner/my-nav.component';
import { JumboComponent } from './banner/jumbo.component';
import { InfoComponent } from './banner/info.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    InnerSampleComponent,
    LilsamComponent,
    InLilSamComponent,
    BannerComponent,
    MyNavComponent,
    JumboComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
