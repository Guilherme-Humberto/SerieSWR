import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Fetcher from '../../api/Fetcher';

import {
  Container,
  ContentSeries,
  ListSeries,
  TextsTop,
  NameAppTop,
  DescAppTop,
  ButtonSelectedSerie,
  NameSerie,
  ImageSerie
} from './styles'


const Components: React.FC = () => {
  const router = useRouter()
  const { data } = Fetcher(`shows`)

  if(!data) return <h1>Carregando...</h1>

  return (
      <Container>
        <TextsTop>
          <NameAppTop>SerieSWR</NameAppTop>
          <DescAppTop>
            O SWR revalida automaticamente os dados da origem assim que os dados são renderizados do cache, isso tornará as páginas muito mais rápidas e após a renderização da página os dados são atualizados com o mais recente.
          </DescAppTop>
        </TextsTop>
        <ListSeries>
          {data.slice(0, 15).map((item, index) => (
            <ContentSeries style={{display: "flex", flexDirection: "column"}} key={item.id}>
              <NameSerie>{item.name}</NameSerie>
              <ButtonSelectedSerie onClick={() => router.push(`SerieDetails/?${item.id}`)}>
                <ImageSerie src={item.image.original} alt=""/>
              </ButtonSelectedSerie>
            </ContentSeries>
          ))}
        </ListSeries>
      </Container>
  );
}
export default Components;