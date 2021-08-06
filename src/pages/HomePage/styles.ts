import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 50vh;
    margin:0 25vw;
    
    .parallax{
        margin-top: 6rem;

        &-firstLayer{
            background: #172A3A;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .name{
                background: tomato;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                >p{
                    color: #BBC8CA;
                }
            }
    }
   

}
`;