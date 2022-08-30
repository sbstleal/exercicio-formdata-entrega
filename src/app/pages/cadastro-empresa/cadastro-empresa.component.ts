import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaServico } from 'src/app/services/empresa-service';

import { IEmpresa } from '../../models/empresa';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.scss']
})
export class CadastroEmpresaComponent implements OnInit {
  @Input() public alerts: Array<string> = [];
  meuFormGroup: FormGroup;
  hide = true;
  hide2 = true;

  constructor(private formBuilder: FormBuilder) {
    this.meuFormGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      cnpj: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      valor: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  public empresas: IEmpresa[] = EmpresaServico.all();
  public empresa: IEmpresa = {} as IEmpresa;

  public salvar() {
    EmpresaServico.salvar(this.empresa);
    this.listarEmpresas();
  }

  public listarEmpresas() {
    this.empresas = EmpresaServico.all();
  }

  isCPF(): boolean {
    return this.empresa.cnpj == null
      ? true
      : this.empresa.cnpj.length < 12
      ? true
      : false;
  }

  getCpfCnpjMask(): string {
    return this.isCPF() ? '000.000.000-000' : '00.000.000/0000-00';
  }

  postar() {
    if (!this.meuFormGroup.valid) {
      console.log('Formulário inválido');
      console.log(this.meuFormGroup.value);
      this.hide = false;
      return;
    }
    console.log('Formulário válido', this.meuFormGroup.value);
    this.salvar();
    this.hide2 = false;
  }
}
