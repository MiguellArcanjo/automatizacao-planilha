"use client"
import React, { useState } from 'react';
import style from "@/src/styles/lancar.module.css";
import Link from 'next/link'
import "@/src/styles/global.css";
import ApiService from '@/src/api/apiService';



function mascara(e){
   
    const i = e.target;
    const { selectionStart } = i; // Salva a posição atual do cursor
    let v = i.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (v.length > 11) { // Verifica se já está formatado
        return;
    }
    
    if (v.length > 3 && v.length <= 6) {
        i.value = v.substring(0, 3) + '.' + v.substring(3);
    } else if (v.length > 6 && v.length <= 9) {
        i.value = v.substring(0, 3) + '.' + v.substring(3, 6) + '.' + v.substring(6);
    } else if (v.length > 9) {
        i.value = v.substring(0, 3) + '.' + v.substring(3, 6) + '.' + v.substring(6, 9) + '-' + v.substring(9);
    } else {
        i.value = v;
    }
    
    // Reposiciona o cursor para a posição correta
    const delta = i.value.length - v.length;
    i.selectionStart = i.selectionEnd = selectionStart + delta;
 
}

export default function LancarProposta() {
    const apiUrl = 'http://localhost:8080/api'
    const apiService = new ApiService(apiUrl);
    const [dataDaProposta, setDataDaProposta] = useState('');
    const [nomeDoCliente, setNomeDoCliente] = useState('');
    const [cpfDoCliente, setCpfDoCliente] = useState('');
    const [valorLiberado, setValorLiberado] = useState('R$: ');
    const [quantidadeDeParcela, setQuantidadeDeParcela] = useState('');
    const [valorDaParcela, setValorDaParcela] = useState('R$: ');
    const [numeroDaProposta, setNumeroDaProposta] = useState('');
    const [dataDoPagamento, setDataDoPagemento] = useState('');


    const [formData, setFormData] = useState({
        dataProposta: '',
        nomeCliente: '',
        cpfCliente: '',
        valorLiberado: '',
        quantidadeParcelas: '',
        valorParcela: '',
        numeroProposta: '',
        dataPagamento: '',
    })

    const handleInputChange = (e) => {
        console.log(e); // Verifique se o evento está sendo passado corretamente
        if (e && e.target) {
            const {name, value, type, checked} = e.target;
            const inputValue = type === 'checkbox' ? !formData.rl : value;
            setFormData({...formData, [name]: inputValue});
        }   
    }

    const handleChangeCPF = (e) => {
        const {value} = e.target;
        const formattedCPF = mascara(value)
        setCpfDoCliente(formattedCPF);
    }

  
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "/v1/proposta";
        const data = {
            dataDaProposta: dataDaProposta,
            nomeDoCliente: nomeDoCliente,
            cpfDoCliente: cpfDoCliente,
            valorLiberado: valorLiberado,
            quantidadeDeParcela: quantidadeDeParcela,
            valorDaParcela: valorDaParcela,
            numeroDaProposta: numeroDaProposta,
            dataDoPagamento: dataDoPagamento,
        }

        apiService.post(url, data)
        .then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <section className={style.background}>
        <main className={style.background}>
            <table border={1} className={style.tabela}>
                <thead>
                    <tr>
                        <th>DATA DA PROPOSTA</th>
                        <th>NOME DO CLIENTE</th>
                        <th>CPF DO CLIENTE</th>
                        <th>VALOR LIBERADO</th>
                        <th>QUANTIDADE DE PARCELAS</th>
                        <th>VALOR DA PARCELA</th>
                        <th>NÚMERO DA PROPOSTA</th>
                        <th>DATA DO PAGAMENTO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{formData.dataProposta}</td>
                        <td>{formData.nomeCliente}</td>
                        <td>{formData.cpfCliente}</td>
                        <td>{formData.valorLiberado}</td>
                        <td>{formData.quantidadeParcelas}</td>
                        <td>{formData.valorParcela}</td>
                        <td>{formData.numeroProposta}</td>
                        <td>{formData.dataPagamento}</td>
                    </tr>
                </tbody>
            </table>


            <form onSubmit={handleSubmit} className={style.formulario}>
                <div className={style.divSeparacao}>

                    <div className={style.divInput}>
                        <label htmlFor="">Data da proposta: </label>
                        <input 
                            type="date"
                            name="dataProposta" 
                            className={style.input}
                            onChange={(e) => {
                                if (e && e.target) {
                                    const { name, value } = e.target;
                                    handleInputChange(e); // Chame handleInputChange com o evento
                                    setDataDaProposta(value);
                                }
                            }} 
                            value={dataDaProposta}
                            />
                    </div>

                    <div className={style.divInput}>
                        <label htmlFor="">nome do cliente: </label>
                        <input 
                            type="text" 
                            name="nomeCliente" 
                            className={style.input} 
                            onChange={(e) => {
                                if (e && e.target) {
                                    const { name, value } = e.target;
                                    handleInputChange(e); // Chame handleInputChange com o evento
                                    setNomeDoCliente(value);
                                }
                            }} 
                            value={nomeDoCliente}/>
                    </div>

                    <div className={style.divInput}>
                        <label htmlFor="">cpf do cliente: </label>
                        <input 
                            type="text" 
                            name="cpfCliente" 
                            className={style.input} 
                            onChange={(e) => {
                                if (e && e.target) {
                                    const { name, value } = e.target;
                                    handleInputChange(e); // Chame handleInputChange com o evento
                                    setCpfDoCliente(value);
                                }
                            }} 
                            value={cpfDoCliente}
                            onInput={mascara}
                        />
                            
                    </div>

                    <div className={style.divInput}>
                        <label htmlFor="">valor liberado: </label>
                        <input 
                            type="text" 
                            name="valorLiberado" 
                            className={style.input} 
                            onChange={(e) => {
                                if (e && e.target) {
                                    const { name, value } = e.target;
                                    handleInputChange(e); // Chame handleInputChange com o evento
                                    setValorLiberado(value);
                                }
                            }} 
                            value={valorLiberado}
                        />
                    </div>

                    <div className={style.divInput}>
                        <label htmlFor="">quantidade de parcela: </label>
                        <input 
                            type="number" 
                            name="quantidadeParcelas" 
                            className={style.input} 
                            onChange={(e) => {
                                if (e && e.target) {
                                    const { name, value } = e.target;
                                    handleInputChange(e); // Chame handleInputChange com o evento
                                    setQuantidadeDeParcela(value);
                                    
                                }
                            }} 
                            value={quantidadeDeParcela}
                        />
                    </div>

                    <div className={style.divInput}>
                        <label htmlFor="">valor da parcela: </label>
                        <input 
                            type="text" 
                            name="valorParcela" 
                            className={style.input} 
                            onChange={(e) => {
                                if (e && e.target) {
                                    const { name, value } = e.target;
                                    handleInputChange(e); // Chame handleInputChange com o evento
                                    setValorDaParcela(value);
                                    
                                }
                            }} 
                            value={valorDaParcela}
                        />
                    </div>

                    <div className={style.divInput}>
                        <label htmlFor="">número da proposta: </label>
                        <input 
                            type="number" 
                            name="numeroProposta" 
                            className={style.input} 
                            onChange={(e) => {
                                if (e && e.target) {
                                    const { name, value } = e.target;
                                    handleInputChange(e); // Chame handleInputChange com o evento
                                    setNumeroDaProposta(value);
                                }
                            }} 
                            value={numeroDaProposta}
                        />
                    </div>

                    <div className={style.divInput}>
                        <label htmlFor="">data do pagamento: </label>
                        <input 
                            type="date" 
                            name="dataPagamento" 
                            className={style.input} 
                            onChange={(e) => {
                                if (e && e.target) {
                                    const { name, value } = e.target;
                                    handleInputChange(e); // Chame handleInputChange com o evento
                                    setDataDoPagemento(value);
                                    
                                }
                            }} 
                            value={dataDoPagamento}
                        />
                    </div>

                    <button type='submit' className={style.btn}>Cadastrar</button>
                    <Link href="/" className={style.btnLink}>Voltar</Link>
                </div>


            </form>
        </main>
    </section>
  )
}
