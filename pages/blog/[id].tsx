import { Post } from '../../types/Post';

type Props = {
    post: Post
}

const BlogItem = ({ post }: Props) => {
    return(
        <div>
            <h1>Blog</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default BlogItem;

const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts: Post[] = await res.json()

    const paths = posts.map(post => ({
        params: {
            id: post.id.toString()
        }
    }))

    return { paths, fallback: false}
}

const getStaticProps = async () => {

}