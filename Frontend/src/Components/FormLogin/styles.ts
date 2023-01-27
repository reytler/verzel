import styled from 'styled-components';

export const Titlefrm = styled.h3`
    margin-bottom: 50px;
    color: #031d3d;
    font-weight: bold;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45vw;
    margin-left: 15px;
    padding: 9vh 10vw 3vh 10vw;

    .login{
        margin-top: 30px;
        width: 40vw;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    margin: 10vh 10vw 10vh 10vw;
`;

export const Logo = styled.img`
    width: 20vw;
`;

export const Arealogo = styled.div`
    padding: 29vh 15vw 1vh 5vw;
`;

export const Border = styled.div`
    height: 80vh;
    border-right: 2px solid rgba(77,75,152,.3);
`;

export const Button = styled.input`
    font-weight: 500;
    font-size: 1rem;
    height: 50px;
    padding-left: 2.75rem;
    padding-right: 2.75rem;
    border-color: #031d3d;
    border-radius: 3px;
    background-color: #031d3d;
    color: #fff;
    margin: 3rem 0;
    font-family: "Montserrat",sans-serif;
`;
