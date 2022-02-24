import React from "react";
import styled from "styled-components";
import { Card } from "../Conteudo/Card";
import { MdOutlineScience } from 'react-icons/md';
import { SiPython } from 'react-icons/si';
import { FcStatistics } from 'react-icons/fc';


const StyleConteudo = styled.div`
    display: flex;
    height: 30vh;
    gap: 20px;
    padding: 80px;
`;

export const Conteudo = () => {
    return (
        <StyleConteudo>
            <Card icons={<SiPython/>} titulo="Python" texto="Uma das linguagens que decidimos adicionar em nossa escala curricular" />
            <Card icons={<MdOutlineScience/>} titulo="Data Science" texto="Uma das linguagens que decidimos adicionar em nossa escala curricular" />
            <Card icons={<FcStatistics/>} titulo="Estatisticas" texto="Uma das linguagens que decidimos adicionar em nossa escala curricularo" />
        </StyleConteudo>
    );
};
