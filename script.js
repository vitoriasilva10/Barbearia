<td>

<button
onclick="editarCliente(${index})">
Editar
</button>

<button
class="excluir"
onclick="excluirCliente(${index})">
Excluir
</button>

</td>
function editarCliente(index){

let cliente = clientes[index];

let novoNome = prompt(
"Editar nome:",
cliente.nome
);

if(novoNome === null) return;

let novoTelefone = prompt(
"Editar telefone:",
cliente.telefone
);

if(novoTelefone === null) return;

let novoEmail = prompt(
"Editar email:",
cliente.email
);

if(novoEmail === null) return;

clientes[index] = {
nome: novoNome,
telefone: novoTelefone,
email: novoEmail
};

salvarClientes();

listarClientes();

alert("Cliente atualizado com sucesso!");

}