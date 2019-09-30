import {Component} from '@angular/core';

@Component({
  selector: 'app-root', //this is targeting the index.html app-root
  templateUrl: 'app.component.html', //templates view or user interface
  styleUrls: ['app.component.css'] //connecting to css
})
export class AppComponent {
 //because of typescript we have to define the object type
    emoji = ['A', 'B', 'C', 'D'];
    activeEmoji: string;
    changeEmoji() {
      this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
    }
  }



//components are made up of templates classes and decorators

// classes bring the template to life
// decorators contains meta data binds class to template
