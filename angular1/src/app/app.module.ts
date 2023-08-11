import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstNameComponent } from './first-name/first-name.component';
import { FlaxComponent } from './flax/flax.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { ResturantdashComponent } from './resturantdash/resturantdash.component';
import { NgifComponent } from './ngif/ngif.component';
import { InlinecomponentComponent } from './inlinecomponent/inlinecomponent.component';
import { InlinewithbothComponent } from './inlinewithboth/inlinewithboth.component';
import { Viewincapsulationtest1Component } from './viewincapsulationtest1/viewincapsulationtest1.component';
import { Viewincapluation2Component } from './viewincapluation2/viewincapluation2.component';
import { ShadowComponent } from './shadow/shadow.component';
import { Shadow2Component } from './shadow2/shadow2.component';
import { RedcolorelDirective } from './redcolorel.directive';
import { CustompipePipe } from './custompipe.pipe';

import { AddserviceService } from './addservice.service';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';

import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { JoinnowComponent } from './joinnow/joinnow.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';

import { WeatherWidthMainComponent } from './weather-width-main/weather-width-main.component';
import { Weather2Component } from './weather2/weather2.component';
import { WeatherService } from './weather.service';
import { TodayworksComponent } from './todayworks/todayworks.component';

import { GooglemapComponent } from './googlemap/googlemap.component';
import { SpringprojComponent } from './springproj/springproj.component';
import { SpringEmployeeListComponent } from './spring-employee-list/spring-employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdatespringcompComponent } from './updatespringcomp/updatespringcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstNameComponent,
    FlaxComponent,
    DatabindingComponent,
    InputComponent,
    ResturantdashComponent,
    NgifComponent,
    InlinecomponentComponent,
    InlinewithbothComponent,
    Viewincapsulationtest1Component,
    Viewincapluation2Component,
    ShadowComponent,
    Shadow2Component,
    RedcolorelDirective,
    CustompipePipe,
    ReactiveformsComponent,
    PortfolioComponent,
    HomeComponent,
    CourseComponent,
    AboutComponent,
    JoinnowComponent,
    PagenotfoundComponent,
    PagesComponent,
    MediaComponent,
    WeatherWidthMainComponent,
    Weather2Component,
    TodayworksComponent,
    GooglemapComponent,
    SpringprojComponent,
    SpringEmployeeListComponent,
    AddEmployeeComponent,
    UpdatespringcompComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AddserviceService, WeatherService],

  bootstrap: [AppComponent],
})
export class AppModule {}
function importScripts(arg0: string) {
  throw new Error('Function not implemented.');
}
