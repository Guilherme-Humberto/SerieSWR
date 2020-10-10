import styled from 'styled-components';

export const Container = styled.div`
    margin: 5% 0;
`;

export const ContentSeries = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NameAppTop = styled.p`
    font-size: 40px;
    text-align: left;
    font-weight: bold;
    text-transform: uppercase;
    color: #495057;
    margin: 10px 5%;
    font-family: Roboto;
`;

export const DescAppTop = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #495057;
    margin: 1rem 5%;
    padding-bottom: 5%;
    max-width: 900px;
    font-family: Roboto;
`;

export const ButtonSelectedSerie = styled.button`
    outline: none;
    border: none;
`

export const TextsTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ListSeries = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`

export const NameSerie = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #495057;
    margin: 10px 0;
    max-width: 300px;
    font-family: Roboto;
`;

export const ImageSerie = styled.img`
    height: 370px;
    width: 250px;
    box-shadow: -10px 10px 20px #6c757d;

    :hover {
        opacity: 0.4;
    }
`