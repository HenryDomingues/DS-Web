<?php
class  Pessoa {
    public $nome;
    public $idade;

    public function __construct($nome, $idade) {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function exibirInfo() {
        echo "Nome: {$this->nome} | Idade: {$this->idade} anos<br>";
    }

    public function alterarInfo($novoNome, $novaIdade) {
        $this->nome = $novoNome;
        $this->idade = $novaIdade;
    }
}''

$pessoa = new Pessoa("Páscoli", 17);
echo $pessoa->exibirInfo();
$pessoa->alterarInfo("Douglas Silva", 28);
echo $pessoa->exibirInfo();





?>