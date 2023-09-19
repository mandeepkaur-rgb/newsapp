import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState([true])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  

const updateNews = async () => {
  props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b7ffcdc946db4c4aab39746b289cfc70&page=${page}&pageSize=${props.pageSize}`;
  setLoading(true);
  let data = await fetch(url);
  let parsedData = await data.json()
  // console.log(parsedData)
  setArticles(parsedData.articles)
  setTotalResults(parsedData.totalResults)
  setLoading(false)
  props.setProgress(100);
}

 useEffect (() => {
  updateNews();
}, [])

const handlePrevClick = async () => {
  setPage(page - 1);
  updateNews();
}

const handleNextClick = async () => {
  setPage(page + 1);
  updateNews();
}

const fetchMoreData = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b7ffcdc946db4c4aab39746b289cfc70&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page + 1);
  let data = await fetch(url);
  let parsedData = await data.json()
  // console.log(parsedData)
  setArticles(articles.concat(parsedData.articles))
  setTotalResults(parsedData.totalResults)
};

return (
  <>
    <h1 className='text-center'>NewsMonkey-Top Headline from  {props.category} Category</h1>
    <InfiniteScroll
      dataLength={articles?.length}
      next={fetchMoreData}
      hasMore={articles?.length !== totalResults}
      loader={<h1>Loading...</h1>}>


      <div className="container">
        <div className="row">
          {articles?.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title : ""}
                description={element.description ? element.description.slice(0, 90) : " "}
                imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    </InfiniteScroll>
  </>
)
        }
export default News

News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}





















































































