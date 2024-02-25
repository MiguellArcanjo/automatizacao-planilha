package br.com.planilhaflaviano.service;

import br.com.planilhaflaviano.dto.PropostaDTO;
import br.com.planilhaflaviano.model.entity.Proposta;

import java.util.Optional;

public interface PropostaService {

    Proposta getProposta(Long id);

    void salvarProposta(PropostaDTO dto);

    Proposta atualizarProposta(Proposta proposta);

    void deletar(Proposta proposta);

    Optional<Proposta> buscarPropostaPorId(Long id);
}
