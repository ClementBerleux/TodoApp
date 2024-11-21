import { Injectable } from '@angular/core';
import { Task } from '../class/task.model';

const initialList: Task[] = [
  { id: 1, title: "Définir un projet", completed: true, description: 'Définir un projet pertinent pour épater la galerie.', date: new Date("2024-11-18") },
  { id: 2, title: "Construire une maquette", completed: false, description: 'Utiliser ses petites mains pour fabriquer une maquette qui va casser au premier imprévu.', date: new Date("2024-11-19") },
  { id: 3, title: "Coder l'application", completed: false, description: 'Copier-coller des bouts de codes aléatoirement depuis Stack Overflow.', date: new Date("2024-11-20") }
]

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  public tasks: Task[] = []

  constructor() {
    this.updateTasks(initialList)
  }

  public toggleCompleted(id: number): void {
    this.tasks.map((tache) => {
      if (tache.id == id) tache.completed = !tache.completed
    })
  }

  public async updateTasks(tasks: Task[]): Promise<void> {
    this.tasks = await new Promise<Task[]>((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], tasks))
      }, 3000)
    })
  }
}