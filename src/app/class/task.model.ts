export class Task {
    public id: number = 1
    public title: string = ""
    public completed: boolean = false
    public description: string = ""
}

export const tasks: Task[] = [
    { id: 1, title: "Définir un projet", completed: true, description: 'Définir un projet pertinent pour épater la galerie.' },
    { id: 2, title: "Construire une maquette", completed: false, description: 'Utiliser ses petites mains pour fabriquer une maquette qui va casser au premier imprévu.' },
    { id: 3, title: "Coder l'application", completed: false, description: 'Copier-coller des bouts de codes aléatoirement depuis Stack Overflow.' }
]