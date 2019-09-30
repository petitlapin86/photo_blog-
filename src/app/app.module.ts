import { NgModule } from '@angular/core'; //foundation of any angular application
import {BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http'; //http module
import { FormsModule } from '@angular/forms';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api'; //this connects in memory service with angular service
import {AppComponent} from './app.component'; //app.components.ts
import {EntryListComponent, EntryComponent, EntryService} from './entries'; //using a barrel so everything is accessible from this one import
import {InMemoryEntryService} from './backend';

@NgModule({ //this is a decorator helps to map components in the most efficient way possible
  imports: [ //all additional angular modules are registered here for use in application - only for angular modules
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryEntryService)
    ],

    providers: [
    EntryService
    ],

    declarations:[ //registers all applications components
    AppComponent,
    EntryComponent, //put child components first
    EntryListComponent
    ],

  bootstrap: [AppComponent] //collection of top level components that act as an entry point

})
export class AppModule { //exporting so i can use in main.ts

}
