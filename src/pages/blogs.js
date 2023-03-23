import Head from 'next/head';
import { GraphQLClient, gql } from 'graphql-request';
import styles from '@/styles/Blogs.module.css';
import BlogCard from '../components/BlogCard';

// GraphQL client
const graphcms = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clf4fo6ho4xew01umcz8reajm/master'
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

// This function is used by Next.js to pre-render the page
// It gets the data needed to render the page and passes it to the component as props
export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY); // Send the GraphQL query to the API and get the response
  return {
    props: {
      posts, // Pass the retrieved data as props to the component
    },
    revalidate: 10, // The page will be re-rendered after 10 seconds
  };
}

export default function Blogs({ posts }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
      </main>
    </div>
  );
}