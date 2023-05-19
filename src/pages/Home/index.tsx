import { useCallback, useEffect } from "react";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { HomeContainer, PostsContainer } from "./styles";
import { api } from "../../lib/axios";

const username = import.meta.env.USERNAME;
const repoName = import.meta.env.REPO_NAME;

function Home() {

  const posts = [
    {
      id: "123",
      title: "JavaScript data types and data structures",
      content: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.",
      publishedAt: "há 1 dia"
    },
    {
      id: "124",
      title: "JavaScript data types and data structures",
      content: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.",
      publishedAt: "há 1 dia"
    }
  ];
  const getPosts = useCallback(async (query = "") => {
    const data = await api.get("/users");

  }, []);
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <HomeContainer className="container">
      <Profile />
      <SearchInput />
      <PostsContainer>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        ))}
      </PostsContainer>
    </HomeContainer>
  );
}

export { Home };