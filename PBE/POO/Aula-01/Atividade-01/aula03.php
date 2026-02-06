<?php
class Livro{
public $cor;
public $título;
public $material;
public $autor;
public $editora;
//Atributo
public function ler() { //Método
return "Você comprou um livro com o seguinte título:".$this->título;}
public function apoiar() { //Método
return "você pode apoiar algo em um livro da cor:".$this->cor;}
public function desenhar() { //Método
return "Você desenhou em um livro do seguinte material: ".$this->material;
}}

?>