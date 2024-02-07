import { BlogpostSummary } from "@/types/blogpost";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

export async function fetchPosts(): Promise<Array<BlogpostSummary>> {
  let files = fs.readdirSync(path.join("posts"));
  files = files.filter(file => file.split('.')[1] == "mdx");
  const posts = files.map((file) => {
    const name = file.replace('.mdx', '');
    const fileData = fs.readFileSync(path.join("posts", file), 'utf-8');
    const { data } = matter(fileData);
    return {
      id: name,
      title: data.title,
      summary: data.description,
      cover: data.cover,
      date: data.date,
      author: {
        name: data.author,
        avatar: data.avatar,
      }
    }
  });
  return posts;
}

export async function fetchPost(id: string) {
  let files = fs.readdirSync(path.join("posts"));
  files = files.filter(file => file.split('.')[1] == "mdx");
  const file = files.find(file => file.split('.')[0] == id);
  if (!file) {
    notFound();
  }

  let data = fs.readFileSync(path.join("posts", file), 'utf-8');
  const parsedFile = matter(data);
  return { source: parsedFile.content, metadata: parsedFile.data };
}
