import { Layout } from "../components/Layout"

import Experience from "../components/Experience"

export default function Resume() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full my-10">
        <div className="flex space-x-2 items-center">
          <div className="h-4 w-4 bg-blueaccent"></div>
          <p className="uppercase font-semibold text-3xl">Resume</p>

        </div>
        <div className="h-1 w-36 bg-blueaccent"></div>

        {/* <div className="max-w-xl my-10 text-justify">
          I am currently working as a Data Solution Architect - designing and building secure, highly scabale, fast data platforms to cater to the ever growing need of data-driven organizations. With the years of experience in building data solutions for customers in different domains across the world, I can offer the best practices, industry standards to modernize an existing data platform, and/or to implement data solution on latest technologies like Databricks and other cloud offereings.
        </div> */}

        <div className="xl:max-w-5xl w-full my-10">
          <Experience />
        </div>

        <div className="flex space-x-2 mb-12 w-full items-center justify-center">
          <a className="cursor-pointer rounded-2xl border-2 bg-blueaccent border-blueaccent hover:bg-white hover:text-black text-white py-1  px-4 text-sm">DOWNLOAD RESUME</a>
          <a className="cursor-pointer rounded-2xl border-2 text-sm border-black hover:bg-blueaccent hover:border-blueaccent hover:text-white py-1 px-4">PROJECTS</a>
        </div>
      </div>
    </Layout>
  )
}
