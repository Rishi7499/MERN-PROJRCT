import React, { Component } from 'react';
import './styles.css';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      query: 'latest' // Default query
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async (query = this.state.query) => {
    const apiKey = 'pub_4895810c05ad969617babc62c62de26f29321'
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${query}`;

    try {
      console.log(`Fetching news with query: ${query}`);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched data:', data);
      if (data.results) {
        this.setState({ articles: data.results });
      } else {
        throw new Error("No results found in the response");
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ articles: [] });
    }
  };

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.fetchNews(this.state.query);
  };

  render() {
    return (
      <div className="app-container">
        <div className="main-content">
          <h1 className="title">News List</h1>
          <form onSubmit={this.handleFormSubmit} className="search-form">
            <input
              type="text"
              value={this.state.query}
              onChange={this.handleInputChange}
              placeholder="Search for news..."
              className="search-bar"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
          <ul className="news-grid">
            {this.state.articles.length === 0 ? (
              <p>No articles found.</p>
            ) : (
              this.state.articles.map((article, index) => (
                <li key={index} className="news-item">
                  <h2 className="news-title">
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  </h2>
                  {article.image_url && (
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="news-image"
                      style={{
                        maxHeight: '150px',
                        maxWidth: '100%',
                        objectFit: 'cover',
                        borderRadius: '10px 10px 0 0',
                      }}
                    />
                  )}
                  <p className="news-description">{article.description}</p>
                  <p className="news-details">
                    {article.author && <span>By: {article.author}</span>}
                    {article.pubDate && <span> | Published on: {article.pubDate}</span>}
                  </p>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default NewsList;
