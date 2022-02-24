import React from 'react';
import styled from 'styled-components';
import { Item } from './Item';
import python from './imagens/python.jpg';
import science from './imagens/science.jpg';
import estatisticas from './imagens/estatisticas.jpg';


const StyleDetalheConteudo = styled.div`

`;

export const DetalheConteudo = () => {
    return(
        <StyleDetalheConteudo>
            <Item
                titulo='PYTHON'
                texto='Python é uma linguagem de programação de Um cidadão fez voto de desapego e pobreza. Dispôs de todos os seus bens e propriedades, reservou para si apenas duas tangas, e saiu pelo mundo afora em busca de todos os sábios, medindo na verdade o desapego de cada um. Levava apenas uma tanga no corpo.
                Estava convencido de não encontrar quem ganhasse de si em despojamento, quando soube de um velho guru. Tomando as direções, parte ao encontro do velho sábio.
                Quando lá chegou, tristeza e decepção! Encontrou terras bem cuidadas, um palácio faustoso, muita riqueza, muita pompa. Indignado, procura pelo guru. Um velho servo lhe diz que ele está em uma ala dos magníficos jardins com seus discípulos, estudando desapego. Como era costume da casa Ter gentileza para com os hóspedes, o servo convida o andarilho para o banho, repouso e refeição, antes de se dirigir à presença do sábio.
                '
                imagem={python}
                posicaoImagem='direita'
            />
            <Item
                titulo='SCIENCE'
                texto='CPython é uma linguagem de programação de Um cidadão fez voto de desapego e pobreza. Dispôs de todos os seus bens e propriedades, reservou para si apenas duas tangas, e saiu pelo mundo afora em busca de todos os sábios, medindo na verdade o desapego de cada um. Levava apenas uma tanga no corpo.
                Estava convencido de não encontrar quem ganhasse de si em despojamento, quando soube de um velho guru. Tomando as direções, parte ao encontro do velho sábio.
                Quando lá chegou, tristeza e decepção! Encontrou terras bem cuidadas, um palácio faustoso, muita riqueza, muita pompa. Indignado, procura pelo guru. Um velho servo lhe diz que ele está em uma ala dos magníficos jardins com seus discípulos, estudando desapego. Como era costume da casa Ter gentileza para com os hóspedes, o servo convida o andarilho para o banho, repouso e refeição, antes de se dirigir à presença do sábio.
                iência de dados é uma área interdisciplinar voltada para o estudo e a análise de dados econômicos, financeiros e sociais, estruturados e não-estruturados, que visa a extração de conhecimento, detecção de padrões e/ou obtenção de insights para possíveis tomadas de decisão.'
                imagem={science}
                posicaoImagem='esquerda'
            />
            <Item
                titulo='ESTATISTICAS'
                texto='EstaCPython é uma linguagem de programação de Um cidadão fez voto de desapego e pobreza. Dispôs de todos os seus bens e propriedades, reservou para si apenas duas tangas, e saiu pelo mundo afora em busca de todos os sábios, medindo na verdade o desapego de cada um. Levava apenas uma tanga no corpo.
                Estava convencido de não encontrar quem ganhasse de si em despojamento, quando soube de um velho guru. Tomando as direções, parte ao encontro do velho sábio.
                Quando lá chegou, tristeza e decepção! Encontrou terras bem cuidadas, um palácio faustoso, muita riqueza, muita pompa. Indignado, procura pelo guru. Um velho servo lhe diz que ele está em uma ala dos magníficos jardins com seus discípulos, estudando desapego. Como era costume da casa Ter gentileza para com os hóspedes, o servo convida o andarilho para o banho, repouso e refeição, antes de se dirigir à presença do sábio.
                iência de dados é uma área interdisciplinar voltada para o estudo e a análise de dados econômicos, financeiros e sociais, estruturados e não-estruturados, que visa a extração de conhecimento, detecção de padrões e/ou obtenção de insights para possíveis tomadas de decisão.tística é a ciência que utiliza as teorias probabilísticas para explicar a frequência da ocorrência de eventos, tanto em estudos observacionais quanto em experimentos para modelar a aleatoriedade e a incerteza de forma a estimar ou possibilitar a previsão de fenômenos futuros, conforme o caso.'
                imagem={estatisticas}
                posicaoImagem='direita'
            />
        </StyleDetalheConteudo>
    )
}