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
  public nombreTasksCompleted: number = 0

  constructor() {
    this.updateTasks(initialList)
  }

  public toggleCompleted(id: number): void {
    this.tasks.map((tache) => {
      if (tache.id == id) {
        tache.completed = !tache.completed
        if (tache.completed) this.nombreTasksCompleted++
        else this.nombreTasksCompleted--
      }
    })
  }

  public async updateTasks(tasks: Task[]): Promise<void> {
    this.tasks = await new Promise<Task[]>((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], tasks))
      }, 3000)
    })
    this.nombreTasksCompleted = this.tasks.filter((tache) => tache.completed).length
  }

  public getTaskById(id: number): Task | undefined {
    return this.tasks.find((tache) => tache.id == id)
  }

  public getPreviousTaskId(id: number): number {

    let indexTask = this.tasks.findIndex((tache) => tache.id == id)
    if (indexTask > 0) return this.tasks[indexTask - 1].id
    else return -1
  }

  public getNextTaskId(id: number): number {

    let indexTask = this.tasks.findIndex((tache) => tache.id == id)
    if (indexTask < this.tasks.length - 1) return this.tasks[indexTask + 1].id
    else return -1
  }
}