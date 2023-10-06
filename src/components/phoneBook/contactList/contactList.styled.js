import styled from 'styled-components';

export const Title = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const MainTitle = styled.h1`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 40px;
  padding-bottom: 20px;
`;

export const ListItem = styled.li`
  flex-basis: calc((100% - 40px) / 5);
  border: 1px solid ${({ theme: { colors } }) => colors.borderListColor};
  padding: 10px;
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => colors.white};
  margin: 10px;
`;

export const Topic = styled.p`
  letter-spacing: 0.02em;
  color: ${({ theme: { colors } }) => colors.black};
  margin-bottom: 16px;
`;

export const ItemButton = styled.button`
  background-color: transparent;
  padding: 8px 16px;
  border-radius: 36px;
  border: none;
  background-color: ${({ theme: { colors } }) => colors.buttonDeleteColor};
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme: { colors } }) => colors.red};
  }
`;

export const MessageWrapper = styled.div`
  margin: 0 auto;
`;

export const Message = styled.p`
  padding: 10px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.36px;
`;

export const IconMessage = styled.img`
  padding: 40px 0;
`;
