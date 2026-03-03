<?php
abstract class Animal {
    public function fazerSom(){}
     public function mover(){}
     }

class Sapo extends Animal {
    public function fazerSom() {
        echo "croac-croac!<br>";
    }
}

class Cavalo extends Animal {
    public function fazerSom() {
        echo "iiirrrrí!<br>";
    }
    public function mover(){
        return "Galopa e anda <br>" . parent::mover();
    }
}

class Tartaruga extends Animal {
    public function fazerSom() {
        echo "hiss!<br>";
    }
}

$Cavalo = new Cavalo();
echo $Cavalo->mover();

$Sapo = new Sapo();
$Sapo->fazerSom();

$Cavalo = new Cavalo();
$Cavalo->fazerSom();

$Tartaruga = new Tartaruga();
$Tartaruga->fazerSom();
?>