import SearchForm from "../Components/SearchForm/SearchForm"

const HomeContainer = (props) => {

    const handleInputs = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
    }

    const handleSubmit = (event) => {
        event.eventPreventDefault()
        console.log('clicked');
    }

    return (
        <>
            <h1>Giphy search app</h1>
            <SearchForm name="searchTerm" handleSubmit={handleSubmit} actionHandler={handleInputs} />
            <div className="giphy-search-result-grid">
                {
                    props.data.map((item, idx) => {
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