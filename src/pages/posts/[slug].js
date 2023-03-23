import { GraphQLClient, gql } from 'graphql-request';
import styles from '@/styles/Slug.module.css';
import Image from 'next/image';

// GraphQL client instance with the API endpoint URL
const graphcms = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clf4fo6ho4xew01umcz8reajm/master'
);

// GraphQL query for retrieving a single blog post given a slug
const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

// GraphQL query for retrieving all blog post slugs
const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

// Next.js function for generating dynamic paths for blog posts at build time
export async function getStaticPaths() {
  // Fetching all blog post slugs from the GraphQL API using the SLUGLIST query
  const { posts } = await graphcms.request(SLUGLIST);

  // Mapping the slugs to an array of objects that represent the dynamic routes of the blog posts
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  // Setting fallback to false so that any paths that don't have a corresponding blog post will result in a 404 page
  return {
    paths,
    fallback: false,
  };
}

// Next.js function for fetching the data for a specific blog post and passing it to the BlogPost component
export async function getStaticProps({ params }) {
  // Retrieving the slug from the params object
  const slug = params.slug;

  // Fetching the blog post data from the GraphQL API using the QUERY query and the slug parameter
  const data = await graphcms.request(QUERY, { slug });

  // Extracting the post object from the data
  const post = data.post;

  // Passing the post data as props to the BlogPost component, and setting the revalidation time to 10 seconds
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({ post }) {
  return (
    <main className={styles.blog}>
      <img className={styles.cover} src={post.coverPhoto.url} alt="" />
      <div className={styles.title}>
        <img className={styles.avatar} src={post.author.avatar.url} alt="" />
        <div className={styles.authtext}>
          <h6>By {post.author.name}</h6>
          <h6 className={styles.date}> {post.datePublished}</h6>
        </div>
        <h2>{post.title}</h2>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        ></div>
      </div>
    </main>
  );
}
