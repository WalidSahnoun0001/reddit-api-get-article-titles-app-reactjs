function Articles(props) {
  return (
    <div>
        {props.articles.map((article)=> (
              <article key={article.data.id}>
                <a href={article.data.url} target="_blank" rel="noreferrer">{article.data.title}</a>
              </article>
            ))}
    </div>
  )
}

export default Articles