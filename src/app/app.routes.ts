import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { WorkoutTableComponent } from './components/workout-table/workout-table.component';
import { WorkoutChartComponent } from './components/workout-chart/workout-chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-form', pathMatch: 'full' },
  { path: 'user-form', component: UserFormComponent },
  { path: 'workout-form', component: WorkoutFormComponent },
  { path: 'workout-table', component: WorkoutTableComponent },
  { path: 'workout-chart', component: WorkoutChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
