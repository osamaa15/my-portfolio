import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import {FeaturesModule} from "../features/features.module";
import {MatBottomSheet, MatBottomSheetModule} from "@angular/material/bottom-sheet";


@NgModule({
  declarations: [
    IndexComponent
  ],
    imports: [
        CommonModule,
        IndexRoutingModule,
        FeaturesModule,
      MatBottomSheetModule
    ]
})
export class IndexModule { }
