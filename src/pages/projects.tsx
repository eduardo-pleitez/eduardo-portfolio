import * as React from 'react';
import { HeadFC, PageProps, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { ProjectsProps } from '../interfaces/commonInterfaces';
import Image from 'gatsby-image';

const ProjectsPage: React.FC<PageProps> = () => {
  const data: ProjectsProps = useStaticQuery(
    graphql`
      query {
        allProjectsJson {
          edges {
            node {
              id
              title
              images {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              description
              developmentStack
              repository
              website
            }
          }
        }
      }
    `
  );
  const projects = data.allProjectsJson.edges;
  return (
    <Layout>
      <div className='flex justify-center'>
        <div className='lg:px-16 md:px-8 px-2 py-6 shadow-lg rounded-lg bg-white md:max-w-full md:w-auto w-full'>
          <div>
            <h1 className='font-bold lg:text-5xl sm:text-3xl text-xl mt-4 md:mb-8 mb-2 text-center'>
              Projects
            </h1>
          </div>
          {projects.map((project) => {
            return (
              <div key={project.node.id} className='mb-10'>
                <div className='flex md:items-center md:flex-row flex-col'>
                  <div className='md:w-7/12 w-full mb-4 mr-6'>
                    <h2 className='font-semibold sm:text-xl text-lg lg:mb-4 mb-2'>
                      {project.node.title}
                    </h2>
                    <p className='md:my-3 my-1'>
                      <a
                        href={project.node.repository}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-500 underline md:text-lg text-base'
                      >
                        Project repository
                      </a>
                    </p>
                    <p className='md:my-3 my-1'>
                      <a
                        href={project.node.website}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-500 underline md:text-xl text-base'
                      >
                        Project website
                      </a>
                    </p>
                  </div>
                  <div className='lg:mx-7'>
                    {project.node.images.length > 0 ? (
                      <a
                        href={project.node.website}
                        title='Go to the website'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Image
                          fluid={project.node.images[0].childImageSharp.fluid}
                          alt={project.node.title}
                          className='md:w-72 md:h-auto w-full h-auto border border-black'
                        />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => <title>Projects</title>;
