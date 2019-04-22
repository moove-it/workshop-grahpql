import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  flex: 1 1 25%;
  padding: 0 25px;
  margin: 10px;
  height: 350px;
  max-width: 250px;
  border-width: 0;
  border-color: rgba(255,255,255,1);
  border-radius: 6px;
  border-style: solid;
  box-shadow: 0px 4px 12px 0px rgba(37,56,88,0.25);
  background: linear-gradient(135deg, #f8f8f8 0%, #efefef 100%);
  transition: all .1s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

export default Container;
