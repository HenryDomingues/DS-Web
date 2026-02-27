<?php
class Pessoa {
public $nome = "Rasmus";
protected $idade = 48;
private $senha = "12345";
private function verDados(){
echo $this->nome . "<br/>";
echo $this->idade . "<br/>";
echo $this->senha . "<br/>";
}
}
$bruno = new Pessoa();
//echo $objeto->nome . "<br/>";
$objeto->verDados();
?>