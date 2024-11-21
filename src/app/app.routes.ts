import { Routes } from '@angular/router';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TaskdetailsComponent } from './components/taskdetails/taskdetails.component';

export const routes: Routes = [
    { path: "todos/:id", component: TaskdetailsComponent },
    { path: "", component: TodolistComponent }
];
