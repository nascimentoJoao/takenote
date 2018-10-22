import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { InsertNoteComponent } from './insert-note/insert-note.component';

const routes: Routes = [
  { path: 'list', component: ListNotesComponent},
  { path: 'note', component: InsertNoteComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
