import { Component } from '@angular/core';

export type Producto = {
  nombre: string,
  precio: number,
  descripcion: string
}

@Component({
  selector: 'app-list-basic',
  templateUrl: './list-basic.component.html',
  styleUrls: ['./list-basic.component.css']
})
export class ListBasicComponent {
  cargando : boolean = true ;
  
  listaElementos: Producto[] =[
  {
    nombre : 'leche',
    precio : 10,
    descripcion : 'leche entera'
  },
  {
    nombre : 'carne',
    precio : 20 ,
    descripcion : 'carne vacuna'
  }
]
  
  cambiarCargando() {
    this.cargando = !this.cargando;
  }

opcion : number = 0;

escogerOpcion(opcionEscogida: number){
this.opcion= opcionEscogida;
}


}

