/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "components/Header";
import Hero from "components/Hero";
import About from "components/About";
import WorkExperience from "components/WorkExperience";
import Skills from "components/Skills";
import Projects from "components/Projects";
import ContactMe from "components/ContactMe";
import Link from "next/link";
import { GetStaticProps } from "next";
import { PageInfo, Experience, Skill, Project, Social } from "typing";
import { fetchPageInfo } from "utils/fetchPageInfo";
import { fetchExperiences } from "utils/fetchExperiences";
import { fetchSocials } from "utils/fetchSocials";
import { fetchProjects } from "utils/fetchProjects";
import { fetchSkills } from "utils/fetchSkills";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  projects,
  socials,
  skills,
}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Martin portfolio</title>
      </Head>
      {/* Header */}
      <Header socials={socials} />
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      {/* Experience*/}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src="https://media.licdn.com/dms/image/D4D03AQEIrjOqhBJsOw/profile-displayphoto-shrink_800_800/0/1668980452107?e=1679529600&v=beta&t=XNoFHDGrXM2g6ZZouZC9dc8IfZRumONEE1lMcCH1ZvA"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
