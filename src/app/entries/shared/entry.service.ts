
import  { Entry } from './entry.model'; //import entry.model.ts
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class EntryService {

  constructor(private http: Http) { //expose to entire service by declaring private

  }

  addComment(entryId: number, comment: { name: string; comment: string; }){
    return this.http.post(`/app/entries/${entryId}/comments`, comment)
    .toPromise(); 
  }

  getEntries(): Promise<Entry[]> { //get entries with a valid return type
    return this.http.get('/app/entries')
    .toPromise()
    .then(response => response.json().data as Entry[]); //parse the json data returned from the server
  }
}
