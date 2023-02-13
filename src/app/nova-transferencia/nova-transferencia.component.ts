import { TransferenciasService } from './../services/transferencias.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {
  @Output() valoresComErro = new EventEmitter<string>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciasService, private router: Router) {}

  transferir() {
    console.log('Solicitada nova transferencia');

    if (this.ehValido()) {
      const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };
      this.service.adicionar(valorEmitir).subscribe(() => {
        this.router.navigateByUrl('extrato');
      });
    }
  }

  private  ehValido() {
    const valido = this.valor > 0;
    if (!valido) {
        this.valoresComErro.emit('Informe um valor válido');
    }
    return valido;
  }
}
