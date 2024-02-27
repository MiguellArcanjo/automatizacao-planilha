"use client"
import React, { useEffect, useState } from 'react'
import ApiService from '@/src/api/apiService'
import Link from 'next/link'
import style from "@/src/styles/consultar.module.css";
import "@/src/styles/global.css";

export default function page() {
    const apiUrl = 'http://localhost:8080/api';
    const apiService = new ApiService(apiUrl);
    const [propostas, setPropostas] = useState([]);

    // const carregarPropostas = () => {
        
    // }

    useEffect(() => {
        const endPoint = "/v1/proposta";
        apiService.get(endPoint)
        .then((response) => {
            setPropostas(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []); // Passando uma matriz vazia como segundo argumento

    return (
        <div className={style.main}>
            <div className={style.divTable}>
                <table border={1} className={style.teste}>
                    <thead className={style.thead}>
                        <tr>
                            <th className={style.th}>DATA DA PROPOSTA</th>
                            <th>NOME DO CLIENTE</th>
                            <th>CPF DO CLIENTE</th>
                            <th>VALOR LIBERADO</th>
                            <th>QUANTIDADE DE PARCELAS</th>
                            <th>VALOR DA PARCELA</th>
                            <th>NÚMERO DA PROPOSTA</th>
                            <th>DATA DO PAGAMENTO</th>
                            <th>NOME DO PARCEIRO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {propostas.map((proposta) => (
                            <tr key={proposta.id}>
                                <td>{proposta.dataDaProposta}</td>
                                <td>{proposta.cpfDoCliente}</td>
                                <td>{proposta.nomeDoCliente}</td>
                                <td>{proposta.valorLiberado}</td>
                                <td>{proposta.quantidadeDeParcela}</td>
                                <td>{proposta.valorDaParcela}</td>
                                <td>{proposta.dataDoPagamento}</td>
                                <td>{proposta.numeroDaProposta}</td>
                                <td>{proposta.nomeDoParceiro}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Link href="/" className={style.btnVoltar}>Voltar</Link>
        </div>
    )
}
