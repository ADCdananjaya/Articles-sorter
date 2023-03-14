const Articles = (props) => {
    return ( 
        <div className="w-5/12 flex flex-col gap-2">
        {
            props.articles.map((article, index) => (
                <div className="flex flex-row justify-between" key={index}>
                    <p>{article.title}</p>
                    <div className="flex flex-row justify-between w-36">
                        <p>{article.upvotes}</p>
                        <p>{article.date.toISOString().split("T")[0]}</p>
                    </div>
                </div>
            ))
        }
        </div>
    );
}

export default Articles;