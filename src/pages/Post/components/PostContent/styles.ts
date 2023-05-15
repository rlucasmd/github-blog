import styled from "styled-components";

const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;

  margin-bottom: 8rem;

  img{
    width: 100%;
  }

  h1, h2, h3{
    color: ${({theme}) => theme.colors["blue"]};
  }

  ul{
    list-style: inherit;
    padding-left: 1.5rem;
  }

  pre{
    background: ${({theme}) => theme.colors["base-post"]};
    padding: 1rem;

    >div{
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code{
        font-family: "firaCode", monospace !important;
        line-height: 100% !important;
      }
    }
  }
`;


export { PostContentContainer };