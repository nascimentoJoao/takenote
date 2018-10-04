import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Note } from '../objects/note';
import { NotesService } from '../notes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-insert-note',
  templateUrl: './insert-note.component.html',
  styleUrls: ['./insert-note.component.css']
})
export class InsertNoteComponent implements OnInit {

  content: FormGroup;
  note: Note;
  allNotes: Note[];

  constructor(
    private fb: FormBuilder,
    private noteService: NotesService,
    private toastr: ToastrService
  ) { 

    this.content = this.fb.group({
      'title':['', Validators.required],
      'content':['', Validators.required]
    });

  }

  ngOnInit() {

  }

  showContent(){
    //console.log(this.content.value);
    this.note = this.content.value;
    console.log(this.note);
    this.sendContent(this.note);
    this.content.reset();
  }

  sendContent(note: Note){
    this.noteService.createNote(note).subscribe(
      note=>
      this.toastr.success(note.title + " enviou uma mensagem!"));
  }

  showAllNotes(){
      this.noteService.getNotes().subscribe(
        (notes)=>
        this.allNotes = notes,
        (err) => console.error(err),
        () => console.log(this.allNotes)
      );
  }


}
