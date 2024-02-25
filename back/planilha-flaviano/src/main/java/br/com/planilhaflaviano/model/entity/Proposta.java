package br.com.planilhaflaviano.model.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "proposta")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Proposta {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "dataDaProposta")
    private LocalDate dataDaProposta;

    @Column(name = "nomeDoCliente")
    private String nomeDoCliente;

    @Column(name = "cpfDoCliente")
    private String cpfDoCliente;

    @Column(name = "valorLiberado")
    private String valorLiberado;

    @Column(name = "valorDaParcela")
    private String valorDaParcela;

    @Column(name = "quantidadeDeParcela")
    private Integer quantidadeDeParcela;

    @Column(name = "numeroDaProposta")
    private Integer numeroDaProposta;

    @Column(name = "dataDoPagemento")
    private LocalDate dataDoPagamento;
}
