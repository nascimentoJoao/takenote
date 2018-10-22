import { Component, OnInit } from '@angular/core';
import { Note } from './objects/note';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Take a Note';

  notes: Note[];
  newnote: Note;
  updatedNote: Note;

  constructor(
    private router: Router,
    ){
  }

  ngOnInit(){
    this.router.navigate(["note"]);
  }

}
