import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'update-student/:studentId', component: UpdateStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
