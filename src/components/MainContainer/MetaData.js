import React from "react";
import Head from "next/head";

const MetaData = ({
  title = "Kautilya - Master's Program in Public Policy (MPP), Kautilya School of Public Policy, Best MPP Program",
  description = "The Masters in Public Policy (MPP) program is designed for change-makers who wish to build a thriving career in the Public Policy sector. The rigorous program with state-of-the-art infrastructure offered by Kautilya, along with the best international faculty and public policy leaders focuses on education that is relevant, contemporary, and functional.",
  keywords = "The Masters in Public Policy (MPP) program is designed for change-makers who wish to build a thriving career in the Public Policy sector. The rigorous program with state-of-the-art infrastructure offered by Kautilya, along with the best international faculty and public policy leaders focuses on education that is relevant, contemporary, and functional.",
  image = "https://kspp.edu.in/images/administration.jpg",
}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="./favicon.png" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta
          property="og:url"
          content="https://nextdev.gitam.edu/kautilya-next/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Nofollow tag */}
        {/* <meta name="robots" content="nofollow" /> */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>
    </>
  );
};

export default MetaData;
