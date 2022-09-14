import Image from "next/image";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next/types";
import styled from 'styled-components';
import { useRouter } from "next/router";
import Modal from 'react-modal';
import { gql, useQuery } from "@apollo/client";
import { client } from '../../../services/apollo';
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import EmblaCarouselCustom from "../../../components/EmblaCarouselCustom/EmblaCarouselCustom";

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
    sliderImages: {
      url: string;
      id: string;
    }[];
    tecnologias: {
      id: string;
      nome: string;
      categoria: string;
      imagem: {
        url: string;
      }
    }[];
    processed: {
      category: string;
      items: {
        id: string;
        name: string;
        url: string;
      }[];
    }[];
    techs: string;

  };
}




const SLIDE_COUNT = 4;
const slides = Array.from(Array(SLIDE_COUNT).keys());

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
        <h5>
          {projeto.subtitle}
        </h5>
        <EmblaCarouselCustom images={projeto.sliderImages} />

        <p>
          {projeto.description}
        </p>

        {projeto.techs && (<div className="functionalities">
          <h4>Para além do descrito acima, o software permite:</h4>
          {projeto.techs.split("\n").map(techs => <p key={techs}>{techs}</p>)}
        </div>)}



        {projeto.processed && (
          projeto.processed.map((tech) => (
            <>
              <h3>{tech.category}</h3>
              <TechsContainer key={tech.category}>

                {tech.items.map(item => (
                  <div key={item.id}>
                    <p >{item.name}</p>
                    <Image
                      src={item.url}
                      alt={item.name}
                      layout="fixed"
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </TechsContainer ></>
          ))
        )}
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
              sliderImages {
                url
                id
              }
              tecnologias (orderBy: categoria_ASC) {
                id
                nome
                categoria
                imagem {
                  url
                }
              }
              techs
            }
          }
          `
  });

  var proj: any[] = [];

  data.projeto.tecnologias.map((tech) => {
    if (!proj.find((e: any) => e.category === tech.categoria)) {
      proj.push({
        category: tech.categoria,
        items: [
          {
            id: tech.id,
            name: tech.nome,
            url: tech.imagem.url
          }
        ]
      })
    }
    else {
      var i = proj.findIndex(e => e.category === tech.categoria);
      proj[i].items.push({
        id: tech.id,
        name: tech.nome,
        url: tech.imagem.url
      });
    }
  });

  console.log(proj);

  const proj1 = {
    ...data.projeto,
    processed: proj
  }

  console.log(proj1);

  return {
    props: {
      projeto: proj1
    }
  };
}


export default Project;

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p{
    text-align: justify;
    text-justify: inter-word;
  }

  .functionalities{
    margin-bottom: 36px;
    width: 100%;

    h4{
      margin-top: 36px;
      margin-bottom: 20px;
    }
    p{
      margin: 2px;
    }
  }



  
`;

export const Seta = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TechsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, auto);
  

  margin-bottom: 40px;

  div{
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 6px;

    p{
      margin:0;
    }
  }

  @media (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
    padding: 60px;
  }
`;