import fs from 'fs';
const path = require("path");
const matter = require('gray-matter');
import Link from "next/link"
import Layout from "../../components/Layout"
import Post from "../../components/Post"
import { sortByDate } from "../../utils"

export default function BlogPage({ posts }) {
    // console.log(posts)
    return (
        <Layout>
            <h1 className="text-3xl border-b-4 p-5 font-bold">Blogs</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) =>
                    <Post post={post} key={index} />
                )}
            </div>
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
            posts: posts.sort(sortByDate),
        },
    }
}