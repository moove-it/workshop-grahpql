import styled from 'styled-components';

const Dot = styled.span`
  height: 80px;
  width: 80px;
  display: table;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 50%;
  text-align: center;

  ${props => props.kind === 'ART' &&
    'background-color: rgb(102, 94, 223);'
  }

  ${props => props.kind === 'HISTORY' &&
    'background-color: rgb(204, 25, 39);'
  }

  ${props => props.kind === 'ECONOMY' &&
    'background-color: rgb(213, 219, 74);'
  }
`;

export default Dot;
