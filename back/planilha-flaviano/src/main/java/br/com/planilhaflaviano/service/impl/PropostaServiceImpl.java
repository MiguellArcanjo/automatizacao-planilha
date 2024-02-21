package br.com.planilhaflaviano.service.impl;

import br.com.planilhaflaviano.dto.PropostaDTO;
import br.com.planilhaflaviano.model.entity.Proposta;
import br.com.planilhaflaviano.model.repository.PropostaRepository;
import br.com.planilhaflaviano.service.PropostaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.PreparedStatement;

@Service
public class PropostaServiceImpl implements PropostaService {

    private final PropostaRepository repository;

    @Autowired
    public PropostaServiceImpl(PropostaRepository repository) {
        this.repository = repository;
    }


    @Override
    public void salvarProposta(PropostaDTO dto) {
        Proposta proposta = new Proposta();
        proposta.setDataDaProposta(dto.getDataDaProposta());
        proposta.setNomeDoCliente(dto.getNomeDoCliente());
        proposta.setCpfDoCliente(dto.getCpfDoCliente());
        proposta.setValorLiberado(dto.getValorLiberado());
        proposta.setQuantidadeDeParcela(dto.getQuantidadeDeParcela());
        proposta.setValorDaParcela(dto.getValorDaParcela());
        proposta.setNumeroDaProposta(dto.getNumeroDaProposta());
        proposta.setDataDoPagamento(dto.getDataDoPagamento());

        repository.save(proposta);
    }

    @Override
    public Proposta atualizarProposta(Proposta proposta) {
        return repository.save(proposta);
    }

    @Override
    public void deletar(Proposta proposta) {
        repository.delete(proposta);
    }
}
