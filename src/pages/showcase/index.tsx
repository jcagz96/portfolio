import Image from "next/image";
import { NextPage } from "next/types";
import styled from 'styled-components';
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
    capa {
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
    capa: {
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
        {projetos && projetos.map((project: any) => (
          <Link key={project.id} href={`/showcase/${project.slug}`} >
            <a>
              <Project >

                <div>
                  {project.capa && (<Image
                    src={project.capa.url}
                    alt={project.slug}
                    layout="fill"
                  />)}

                </div>
                <div>
                  <h3>{project.title}</h3>
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

export const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  
  grid-auto-rows: minmax(100px, auto);

  @media (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
    padding: 60px;
  }
`;

export const Project = styled.div`
  width: 100%;
  position: relative;
  background: ${(props) => props.theme.colors.header};
  border-radius:20px;
  cursor: pointer;
  

  > div:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    position: relative;
    height: 300px;
    
    overflow:hidden;

    img{
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;

      -webkit-transform: scale(1);
	    transform: scale(1);
	    -webkit-transition: .3s ease-in-out;
	    transition: .3s ease-in-out;

      &:hover {
	      -webkit-transform: scale(1.3);
	      transform: scale(1.3);
      }

    }
    & + div{ 
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 390px){
      height: 200px;
    }

}
`;