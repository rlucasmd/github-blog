import { useCallback, useEffect, useState } from "react";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { HomeContainer, PostsContainer } from "./styles";
import { api } from "../../lib/axios";

const username = import.meta.env.VITE_USERNAME;
const repoName = import.meta.env.VITE_REPO_NAME;

export interface IPost {
  body: string;
  comments: number;
  created_at: string;
  html_url: string;
  title: string;
  id: number;
  published_at: string;
  user: {
    login: string;
  };
  number: number;
}

interface IResponse {
  items: IPost[]
}

function Home() {

  const [posts, setPosts] = useState<IPost[]>([]);

  //   const posts = [
  //     {
  //       id: "123",
  //       title: "JavaScript data types and data structures",
  //       content: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.",
  //       publishedAt: "há 1 dia"
  //     },
  //     {
  //       id: "124",
  //       title: "JavaScript data types and data structures",
  //       content: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.",
  //       publishedAt: "há 1 dia"
  //     }
  //   ];
  const getPosts = useCallback(async (query = "") => {
    // const data = await api.get(`search/issues?q=${query}label:published%20repo:${username}/${repoName}`);
    const response = await api.get<IResponse>(`search/issues?q=${query}%20repo:${username}/${repoName}`);

    // console.log(data);
    console.log(response.data.items);
    setPosts(response.data.items);
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
            body={post.body}
            published_at={post.published_at}
            number={post.number}
          />
        ))}
      </PostsContainer>
    </HomeContainer>
  );
}

export { Home };