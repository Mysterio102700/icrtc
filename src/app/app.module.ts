import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ChiefPatronsComponent } from './Comittee/chief-patrons/chief-patrons.component';
import { PatronsComponent } from './Comittee/patrons/patrons.component';
import { AdvisoryCommitteeComponent } from './Comittee/advisory-committee/advisory-committee.component';
import { TechnicalCommitteeComponent } from './Comittee/technical-committee/technical-committee.component';
import { OrganizingCommitteeComponent } from './Comittee/organizing-committee/organizing-committee.component';
import { PublicationsComponent } from './publications/publications.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { SubmissionComponent } from './submission/submission.component';
import { ReviewingCommitteeComponent } from './Comittee/reviewing-committee/reviewing-committee.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChiefPatronsComponent,
    PatronsComponent,
    AdvisoryCommitteeComponent,
    TechnicalCommitteeComponent,
    OrganizingCommitteeComponent,
    PublicationsComponent,
    RegistrationComponent,
    ContactComponent,
    SubmissionComponent,
    ReviewingCommitteeComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
