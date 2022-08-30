import { IEmpresa } from '../models/empresa';

export class EmpresaServico{
    private static empresas:IEmpresa[] = [];

    public static salvar(cliente:IEmpresa){
      EmpresaServico.empresas.push(cliente);
    }

    public static all(){
        return EmpresaServico.empresas;
    }
}
