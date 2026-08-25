import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../component/navbar/navbar.component';
import { HeroComponent } from '../component/hero/hero.component';
import { AboutComponent } from '../component/about/about.component';
import { SkillsComponent } from '../component/skills/skills.component';
import { ExpirenceComponent } from '../component/expirence/expirence.component';
import { ProjectComponent } from '../component/project/project.component';
import { FooterComponent } from '../component/footer/footer.component';
import { EducationComponent } from '../component/education/education.component';
import { ContactComponent } from '../component/contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExpirenceComponent,
    ProjectComponent,
    FooterComponent,
    EducationComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }