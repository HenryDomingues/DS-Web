<?php
class Computador{
public $cor;
public $marca;
public $material;
public $processador;
public $armazenamento;
//Atributo
public function ligar() { //Método
return "Você ligou um computar da seguinte marca:".$this->marca;}
public function desligar() { //Método
return "Você desligou um computar da seguinte cor:".$this->cor;}
public function resfriar() { //Método
return "O computador acabou de resfriar, pois aqueceu devido ao seguinte material: ".$this->material;
}}


$ComputadorDell = new Coputador();
$ComputadorDell->marca = "Dell";
echo $ComputadorDell->ligar();

$ComputadorCinza = new Coputador();
$ComputadorCinza->cor = "Cinza";
echo $ComputadorCinza->desligar();

$ComputadorPlastico = new Coputador();
$ComputadorPlastico->material = "Plástico";
echo $ComputadorPlastico->resfriar();
?>