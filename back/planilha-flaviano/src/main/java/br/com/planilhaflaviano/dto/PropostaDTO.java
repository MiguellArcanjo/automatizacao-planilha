package br.com.planilhaflaviano.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Data
@Getter
@Setter
public class PropostaDTO {
    private Long Id;
    private LocalDate dataDaProposta;
    private String nomeDoCliente;
    private Integer cpfDoCliente;
    private float valorLiberado;
    private Integer valorDaParcela;
    private Integer numeroDaProposta;
    private Integer quantidadeDeParcela;
    private LocalDate dataDoPagamento;
}
