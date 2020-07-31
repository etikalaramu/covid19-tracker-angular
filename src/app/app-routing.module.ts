import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { TamilNaduComponent } from './tamil-nadu/tamil-nadu.component';
import { TelanganaComponent } from './telangana/telangana.component';
import { UttarPradeshComponent } from './uttar-pradesh/uttar-pradesh.component';
import { WestBengalComponent } from './west-bengal/west-bengal.component';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
  { path: '' , component: TotalComponent},
  { path: 'summary' , component: SummaryComponent},
  { path: 'total' , component: TotalComponent},
  { path: 'andhrapradesh' , component: AndhrapradeshComponent},
  { path: 'assam' , component: AssamComponent},
  { path: 'bihar' , component: BiharComponent},
  { path: 'chattisgarh' , component: ChattisgarhComponent},
  { path: 'delhi' , component: DelhiComponent},
  { path: 'goa' , component: GoaComponent},
  { path: 'gujarath' , component: GujarathComponent},
  { path: 'haryana' , component: HaryanaComponent},
  { path: 'jammu-kashmir' , component: JammuKashmirComponent},
  { path: 'karnataka' , component: KarnatakaComponent},
  { path: 'kerala' , component: KeralaComponent},
  { path: 'madhya-pradesh' , component: MadhyaPradeshComponent},
  { path: 'maharashtra' , component: MaharashtraComponent},
  { path: 'odisha' , component: OdishaComponent},
  { path: 'punjab' , component: PunjabComponent},
  { path: 'rajasthan' , component: RajasthanComponent},
  { path: 'tamil-nadu' , component: TamilNaduComponent},
  { path: 'telangana' , component: TelanganaComponent},
  { path: 'uttar-pradesh' , component: UttarPradeshComponent},
  { path: 'west-bengal' , component: WestBengalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
