function limparSalario(){
  const confirmar = confirm("Deseja limpar o salário salvo?");
  if(!confirmar) return;

  salario = 0;
  salvarNoLocalStorage();
  document.getElementById("salarioInput").value = "";
  atualizarResumo();
  alert("Salário removido com sucesso!");
}