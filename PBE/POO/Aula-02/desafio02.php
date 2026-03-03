<?php

class Documento {
    private $numero;

    public function getNumero() {
        return $this->numero;
    }

    public function setNumero($numero) {
        // Remove tudo que não for número
        $this->numero = preg_replace('/[^0-9]/', '', $numero);
    }
}

class CPF extends Documento {

    public function validar() {
        $cpf = $this->getNumero();

        // CPF deve ter 11 dígitos
        if (strlen($cpf) != 11) {
            return false;
        }

        // Impede CPFs com todos os números iguais (ex: 11111111111)
        if (preg_match('/(\d)\1{10}/', $cpf)) {
            return false;
        }

        // Validação do primeiro dígito verificador
        for ($t = 9; $t < 11; $t++) {
            $soma = 0;

            for ($i = 0; $i < $t; $i++) {
                $soma += $cpf[$i] * (($t + 1) - $i);
            }

            $digito = ((10 * $soma) % 11) % 10;

            if ($cpf[$t] != $digito) {
                return false;
            }
        }

        return true;
    }
}

// Testando o sistema

$cpf = new CPF();
$cpf->setNumero("529.982.247-25");

echo "CPF: " . $cpf->getNumero() . "<br>";

if ($cpf->validar()) {
    echo "CPF válido!";
} else {
    echo "CPF inválido!";
}

?>