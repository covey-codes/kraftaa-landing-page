import { ReactNode } from "react";

interface Header {
  key: string;
  title: ReactNode;
}

export const headers: Header[] = [
  {
    key: "getInTouch",
    title: (
      <>
        Get in touch with the best{" "}
        <span className="text-[#6828B0]">Artisans</span> that
        <br />
        offer <span className="text-[#6828B0]">Quality</span> services
      </>
    ),
  },
  {
    key: "whyChoose",
    title: (
      <>
        Why choose <span className="text-[#6828B0]">Kraftaa</span>
      </>
    ),
  },
  {
    key: "findArtisan",
    title: (
      <>
        Find Artisan by <span className="text-[#6828B0]">Location</span>
      </>
    ),
  },
  {
    key: "howKraftaaWorks",
    title: <>How Kraftaa Works</>, // Wrap plain text in a fragment for consistency
  },
];
