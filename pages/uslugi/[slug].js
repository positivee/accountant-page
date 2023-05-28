import React from "react";
import { BannerSection } from "../../components/Banner/BannerSection";
import { PageContent, ServiceContent } from "../../styles/servicesPagesStyles";
import Link from "next/link";
import Head from "next/head";

export const getStaticPaths = async () => {
  const data = await require("../data/data.json");

  const paths = data.map((page) => {
    return {
      params: { slug: page.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const res = await require("../data/data.json");
  const data = res.find((page) => page.slug === slug);

  return {
    props: {
      data,
    },
  };
}

export default function staticPages({ data }) {
  return (
    <>
      <Head>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerSection headingName={data.title} />

      <ServiceContent className="container">
        <PageContent>
          <div
            dangerouslySetInnerHTML={{
              __html: data.content,
            }}
          ></div>
        </PageContent>
      </ServiceContent>
    </>
  );
}
