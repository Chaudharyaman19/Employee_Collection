import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SpringEmployeeListComponent } from './spring-employee-list/spring-employee-list.component';
import { NgModule } from '@angular/core';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdatespringcompComponent } from './updatespringcomp/updatespringcomp.component';

const routes: Routes = [
  { path: 'employee', component: SpringEmployeeListComponent },
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'update-employee', component: UpdatespringcompComponent },
  { path: 'home', component: HomeComponent },
  { path: 'course', component: CourseComponent },
  { path: 'joinnow', component: JoinnowComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
