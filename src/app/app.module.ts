import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { InnerSampleComponent } from './sample/inner-sample.component';
import { LilsamComponent } from './sample/lilsam.component';
import { InLilSamComponent } from './sample/in-lil-sam.component';
import { BannerComponent } from './banner/banner.component';
import { MyNavComponent } from './banner/my-nav.component';
import { JumboComponent } from './banner/jumbo.component';
import { InfoComponent } from './banner/info.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CustomAttrComponent } from './databinding/custom-attr/custom-attr.component';
import { InterComponentComponent } from './databinding/inter-component/inter-component.component';
import { CardColorPickerComponent } from './databinding/inter-component/card-color-picker.component';
import { CardMakerComponent } from './databinding/inter-component/card-maker.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { LocalRefsComponent } from './local-refs/local-refs.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { AlertDirective } from './directives/alert.directive';
import { NavBarComponent } from './directives/nav-bar/nav-bar.component';
import { DropdownDirective } from './directives/nav-bar/dropdown.directive';

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
    InfoComponent,
    DatabindingComponent,
    CustomAttrComponent,
    InterComponentComponent,
    CardColorPickerComponent,
    CardMakerComponent,
    ContentProjectionComponent,
    LocalRefsComponent,
    LifeCycleComponent,
    DirectivesComponent,
    AlertDirective,
    NavBarComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
