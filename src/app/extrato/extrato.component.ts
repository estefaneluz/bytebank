import { TransferenciasService } from './../services/transferencias.service';
import { Component, Input } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent {
  transferencias: Transferencia[];

  constructor(private service: TransferenciasService) {}

  ngOnInit() {
    this.service.todas().subscribe((transferencias: Transferencia[]) => this.transferencias = transferencias)
  }
}
