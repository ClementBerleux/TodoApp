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

  public tasks: Task[] = initialList

  constructor() { }

}