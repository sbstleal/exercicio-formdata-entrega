import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICliente } from 'src/app/models/cliente';
import { ClienteServico } from 'src/app/services/cliente-service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss'],
})
export class CadastroClienteComponent implements OnInit {
  @Input() public alerts: Array<string> = [];
  meuFormGroup: FormGroup;
  hide = true;
  hide2 = true;

  constructor(private formBuilder: FormBuilder) {
    this.meuFormGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public clientes: ICliente[] = ClienteServico.all();
  public cliente: ICliente = {} as ICliente;

  public salvar() {
    ClienteServico.salvar(this.cliente);
    this.listarClientes();
  }

  public listarClientes() {
    this.clientes = ClienteServico.all();
  }

  isCPF(): boolean {
    return this.cliente.cpf == null
      ? true
      : this.cliente.cpf.length < 12
      ? true
      : false;
  }

  getCpfCnpjMask(): string {
    return this.isCPF() ? '000.000.000-000' : '00.000.000/0000-00';
  }

  postar() {
    if (!this.meuFormGroup.valid) {
      console.log('Formulário inválido');
      this.hide = false;
      return;
    }
    console.log('Formulário válido', this.meuFormGroup.value);
    this.salvar();
    this.hide2 = false;
  }
}
