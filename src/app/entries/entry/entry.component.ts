import { Component, Input } from '@angular/core'; //import component
import { Entry } from '../shared/entry.model';

@Component({
  selector: 'app-entry',
  templateUrl: 'entry.component.html', //connect to template
  styleUrls: ['entry.component.css'] //connect to css
})
export class EntryComponent {
//title: string = 'My first photo';
//photo: string = "http://placehold.it/800X500?text-Angular Basics";
//description: string = 'A description of My First Photo';
//comments: any[] =[ //comment is an array
//  {name: "Paige", comment: " My comment"}, //default to these comments//
//  {name: "Lola", comment: " Her comment"},
//  {name: "Selena", comment: " Her comment"}
//  ]
    @Input() entry: Entry;
}
