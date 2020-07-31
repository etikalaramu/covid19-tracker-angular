import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidService } from './covid.service';
import { HttpClientModule } from '@angular/common/http';
import { TotalComponent } from './total/total.component';
import { AndhrapradeshComponent } from './andhrapradesh/andhrapradesh.component';
import { AssamComponent } from './assam/assam.component';
import { BiharComponent } from './bihar/bihar.component';
import { ChattisgarhComponent } from './chattisgarh/chattisgarh.component';
import { DelhiComponent } from './delhi/delhi.component';
import { GoaComponent } from './goa/goa.component';
import { GujarathComponent } from './gujarath/gujarath.component';
import { HaryanaComponent } from './haryana/haryana.component';
import { JammuKashmirComponent } from './jammu-kashmir/jammu-kashmir.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { KeralaComponent } from './kerala/kerala.component';
import { MadhyaPradeshComponent } from './madhya-pradesh/madhya-pradesh.component';
import { MaharashtraComponent } from './maharashtra/maharashtra.component';
import { OdishaComponent } from './odisha/odisha.component';
import { PunjabComponent } from './punjab/punjab.component';
import { RajasthanComponent } from './rajasthan/rajasthan.component';
import { TelanganaComponent } from './telangana/telangana.component';
import { TamilNaduComponent } from './tamil-nadu/tamil-nadu.component';
import { UttarPradeshComponent } from './uttar-pradesh/uttar-pradesh.component';
import { WestBengalComponent } from './west-bengal/west-bengal.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalComponent,
    AndhrapradeshComponent,
    AssamComponent,
    BiharComponent,
    ChattisgarhComponent,
    DelhiComponent,
    GoaComponent,
    GujarathComponent,
    HaryanaComponent,
    JammuKashmirComponent,
    KarnatakaComponent,
    KeralaComponent,
    MadhyaPradeshComponent,
    MaharashtraComponent,
    OdishaComponent,
    PunjabComponent,
    RajasthanComponent,
    TelanganaComponent,
    TamilNaduComponent,
    UttarPradeshComponent,
    WestBengalComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CovidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
