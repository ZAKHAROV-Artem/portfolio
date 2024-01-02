import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";

export const components: PortableTextComponents = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="my-2 text-4xl md:text-5xl">{children}</h1>,
    h2: ({ children }) => <h2 className="my-2 text-3xl md:text-4xl">{children}</h2>,
    h3: ({ children }) => <h3 className="my-2 text-2xl md:text-3xl">{children}</h3>,
    h4: ({ children }) => <h4 className="my-2 text-xl md:text-2xl">{children}</h4>,
    h5: ({ children }) => <h5 className="my-2 text-lg md:text-xl">{children}</h5>,
    h6: ({ children }) => <h6 className="my-2 text-md md:text-lg">{children}</h6>,
    blockquote: ({ children }) => (
      <blockquote className="border-l pl-2 border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },

  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noindex nofollow" : ""}
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="[&>*]:ml-5">{children}</ul>,
    number: ({ children }) => <ol className="[&>*]:ml-5">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol className="mx-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disc" }}>{children}</li>
    ),

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};
