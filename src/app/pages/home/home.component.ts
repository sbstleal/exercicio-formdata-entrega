import { Component } from '@angular/core';

import { ClienteServico } from '../../services/cliente-service';
import { EmpresaServico } from '../../services/empresa-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  dadosCliente = ClienteServico.all();

  dadosEmpresa = EmpresaServico.all();

  constructor() { }

}
