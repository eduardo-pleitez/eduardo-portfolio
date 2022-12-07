import { ImageDataLike } from 'gatsby-plugin-image';

export type IMainBackground = {
  mainbackground: ImageDataLike;
}
export type node = {
  node: {
    id: number;
    title: string;
    images: [
      {
        childImageSharp: {
          fluid: {
            base64: string;
            aspectRatio: number;
            sizes: string;
            src: string;
            srcSet: string;
          };
        };
      }
    ];
    description: string;
    developmentStack: [];
    repository: string;
    website: string;
    };
}
export type ProjectsProps = {
  allProjectsJson: {
  edges: [node]
}
};