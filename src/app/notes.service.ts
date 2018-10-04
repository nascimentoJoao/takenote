import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from './objects/note';
import { Observable, of } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class NotesService {

  
  private API_URL = 'http://localhost:8082/api'

  constructor(
    private http: HttpClient
  ) { }

  getNotes(): Observable<Note[]> {
      return this.http.get<Note[]>(this.API_URL + "/notes");
  }

  createNote(note: Note): Observable<Note>{
      return this.http.post<Note>(this.API_URL + "/notes", note, httpOptions);
  }

  getNote(id: Number): Observable<Note>{
      return this.http.get<Note>(this.API_URL + "/notes/" + id);
  }

  deleteNote(id: Number): Observable<{}>{
      return this.http.delete(this.API_URL + "/notes/" + id, httpOptions);
  }

  updateNote(id: Number, note: Note): Observable<Note>{
      return this.http.put<Note>(this.API_URL + "/notes/" + id, note, httpOptions);
  }

}
