import { Component } from '@angular/core';
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {BioComponent} from "../portfolio/bio/bio.component";
import {SkillsComponent} from "../portfolio/skills/skills.component";
import {ContactComponent} from "../portfolio/contact/contact.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  constructor(private bottomSheet:MatBottomSheet) {}
  title = 'Muhammad Osama Iftikhar';

  openBio(){
    this.bottomSheet.open(BioComponent)
  }
  openSkills(){
    this.bottomSheet.open(SkillsComponent)
  }

  openSocialLink(){
    this.bottomSheet.open(ContactComponent)
  }
}
