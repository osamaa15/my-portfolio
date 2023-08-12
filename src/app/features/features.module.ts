import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        ToolbarComponent
    ],
    exports: [
        ToolbarComponent
    ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatBadgeModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class FeaturesModule { }
