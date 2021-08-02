import fs from 'fs';
const path = require("path");
const matter = require('gray-matter');
import Layout from "../components/Layout"

export default function HomePage({ posts }) {
  console.log(posts)
  return (
    <Layout>
      <h1>Hello World</h1>
    </Layout>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(fileName => {
    const slug = fileName.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join("posts", fileName), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter
    }
  })

  // console.log(posts)

  return {
    props: {
      posts
    },
  }
}