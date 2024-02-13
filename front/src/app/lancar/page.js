"use client"
import React, { useState } from 'react';
import style from "@/src/styles/lancar.module.css";
import "@/src/styles/global.css";

export default function LancarProposta() {
    const [formData, setFormData] = useState({
        dataProposta: '',
        nomeCliente: '',
        cpfCliente: '',
        valorLiberado: '',
        quantidadeParcelas: '',
        valorParcela: '',
        numeroProposta: '',
        dataPagamento: '',
        inss: false,
        rl: false,
        vd: false
    })

    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target;
        const inputValue = type === 'checkbox' ? !formData.inss || !formData.rl || !formData.vd : value;
        // const inputValue2 = type === 'checkbox' ? !formData.rl : value;
        setFormData({...formData, [name]: inputValue})
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
                        <td>{formData.nomeCliente} {formData.inss && 'INSS'} {formData.rl && 'RL'} {formData.vd && 'VD'}</td>
                        <td>{formData.cpfCliente}</td>
                        <td>{formData.valorLiberado}</td>
                        <td>{formData.quantidadeParcelas}</td>
                        <td>{formData.valorParcela}</td>
                        <td>{formData.numeroProposta}</td>
                        <td>{formData.dataPagamento}</td>
                    </tr>
                </tbody>
            </table>


            <form action="" className={style.formulario}>
                <div className={style.divSeparacao}>

                    <div className={style.divInput}>
                        <label htmlFor="">Data da proposta: </label>
                        <input 
                            type="date"
                            name="dataProposta" 
                            className={style.input}
                            onChange={handleInputChange}
                            />
                    </div>

                    <div className={style.divInput}>
                        <label htmlFor="">nome do cliente: </label>
                        <input type="text" name="nomeCliente" className={style.input} onChange={handleInputChange} />
                    </div>

                    <div className={style.divInput}>
                        <label htmlFor="">cpf do cliente: </label>
                        <input type="number" name="cpfCliente" className={style.input} onChange={handleInputChange}/>
                    </div>

                    <div className={style.divInput}>
                        <label htmlFor="">valor liberado: </label>
                        <input type="text" name="valorLiberado" className={style.input} onChange={handleInputChange} />
                    </div>

                    <div className={style.divInput}>
                        <label htmlFor="">quantidade de parcela: </label>
                        <input type="number" name="quantidadeParcelas" className={style.input} onChange={handleInputChange} />
                    </div>

                    <div className={style.divInput}>
                        <label htmlFor="">valor da parcela: </label>
                        <input type="text" name="valorParcela" className={style.input} onChange={handleInputChange} />
                    </div>

                    <div className={style.divInput}>
                        <label htmlFor="">número da proposta: </label>
                        <input type="number" name="numeroProposta" className={style.input} onChange={handleInputChange}/>
                    </div>

                    <div className={style.divInput}>
                        <label htmlFor="">data do pagamento: </label>
                        <input type="date" name="dataPagamento" className={style.input} onChange={handleInputChange}/>
                    </div>
                </div>

                <div className={style.divSeparacao}>
                    <div className={style.divInput}>
                        <label htmlFor="">inss: </label>
                        <input type="checkbox" name="inss" checked={formData.inss} onChange={handleInputChange} />
                    </div>

                    <div className={style.divInput}>
                        <label htmlFor="">RL: </label>
                        <input type="checkbox" name="rl" checked={formData.rl} onChange={handleInputChange} />
                    </div>

                    <div className={style.divInput}>
                        <label htmlFor="">VD: </label>
                        <input type="checkbox" name="vd" checked={formData.vd} onChange={handleInputChange} />
                    </div>
                </div>

                {/* <button type='submite' className={style.btn}>Cadastrar</button> */}

            </form>
        </main>
    </section>
  )
}
