import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import React from "react";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { PageContaier } from "@/components/misc";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Blog = () => {
  const posts = allPosts.sort((a: any, b: any) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div className="flex-1 space-y-4 py-8 pt-6">
      <div className="flex items-center justify-between space-y-2 py-8">
        <h2 className="text-3xl font-bold tracking-tight">Blog</h2>
        <div className="flex items-center space-x-2"></div>
      </div>
      <Separator/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post: any, idx: number) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;

function PostCard(post: Post) {
  return (
    <Link href={post.url}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <time
            dateTime={post.date}
            className="mb-2 block text-xs text-gray-600"
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <div
            className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: post.body.html }}
          />
        </CardContent>
      </Card>
    </Link>
  );
}
