import React from "react";
import styled from "styled-components";

import Item from './Components/Item';

const Projects = () => {
  return (
    <div className="projects">
        <Title className="title">My Projects</Title>
        <GridContainer>
            <Item />        
            <Item />        
            <Item />        
            <Item />        
            <Item />        
            <Item />        
            <Item />        
            <Item />        
            <Item />        
            <Item />        
        </GridContainer>
    </div>
  );
};

const GridContainer = styled.div`
    display: grid;
    grid-gap: 5rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: minmax(100, auto);
`;

const Title = styled.h1`
    display: flex;
    justify-content: center;
`

export default Projects;
