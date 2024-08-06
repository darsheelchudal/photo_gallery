import React from "react";
import Gallery from "@/app/components/Gallery";

type Props = {
  params: {
    term: string;
  };
};

export const generateMetadata = ({ params: { term } }: Props) => {
  console.log(term);
  return {
    title: `Results for ${term}`,
    description: `Explore the search results for ${term}`,
  };
};
const searchResults = ({ params: { term } }: Props) => {
  return <Gallery topic={term} />;
};

export default searchResults;
