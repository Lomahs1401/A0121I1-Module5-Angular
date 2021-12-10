import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { StudentInformationComponent } from './student-information/student-information.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: StudentListComponent},
  {path: 'create', component: ReactiveFormComponent},
  {path: 'detail/:id', component: StudentInformationComponent},
  {path: 'teacher', component: TeacherListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
