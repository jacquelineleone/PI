import styled from 'styled-components';

export const GlassCard = styled.div`
    height: 450px;
    width: 300px;
    margin: 20px 0 20px 4rem;

    color: #fff;
    padding: 50px 35px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background:rgba(255, 255, 255, 0.2);
    border-radius: 25px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const Flag = styled.img`
    width: 250px;
    margin: 30px;
    margin-bottom: 0;
`

export const Titulo = styled.h1`
    font-size: 25px;
    letter-spacing: 3px;
    text-transform: uppercase;

    margin-bottom: 7px;
`

export const Texto = styled.h2`
    font-size: 18px;
    font-weight: 300;
    line-height: 10px;
    text-shadow: 3px 2px 10px rgba(150, 150, 150, 1);

    margin-bottom: 10px;
    margin-top: 10px;
`

export const Contenedor = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(https://images.pexels.com/photos/3192386/pexels-photo-3192386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonVolver = styled.button`
    padding: 12px 20px;
    margin: 10px 0;
    margin-top: 30px;

    color: #15ABB2;
    font-weight: 500;
    letter-spacing: 2px;
    text-decoration: none;
    font-size: 12px;

    border: none;
    border-radius: 40px;

    cursor: pointer;
`