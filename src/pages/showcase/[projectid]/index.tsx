import Image from "next/image";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next/types";
import { Container, Seta } from "./styles";
import { useRouter } from "next/router";
import Modal from 'react-modal';
import { gql, useQuery } from "@apollo/client";
import { client } from '../../../services/apollo';
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const GET_PROJECTS_ID_QUERY = gql`
  query {
    projetos(stage: PUBLISHED) {
      slug
    }
  }
`

interface GetProjectsQueryResponse {
  projetos: {
    slug: string;
  }[];
}

interface GetProjectQueryResponse {
  projeto: {
    id: string
    slug: string;
    subtitle: string;
    title: string;
    description: string;
    mainImage: {
      url: string;
    }
  };
}

const Project: NextPage<GetProjectQueryResponse> = ({ projeto }) => {
  let router = useRouter();

  return (
    <>
      <Seta>
        <Link href="/showcase">
          <a>
            <FiArrowLeft />
          </a>
        </Link>
      </Seta>
      <Container>

        <h1>
          {projeto.title}
        </h1>
        <h3>
          {projeto.subtitle}
        </h3>
        <Image
          src={projeto.mainImage.url}
          alt={projeto.title}
          layout="fixed"
          width={500}
          height={500}
        />

        <p>
          {projeto.description}
        </p>
      </Container>
    </>
  );
}

export async function getStaticPaths() {

  const { data } = await client.query<GetProjectsQueryResponse>({
    query: GET_PROJECTS_ID_QUERY
  });



  return {
    fallback: 'blocking',
    paths: data.projetos.map(project => ({
      params: { projectid: project.slug.toString() }
    }))
  }
}

export async function getStaticProps(context: GetStaticPropsContext<{ projectid: string }>) {
  //fetch data for a single meetup
  const projectid = context.params?.projectid;  //acesso to route id from folder [meetupId], this away, because can't use useRouter outsize a component( inside getStaticProps)

  console.log(projectid);

  const { data } = await client.query<GetProjectQueryResponse>({
    variables: {
      slug: projectid
    },
    query: gql`
          query projeto ($slug: String) {
            projeto(where: {slug: $slug}) {
              id
              slug
              subtitle
              title
              description
              mainImage {
                url
              }
            }
          }
        `
  });


  return {
    props: {
      projeto: data.projeto
    }
  };
}


export default Project;