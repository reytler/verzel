import styled from "styled-components";

export const Button = styled.input`
    font-weight: 600;
    font-size: 1rem;
    height: 40px;
    padding-left: 2.75rem;
    padding-right: 2.75rem;
    border-color: #031d3d;
    border-radius: 3px;
    background-color: #031d3d;
    color: #fff;
    font-family: "Montserrat",sans-serif;
`;

export const Wrapped = styled.div`
    display: flex;
    justify-content: center;
    .input {
        margin-top: 13px;
        margin-right: 5px;
    }

    .form {
        display:flex; 
        justify-content: flex-end; 
        flex-wrap: wrap
    }

    .formcolumn {
        display:flex; 
        justify-content: flex-end; 
        flex-wrap: wrap;
        flex-direction: column;
    }

    .ou{
        display: flex;
        text-align: center;
        align-items: flex-end;
        margin-top: 20px;
        margin-right: 5px;
    }
`;