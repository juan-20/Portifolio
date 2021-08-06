import styled from 'styled-components';

export const Container = styled.div`
>nav{
    a{
        cursor: pointer;
        color: #BBC8CA;
        :hover{
            filter: brightness(0.6);
        }
    }

    height: 6.25rem;
    background: #363636;

    display: flex;
    align-items: center;
    
    .cover{
        width: 60%;
    >a {
        >img{
            height: 4.125rem;
            margin: 1rem;
        }
    }
    }

    .links{
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        >a{
            text-decoration: none;
        }

        @media only screen and (max-width: 600px) {
            display: none;
        }
        
    }
    
    >.icons{
        width: 10%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        @media only screen and (max-width: 600px) {
            >a{
                padding-left: 20px;
            }
        }
    }




}
`;
