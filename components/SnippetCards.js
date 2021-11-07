

export default function SnippetCards() {

    return (
        <div className="flex flex-col space-y-1 mb-10">

            <div className="text-2xl font-semibold ml-5">Snippets</div>

            {/* List of Snippets */}
            <div>
                <a href="https://dev.to/abhgho/make-peace-with-github-using-powershell-514d" rel="nofollow noreferrer" target="_blank"
                    className="pl-5"
                >
                    <div className="ml-5 w-64 px-4 py-3 text-sm bg-white rounded-md shadow-xl border-l-8 border-blueaccent">
                        <strong>Make peace with Github using Powershell -</strong> script to create a github repo from commandline.
                    </div>
                </a>
            </div>

            <div>
                <a href="https://gist.github.com/ghoshabhik/c5497682fd07eb627b3fbff3e8d5776b" rel="nofollow noreferrer" target="_blank"
                    className="pl-5"
                >
                    <div className="ml-5 w-64 px-4 py-3 text-sm bg-white rounded-md  shadow-xl border-l-8 border-blueaccent">Project 2: Python Automation to clean up disk space Somthing a little longer</div>
                </a>
            </div>

            <div>
                <a href="https://gist.github.com/ghoshabhik/c5497682fd07eb627b3fbff3e8d5776b" rel="nofollow noreferrer" target="_blank"
                    className="pl-5"
                >
                    <div className="ml-5 w-64 px-4 py-3 text-sm bg-white rounded-md  shadow-xl border-l-8 border-blueaccent">Project3: Python Automation to clean up disk space Somthing a little longer</div>
                </a>
            </div>

        </div>
    );
}