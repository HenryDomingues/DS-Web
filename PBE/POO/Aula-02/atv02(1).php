<?php

class Pessoa {
    public $nome;
    protected $idade;

    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function setIdade($idade) {
        $this->idade = $idade;
    }

    public function getNome() {
        return $this->nome;
    }

    public function getIdade() {
        return $this->idade;
    }
}

class Funcionario extends Pessoa {
    protected $salario;

    public function setSalario($salario) {
        $this->salario = $salario;
    }

    public function getSalario() {
        return $this->salario;
    }

    public function calcularBonus() {
        return 0;
    }
}

class Gerente extends Funcionario {
    public function calcularBonus() {
        return $this->salario * 0.20;
    }
}

class Desenvolvedor extends Funcionario {
    public function calcularBonus() {
        return $this->salario * 0.10;
    }
}

$gerente = new Gerente();
$gerente->setNome("Luis");
$gerente->setIdade(40);
$gerente->setSalario(10500);

$desen = new Desenvolvedor();
$desen->setNome("Anna");
$desen->setIdade(28);
$desen->setSalario(5750);

echo "Gerente: " . $gerente->getNome() . "<br>";
echo "Bônus: R$ " . $gerente->calcularBonus() . "<br><br>";

echo "Desenvolvedor: " . $desen->getNome() . "<br>";
echo "Bônus: R$ " . $desen->calcularBonus();

?>