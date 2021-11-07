import Link from 'next/link';

export default function ProjectCards() {

    return (
        <div className="flex flex-col space-y-10 mb-10">

            <div className="text-2xl font-semibold text-center">Featured Projects</div>

            {/* List of Projects */}
            {/* Project1 */}
            <div className="lg:max-w-3xl bg-white shadow-lg rounded-lg">
                <div className="pt-10 pb-2">
                    <p className="border-l-8 border-blueaccent text-2xl font-semibold px-5 py-4">Metadata Management System</p>
                    <div className="py-1 flex items-center space-x-2 px-5 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm font-light">Elasticsearch, Kafka, Graphana</p>
                    </div>
                    <p className="my-5 px-3">This is project provides user a one stop platform for Technical Metadata Management, Business Glossary and </p>
                    <div className=" flex px-5 py-4 hover:text-blueaccent ">
                        <a href="https://github.com/ghoshabhik/abhikghosh.in" rel="nofollow noreferrer" target="_blank" className="inline-flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg> <p >Read More</p>
                        </a>
                    </div>
                </div>
            </div>

            {/* Project2 */}
            <div className="lg:max-w-3xl bg-white shadow-lg rounded-lg">
                <div className="pt-10 pb-2">
                    <p className="border-l-8 border-blueaccent text-2xl font-semibold px-5 py-4">Spring Batch Orchestration</p>
                    <div className="py-1 flex items-center space-x-2 px-5 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm font-light">Elasticsearch, Kafka, Graphana</p>
                    </div>
                    <p className="my-5 px-3">This is project provides user a one stop platform for Technical Metadata Management, Business Glossary and </p>
                    <div className=" flex px-5 py-4 hover:text-blueaccent ">
                        <a href="https://github.com/ghoshabhik/abhikghosh.in" rel="nofollow noreferrer" target="_blank" className="inline-flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg> <p >Read More</p>
                        </a>
                    </div>
                </div>
            </div>

            {/* Project3 */}
            <div className="lg:max-w-3xl bg-white shadow-lg rounded-lg">
                <div className="pt-10 pb-2">
                    <p className="border-l-8 border-blueaccent text-2xl font-semibold px-5 py-4">A Stream Processing Engine</p>
                    <div className="py-1 flex items-center space-x-2 px-5 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm font-light">Elasticsearch, Kafka, Graphana</p>
                    </div>
                    <p className="my-5 px-3">This is project provides user a one stop platform for Technical Metadata Management, Business Glossary and </p>
                    <div className=" flex px-5 py-4 hover:text-blueaccent ">
                        <a href="https://github.com/ghoshabhik/abhikghosh.in" rel="nofollow noreferrer" target="_blank" className="inline-flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg> <p >Read More</p>
                        </a>
                    </div>
                </div>
            </div>

            {/* Project4 */}
            <div className="lg:max-w-3xl bg-white shadow-lg rounded-lg">
                <div className="pt-10 pb-2">
                    <p className="border-l-8 border-blueaccent text-2xl font-semibold px-5 py-4">A Log Management System</p>
                    <div className="py-1 flex items-center space-x-2 px-5 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm font-light">Elasticsearch, Kafka, Graphana</p>
                    </div>
                    <p className="my-5 px-3">This is project provides user a one stop platform for Technical Metadata Management, Business Glossary and </p>
                    <div className=" flex px-5 py-4 hover:text-blueaccent ">
                        <a href="https://github.com/ghoshabhik/abhikghosh.in" rel="nofollow noreferrer" target="_blank" className="inline-flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg> <p >Read More</p>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}