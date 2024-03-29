import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdvisoryCommitteeComponent } from './Comittee/advisory-committee/advisory-committee.component';
import { TechnicalCommitteeComponent } from './Comittee/technical-committee/technical-committee.component';
import { ChiefPatronsComponent } from './Comittee/chief-patrons/chief-patrons.component';
import { PatronsComponent } from './Comittee/patrons/patrons.component';
import { OrganizingCommitteeComponent } from './Comittee/organizing-committee/organizing-committee.component';
import { PublicationsComponent } from './publications/publications.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { SubmissionComponent } from './submission/submission.component';
import { ReviewingCommitteeComponent } from './Comittee/reviewing-committee/reviewing-committee.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'ReviewingCommittee',component:ReviewingCommitteeComponent},
  {path:'AdvisoryCommittee',component:AdvisoryCommitteeComponent},
  {path:'TechnicalCommittee',component:TechnicalCommitteeComponent},
  {path:'ChiefPatrons',component:ChiefPatronsComponent},
  {path:'Patrons',component:PatronsComponent},
  {path:'OrganizingCommittee',component:OrganizingCommitteeComponent},
  {path:'Publications',component:PublicationsComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'ContactUs',component:ContactComponent},
  {path:'Submission',component:SubmissionComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
