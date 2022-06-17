import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadecolaboradores',
  templateUrl: './listadecolaboradores.component.html',
  styleUrls: ['./listadecolaboradores.component.scss']
})
export class ListadecolaboradoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  colaboradores = [
    { id: 1, nome: 'Nathan Carlos', salario: 4500, cargo: 'Dev Pl' },
    { id: 2, nome: 'Luana Almeida', salario: 3500, cargo: 'Dev Jr' },
    { id: 3, nome: 'Leo Alves', salario: 5500, cargo: 'Dev e UX' },
    { id: 4, nome: 'Geraldo Lucas', salario: 2500, cargo: 'Dev Estagiário' },
  ];

}
