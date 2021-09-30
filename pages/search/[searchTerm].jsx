import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

export default function Search (initProps) {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Search {router.query.searchTerm} </title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/styles.css" />
                <meta name="description" content={props.giphys.map((each, index ) => each.title + ' ' )} />
            </Head>
            <h1>Search {router.query.searchTerm} </h1>

            <div className="giphy-search-result-grid">
                {initProps.giphys.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <h3>{item.title}</h3>
                                <img src={item.images.original.url} alt="" />
                            </div>
                        )
                    })  
                }
            </div>

        </div>
    );
}

export async function getServerSideProps(context) {
    const searchTerm = context.query.searchTerm
    let giphys = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=fWsx77g2ZI5ssH0zX0n1lh91aLh0ev1Q&limit=10`)
    giphys  = await giphys.json()
    return {props: {giphys: giphys.data}}
}