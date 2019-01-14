import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
  
  graficos: any = {
    'grafico1': {
      'labels': ['Con Figoles', 'Con Natilla','Con Tocino'],
      'data': [24,30,46],
      'type':'doughnut',
      'leyenda':'El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data': [4500,6000],
      'type':'doughnut',
      'leyenda':'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data': [24,30],
      'type':'doughnut',
      'leyenda':'Fumadores'
    },
    'grafico4': {
      'labels': ['Si', 'No'],
      'data': [80,20],
      'type':'doughnut',
      'leyenda':'A favor Independencia'
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
