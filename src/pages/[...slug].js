// src/pages/[...slug].js
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import MainLayout from "@/components/MainContainer/MainLayout";
import { apisBasePath } from "@/Endpoints/apisBase";

const UnknownPaths = ({ slug = [], issueSlugs, capstoneSlugs, blogSlugs }) => {
  const router = useRouter();

  // console.log("CATCHING", slug);
  // Check if slug is defined
  if (!slug.length) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <p>Loading...</p>
        </div>
      </MainLayout>
    );
  }

  useEffect(() => {
    const currentSlug = slug[0]; // Always get the first segment of the slug

    if (issueSlugs.includes(currentSlug)) {
      router.replace(`/issue-brief/${currentSlug}`);
    } else if (capstoneSlugs.includes(currentSlug)) {
      router.replace(`/capstone-project/${currentSlug}`);
    } else if (blogSlugs.includes(currentSlug)) {
      router.replace(`/blogs/${currentSlug}`);
    } else if (currentSlug === "kautilya-blog") {
      router.replace("/blogs");
    } else {
      router.replace("/404");
    }
  }, [slug, issueSlugs, capstoneSlugs, blogSlugs, router]);

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p>Searching for a Results...</p>
      </div>
    </MainLayout>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug = [] } = params; // Default to an empty array

  // console.log("CATCHING", slug);

  const issuesBriefPath = `${apisBasePath.issuesBreifList}`;
  const capstoneProjectsPath = `${apisBasePath.capstoneProjectsList}`;
  const blogsListPath = `${apisBasePath.blogsList}`;

  try {
    const [issueRes, capstoneRes, blogRes] = await Promise.all([
      axios.get(issuesBriefPath, {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
        },
      }),
      axios.get(capstoneProjectsPath, {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
        },
      }),
      axios.get(blogsListPath, {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
        },
      }),
    ]);

    const issueSlugs = issueRes.data.data.map((each) => each.slug);
    const capstoneSlugs = capstoneRes.data.data.map((each) => each.slug);
    const blogSlugs = blogRes.data.data.map((each) => each.slug);

    return {
      props: {
        slug,
        issueSlugs,
        capstoneSlugs,
        blogSlugs,
      },
    };
  } catch (error) {
    console.error("Error fetching slugs:", error.message);
    return {
      props: {
        slug: [],
        issueSlugs: [],
        capstoneSlugs: [],
        blogSlugs: [],
      },
    };
  }
}

export default UnknownPaths;
