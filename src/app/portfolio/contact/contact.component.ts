import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
contact= [
  {
    title:"osaift@gmail.com",
    icon:"email"
  },
  {
    title:"+92 309 8091512",
    icon:"phone"
  },
  {
    title:"Multan, Pakistan",
    icon:"location_on"
  },
]
}
