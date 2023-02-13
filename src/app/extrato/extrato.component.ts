import { TransferenciasService } from './../services/transferencias.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent {
  transferencias: any;

  constructor(private service: TransferenciasService) {}

  ngOnInit() {
    this.transferencias = this.service.transferencias;
  }
}
