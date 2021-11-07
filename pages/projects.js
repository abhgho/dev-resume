import Link from 'next/link';
import { Layout } from "../components/Layout"
import ProjectCards from '../components/ProjectCards';
import SnippetCards from '../components/SnippetCards';

export default function Projects() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full pt-20">
        <div className="flex space-x-2 items-center">
          <div className="h-4 w-4 bg-blueaccent"></div>
          <p className="uppercase font-semibold text-3xl">Projects</p>

        </div>
        <div className="h-1 w-36 bg-blueaccent"></div>

        <div className="max-w-xl my-10 text-center tracking-tight">
          These are some of my freelance or side projects. Please feel free to take a look around and if you have any question,
          suggestion or comments - please drop a message on the contact page
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-20">
          <div className="lg:col-span-2">
            <ProjectCards />
          </div>
          <div className="border-l-2 border-goldenlight ">
            <SnippetCards />
          </div>
        </div>

      </div>
    </Layout>
  )
}
