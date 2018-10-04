import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { InsertNoteComponent } from './insert-note/insert-note.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ListNotesComponent } from './list-notes/list-notes.component'; 


@NgModule({
  declarations: [
    AppComponent,
    InsertNoteComponent,
    ListNotesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
