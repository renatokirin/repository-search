import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import Pagination from "./Pagination";
import "./style.css";


const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('react')
    const [repos, setRepos] = useState([])

    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        handleClick()
    }, [currentPage])

    let itemsPerPage = 10

    const handleClick = async () => {

        try {
            const result = await axios(`https://api.github.com/search/repositories?q=${searchInput}&page=${currentPage}&per_page=${itemsPerPage}`)
            setRepos(result.data)
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <header class="header">
                <div class="header__search">
                    <input type="text" placeholder="Search repositories" value={searchInput} onChange={handleChange} />
                    <button onClick={handleClick}>Search</button>
                </div>
            </header>

            <Results repos={repos} />

            <div className="pagination__container">
                <Pagination
                    currentPage={currentPage}
                    total={500}
                    limit={20}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>

        </>
    )

}

export default SearchBar