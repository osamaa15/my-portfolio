import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { BioComponent } from './bio/bio.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    BioComponent,
    SkillsComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    CdkDropList,
    CdkDropList,
    CdkDrag,
    MatIconModule,
    MatTabsModule
  ]
})
export class PortfolioModule { }
