import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirmar-eliminacion',
  templateUrl: './confirmar-eliminacion.component.html',
  styleUrls: ['./confirmar-eliminacion.component.css']
})
export class ConfirmarEliminacionComponent implements OnInit {

  @Input() confirmar:any;
  @Output() confirmacion: EventEmitter<any> = new EventEmitter();

  constructor() { }

  eventoConfirmar(sino)
  {
    this.confirmacion.emit(sino);
  }

  ngOnInit(): void {
  }

}
