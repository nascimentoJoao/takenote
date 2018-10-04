import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './objects/note';

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
    private service: NotesService,
    ){
  }

  ngOnInit(){

  /** 
   * this.newnote = {
      title: "Gabriel",
      content: "Enviou uma mensagem!"
  }

  this.updatedNote = {
    title: "Editei a mensagem",
    content: "Com esse conteudo"
  }

  this.service.createNote(this.newnote).subscribe();

    this.service.getNotes().subscribe(items => {
      this.notes = items;
      console.log(this.notes);
    });

    this.service.getNote(4).subscribe(note => {
      console.log(note);
    });

    this.service.updateNote(4, this.updatedNote).subscribe(note => {
      console.log(note);
    });
    
    this.service.deleteNote(2).subscribe(note =>{
      console.log(note);
    })
    **/

  }

}
