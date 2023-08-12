import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface skills {
  name: string;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skill: skills[] = [
    {name: 'Html 5'},
    {name: 'CSS 3'},
    {name: 'Tailwindcss'},
    {name: 'Bootstrap 5'},
    {name: 'Angular'},
    {name: 'Javascript'},
    {name: 'Typescript'},
    {name: 'React'},
    {name: 'React Native'},
    {name: 'C#'},
    {name: 'ASP.Net Core'},
    {name: 'Razor Pages'},
    {name: 'Adaptive'},
    {name: 'Communication Skills'},
    {name: 'Data Management'},
    {name: 'Detail Oriented'},
    {name: 'Computer Operation'},
    {name: 'Multi-Tasking'},
  ];
  drop(event: CdkDragDrop<skills[]>) {
    moveItemInArray(this.skill, event.previousIndex, event.currentIndex);
  }
}
