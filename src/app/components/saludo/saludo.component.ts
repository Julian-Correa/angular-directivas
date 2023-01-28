import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  
  

  @Input() nombre: string = "anonimo";
  @Output() mensajeEmitter : EventEmitter <string> = new EventEmitter<string>();
 constructor () {}
 
 ngOnInit(): void {
  console.log("onInt del saludo");
 }

 //alertaSaludo(): void{
  //alert(`hola ${this.nombre} alerta por click de boton`);
 //}
   
 //}

 enviarMensajeAlPadre(): void{
 this.mensajeEmitter.emit(`hola ${this.nombre} mensaje de alerta al componente padre`);
 }

}
