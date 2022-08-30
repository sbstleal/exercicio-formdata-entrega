import { ICliente } from '../models/cliente';

export class ClienteServico{
    private static clientes:ICliente[] = []

    public static salvar(cliente:ICliente){
        ClienteServico.clientes.push(cliente);
    }

    public static all(){
        return ClienteServico.clientes;
    }
}
