import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavBar } from './NavBar'
import { Footer } from './Footer'

export const Layout = (props) => {
    const { children, ...customMeta } = props;
    const router = useRouter();
    const meta = {
        title: 'Abhik Ghosh – Developer, architect, writer.',
        description: `A data solution architect, Cloud enthusiast and course creator.`,
        image: 'https://www.abhikghosh.in/static/images/banner.png',
        type: 'website',
        ...customMeta
    };
    return (
        <div className={"min-h-screen flex flex-col w-full"}>
            <Head>
                <title>{meta.title}</title>
                <link rel="icon" href="/static/images/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />
                <link rel="manifest" href="/static/images/site.webmanifest"></link>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta property="og:url" content={`https://abhikghosh.in${router.asPath}`} />
                <link rel="canonical" href={`https://abhikghosh.in${router.asPath}`} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Abhik Ghosh" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@abhik_g" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />
                )}
            </Head>
            <nav className="">
                <div>
                    <NavBar currentPath={router.pathname} />
                </div>
            </nav>

            <div className={"flex flex-grow  " + (router.pathname === '/' ? 'w-full' : 'w-full bg-goldendark')}>
                {children}
            </div>


            <footer className="z-10">
                <Footer />
            </footer>
        </div>
    )
}
