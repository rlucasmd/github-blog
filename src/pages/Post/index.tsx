import { PostContent } from "./components/PostContent";
import { PostHeader } from "./components/PostHeader";
import { PostPageContainer } from "./styles";

const post = {
  id: "126",
  title: "JavaScript data types and data structures",
  content: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\r\n\r\n## Dynamic typing\r\nJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:\r\n\r\n```js\r\nlet foo = 42;   // foo is now a number\r\nfoo = 'bar';    // foo is now a string\r\nfoo = true;     // foo is now a boolean\r\n```",
  publishedAt: "há 1 dia",
  author: "ranieri3232",
  comments: 5,
};

function Post(){
  return (
    <PostPageContainer className="container">
      <PostHeader 
        title={post.title}
        publishedAt={post.publishedAt}
        author={post.author}
        comments={post.comments}
      />
      <PostContent 
        content={post.content}
      />
    </PostPageContainer>  
  );
}

export { Post };