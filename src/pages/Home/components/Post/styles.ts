import { Link } from "react-router-dom";
import styled from "styled-components";

const PostContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid transparent;
  border-radius: 10px;
  background: ${({theme}) => theme.colors["base-post"]};

  text-decoration: none;
  padding: 2rem;

  gap: 1.25rem;

  max-height: 16.25rem;

  transition: 0.4s;

  &:hover{
    border-color: ${({theme}) => theme.colors["base-label"]};
  }

  >div{
    display: flex;
    justify-content: space-between;
    >h3{
      max-width: 80%;
    }
  }
  p{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;

export { PostContainer };