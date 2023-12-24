import Container from '../../components/container'
import Header from '../../components/header'
import Head from 'next/head'

import Layout from '../../components/layout'
import markdownToHtml from '../../lib/markdownToHtml'
import { getAllPosts, getHeroPost } from '../../lib/api';
import PostType from '../../interfaces/post';
import React from 'react';
import MoreStories from '../../components/more-stories';
import Post from '../../interfaces/post'
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  allPosts: Post[]
  preview?: boolean
}

export default function Index({ allPosts }: Props) {
  const morePosts = allPosts
  return (
    <Layout>
      <Container>
      <Header></Header>
      <Head>
        <title>{`JG-Blog`}</title>
      </Head>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Books
      </h2>
      <p className="text-lg leading-relaxed mb-4">
        You'll find some thoughts about the book I read, I like all the "basics" for now, like Stephen King, 
        Jules Verne or Maxime Chattam.
      </p>
      <div className="flex items-center justify-center">
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </div>
      <br></br>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tag',
  ], "_posts/books")

  return {
    props: {
      allPosts,
    },
  }
}