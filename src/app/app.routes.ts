import { Routes } from '@angular/router';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TaskComponent } from './components/task/task.component';

export const routes: Routes = [
    { path: "", component: TodolistComponent },
    { path: "todo", component: TaskComponent }
];
