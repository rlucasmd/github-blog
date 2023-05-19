/* eslint-disable react/no-children-prop */
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PostContentContainer } from "./styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface PostContentProps {
  body: string;
}

function PostContent({ body }: PostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown
        children={body}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dracula as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </PostContentContainer>
  );
}

export { PostContent };