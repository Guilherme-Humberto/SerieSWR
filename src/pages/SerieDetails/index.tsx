import React from 'react';
import { useRouter } from 'next/router'

import Fetcher from '../../hooks/Fetcher';
import { 
  Container,
  DetailsTexts,
  TitleDetails,
  ImgDetails,
  DescDetails,
  NetWorks,
  TextNetWorks,
  TextTypeNetwork,
  ContainerGenres,
  TextTypeGenre,
  Genres,
  Buttons,
  Button
 } from './styles';

const SerieDetails: React.FC = () => {
  const router = useRouter()
  const id = router.asPath.substr(14)

  const { data } = Fetcher(`shows/${id}`)

  if(!data) return <h1>Carregando...</h1>

  console.log(data)

  return (
      <Container>
          <ImgDetails src={data.image.original} alt=""/>
          <DetailsTexts>
              <TitleDetails>{data.name}</TitleDetails>
                <hr />
              <DescDetails>
                {data.summary
                  .replace("<p>", "")
                  .replace("</p>", "")
                  .replace("<b>", "")
                  .replace("</b>", "")
                }
              </DescDetails>

              <NetWorks>
                <TextTypeNetwork>Contry: </TextTypeNetwork>
                <TextNetWorks>{data.network.country.name} /</TextNetWorks>
                <TextTypeNetwork>Code: </TextTypeNetwork>
                <TextNetWorks>{data.network.country.code} /</TextNetWorks>
                <TextTypeNetwork>TimeZone: </TextTypeNetwork> 
                <TextNetWorks>{data.network.country.timezone} /</TextNetWorks>
              </NetWorks>
              
              <ContainerGenres>
                <TextTypeGenre>Genres: </TextTypeGenre>
                {data.genres.map((item, index) => (
                  <div key={index}>
                    <Genres>{item} /</Genres>
                  </div>
                ))}
              </ContainerGenres>

              <Buttons>
                <Button onClick={() => router.push(data.url)}>TvMaze</Button>
                <Button onClick={() => router.push(data.officialSite)}>Learn More</Button>
              </Buttons>
          </DetailsTexts>
      </Container>
  );
}

export default SerieDetails;
