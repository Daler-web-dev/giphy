import SearchForm from "../Components/SearchForm/SearchForm"
import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'


const HomeContainer = (props) => {
    const [formInputs, setFormInputs] = useState()
    const [searchTerm, setSearchTerm] = useState('cat')
    const [searchResults, setSearchResults] = useState([])

    const handleInputs = (event) => {
        let { value } = event.target
        setFormInputs(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        let giphys = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=fWsx77g2ZI5ssH0zX0n1lh91aLh0ev1Q&limit=10`)
        giphys = await giphys.json()
        setSearchResults(giphys.data)
        setSearchTerm(formInputs)
    }

    useEffect(() => {
        setSearchResults(props.data)
    }, [formInputs]);

    return (
        <>
            <Head>
                <title>Search</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/styles.css" />
            </Head>

            <h1>Giphy search app: {searchTerm} </h1>
            <SearchForm name="searchTerm" handleSubmit={handleSubmit} actionHandler={handleInputs} />
            <div className="links">
                <Link href="/search/Marvel"><span className="link" >Marvel</span></Link>
                <Link href="/search/monkeys"><span className="link" >monkeys</span></Link>
                <Link href="/search/harry-poter"><span className="link" >harryPoter</span></Link>
            </div>
            <div className="giphy-search-result-grid">
                {
                    searchResults.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <h3>{item.title}</h3>
                                <img src={item.images.original.url} alt={item.title} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default HomeContainer