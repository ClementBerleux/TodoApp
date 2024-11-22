import { Routes } from '@angular/router';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TaskdetailsComponent } from './components/taskdetails/taskdetails.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: 'todos/:id',
    component: TaskdetailsComponent,
    canActivate: [authGuard],
  },
  { path: 'todos', component: TodolistComponent, canActivate: [authGuard] },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'todos' },
];
