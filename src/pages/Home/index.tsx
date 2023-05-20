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
  total_count: number;
}

interface IResponse {
  items: IPost[]
}

function Home() {

  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = useCallback(async (query = "") => {
    
    const response = await api.get<IResponse>(`search/issues?q=${query}%20repo:${username}/${repoName}`);

    console.log(response.data);
    console.log(response.data.items);
    setPosts(response.data.items);
  }, []);
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <HomeContainer className="container">
      <Profile />
      <SearchInput 
        getPosts={getPosts}
        postsLength={posts.length}
      />
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