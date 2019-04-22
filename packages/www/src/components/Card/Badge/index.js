import styled from 'styled-components';

const Badge = styled.span`
  border-radius: 30px;
  padding: 2px 8px;
  margin: 0 0 0 20px;
  font-size: 12px;
  font-weight: 200;
  opacity: 0.8;
  width: fit-content;
  color: white;

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

export default Badge;
