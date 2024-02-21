package br.com.planilhaflaviano.controller;

import br.com.planilhaflaviano.dto.PropostaDTO;
import br.com.planilhaflaviano.exception.RegraNegocioException;
import br.com.planilhaflaviano.model.repository.PropostaRepository;
import br.com.planilhaflaviano.service.impl.PropostaServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/proposta")
public class PropostaController {

    private final PropostaRepository repository;
    private final PropostaServiceImpl propostaServiceImpl;


    public PropostaController(PropostaRepository repository, PropostaServiceImpl propostaServiceImpl) {
        this.repository = repository;
        this.propostaServiceImpl = propostaServiceImpl;
    }

    @PostMapping()
    public ResponseEntity salvar(@RequestBody PropostaDTO dto) {
        try {
            propostaServiceImpl.salvarProposta(dto);
            return new ResponseEntity(dto, HttpStatus.CREATED);
        } catch (RegraNegocioException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
