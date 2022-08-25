import Image from "next/image";
import { NextPage } from "next/types";
import { Container, Project } from "./styles";
import { useRouter } from "next/router";
import Modal from 'react-modal';
import { useState } from "react";
import { GetStaticProps } from 'next'
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import { client } from '../../services/apollo';

interface HomePageProps {
  projects?: string[];
}

const GET_PROJECTS_QUERY = gql`
  query {
    projetos(stage: PUBLISHED) {
    id
    title
    slug
    subtitle
    description
    mainImage {
      url
    }
    visible
  }
  }
`

interface GetProjectsQueryResponse {
  projetos: {
    id: string;
    title: string;
    slug: string;
    subtitle: string;
    description: string;
    mainImage: {
      url: string;
    }
    visible: boolean;
  }[];
}

const Showcase: NextPage<GetProjectsQueryResponse> = ({ projetos }) => {
  let router = useRouter();
  let subtitle: any;

  return (
    <>
      <Container id="#showcase">
        {projetos !== undefined && projetos.map((project: any) => (
          <Link key={project} href={`/showcase/${project.slug}`} >
            <a>
              <Project >

                <div>
                  <Image
                    src={project.mainImage.url}

                    alt={project.mainImage.title}
                    layout="fill"
                  />
                </div>
                <div>
                  <h3>{project.title}</h3>
                  <h5>{project.subtitle}</h5>
                </div>

              </Project>
            </a>
          </Link>

        ))}


      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  //fetch data from an API

  const { data } = await client.query<GetProjectsQueryResponse>({
    query: GET_PROJECTS_QUERY
  });



  return {
    props: {
      projetos: data.projetos,
      revalidate: 1
    }
  }
}

export default Showcase;