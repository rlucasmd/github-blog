import { useParams } from "react-router-dom";
import { PostContent } from "./components/PostContent";
import { PostHeader } from "./components/PostHeader";
import { PostPageContainer } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { IPost } from "../Home";

const username = import.meta.env.VITE_USERNAME;
const repoName = import.meta.env.VITE_REPO_NAME;

const post = {
  id: "126",
  title: "JavaScript data types and data structures",
  content: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\r\n\r\n## Dynamic typing\r\nJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:\r\n\r\n```js\r\nlet foo = 42;   // foo is now a number\r\nfoo = 'bar';    // foo is now a string\r\nfoo = true;     // foo is now a boolean\r\n```",
  publishedAt: "há 1 dia",
  author: "ranieri3232",
  comments: 5,
};

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState<IPost>({} as IPost);
  const [isLoading, setIsLoading] = useState(true);

  const getPostData = useCallback(async () => {
    setIsLoading(true);
    const response = await api.get(`repos/${username}/${repoName}/issues/${id}`);
    setPost(response.data);
    setIsLoading(false);
    console.log(response);
  }, []);
  useEffect(() => {
    getPostData();
  }, []);
  console.log(id);
  return (
    <PostPageContainer className="container">
      <PostHeader
        postData={post}
        isLoading={isLoading}
      />
      <PostContent
        body={post.body}
      />
    </PostPageContainer>
  );
}

export { Post };