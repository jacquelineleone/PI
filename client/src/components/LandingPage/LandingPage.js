import styled from 'styled-components';

export const Video = styled.video`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`

export const Mask = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 2;
    user-select: none;
    mix-blend-mode: screen;
`

export const Name = styled.h2`
    position: relative;
    z-index: 3;

    font-size: 30px;
    color: #fff;
    text-shadow: 3px 2px 10px rgba(150, 150, 150, 1);
    letter-spacing: 6px;

    margin-bottom: 200px;
`

export const Name2 = styled.h2`
    position: relative;
    z-index: 3;

    font-size: 90px;
    font-weight: 900;
    color: #fff;
    text-shadow: 3px 2px 10px rgba(150, 150, 150, 1);
    letter-spacing: 3px;

    margin-bottom: 130px;
`

export const Container = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`

export const ButtonHome = styled.button`
    padding: 12px 36px;
    margin: 10px 0;
    margin-top: 200px;

    color: #15ABB2;
    font-weight: 500;
    letter-spacing: 2px;
    text-decoration: none;
    font-size: 18px;

    border: none;
    border-radius: 40px;

    cursor: pointer;
`