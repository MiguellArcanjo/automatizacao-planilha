package br.com.planilhaflaviano.service;

import br.com.planilhaflaviano.dto.PropostaDTO;
import br.com.planilhaflaviano.model.entity.Proposta;

public interface PropostaService {

    void salvarProposta(PropostaDTO dto);

    Proposta atualizarProposta(Proposta proposta);

    void deletar(Proposta proposta);
}
