import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const DetailsTexts = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5% 0;

    hr {
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 2px solid #495057;
        width: 600px;
        margin: 0 5%
    }
`

export const ImgDetails = styled.img`
    height: 550px;
    margin: 3% 0;
    box-shadow: -10px 10px 20px #6c757d;
`;

export const TitleDetails = styled.p`
    font-size: 55px;
    text-align: left;
    font-weight: bold;
    text-transform: uppercase;
    color: #495057;
    margin: 10px 5%;
    font-family: Roboto;
`;

export const DescDetails = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: #495057;
    margin: 1rem 5%;
    max-width: 800px;
    font-family: Roboto;
`;

export const NetWorks = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 5%;
    flex-wrap: wrap;
    gap: 10px;
`

export const TextNetWorks = styled.p`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    color: #495057;
`

export const TextTypeNetwork = styled.p`
    font-family: Roboto;
    font-size: 24px;
    font-weight: bold;
    color: #495057;
`

export const ContainerGenres = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 5%;
    gap: 10px;
`

export const Genres = styled.p`
    font-family: Roboto;
    font-size: 25px;
    font-weight: 500;
    color: #495057;
`
export const TextTypeGenre = styled.p`
    font-family: Roboto;
    font-size: 28px;
    font-weight: bold;
    color: #495057;
`

export const Buttons = styled.div`
    display: flex;
    margin: 5%;
    gap: 20px;
`
export const Button = styled.button`
    width: 150px;
    padding: 10px;
    background: transparent;
    border: 3px solid #495057;
    border-radius: 25px;
    color: #495057;
    outline: none;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;

    :hover {
        background: #495057;
        color: #e1e1e1;
    }
`