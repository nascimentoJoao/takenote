import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../objects/note';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  notes: Note[];

  constructor(private service: NotesService) { }


  ngOnInit() {
    this.loadAllNotes();
  }

  loadAllNotes(){
    this.service.getNotes().subscribe(result => this.notes = result);
  }


}
