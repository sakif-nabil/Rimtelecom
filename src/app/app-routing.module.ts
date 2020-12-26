import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { GeolocalisationComponent } from './geolocalisation/geolocalisation.component';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';
import { SupportComponent } from './support/support.component';
import { TestComponent } from './test/test.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'geolocal', component:GeolocalisationComponent},
  {path:'job', component:JobComponent},
  {path:'support', component:SupportComponent},
  {path:'contact', component:ContactComponent},
  {path:'plateformes', component:ToolsComponent},
 
  {path:'test', component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
