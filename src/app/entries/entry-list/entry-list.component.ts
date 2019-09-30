import { Component, OnInit } from '@angular/core'; //import component
import { EntryService } from '../shared/entry.service';
import { Entry } from '../shared/entry.model';

@Component({
  selector: 'app-entry-list',
  templateUrl: 'entry-list.component.html', //connect to template
  styleUrls: ['entry-list.component.css'] //connect to css
})
export class EntryListComponent implements OnInit {
  entries: Entry[];

  constructor(private entryService: EntryService) { //instantiate components and wire up dependencies

  }
  ngOnInit() {
    this.entryService
    .getEntries()
    .then(entries => this.entries = entries);
  }
}
