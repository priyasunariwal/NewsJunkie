import React,{useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner  from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props)=> {
//converting into func based componenets before we had this.state
const [articles, setArticle] = useState([])
const [loading, setLoading] = useState(true)
const [page,setPage] = useState(1)
const [totalResults,setTotalResults] = useState(0)


 const capitalizeF = (string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);
} 

document.title = `NewsJunkie-${capitalizeF(props.category)}`;
  // constructor(props){
  //   super(props);  //if constructor banaya toh yeh likhna hi hai.
  //   this.state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //     totalResults: 0
  //   }    
  // }
  
   
   const update= async ()=>{
   props.setProgress(15)
   
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    
    setLoading(true);
    let data = await fetch(url) //fetch
    props.setProgress(30)
    let parsedData = await data.json()  //pass
    props.setProgress(80)
    console.log(parsedData)
    setArticle(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
      props.setProgress(100)

   }
   //yeh function inbuilt hai and humesa render ke baad run hota hai
     // async function apne function ke andar wait kar sakta hai kuch promises ke resolve hona ka
  //    async componentDidMount(){
  //   this.update();
  // } iska kaam in function based componenets below useEffect karega
useEffect(()=>{
  update();
},[])


 const handleNextClick = async ()=>{
  //   console.log("next please");
  //   //if next page is greater than last page here 20 is the number of articles we want in one page.
  //   if(this.state.page + 1> Math.ceil(this.state.totalResults/20)){
  //     //kuch mat karo button disable hojayega.
      
  //   }else{
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey={props.apikey}&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //    this.setState({loading: true});
  //   let data = await fetch(url)
  //   let parsedData = await data.json() 
  //   console.log(parsedData)  
      
  //   this.setState ({page: this.state.page + 1,
  //     articles: parsedData.articles,
  //     loading: false})
  // }
  setPage(page+1);
  update();
  
}
  const handlePrevClick = async ()=>{
    console.log("previous please");
 
    setPage(page-1);
    update();
  } 

   const fetchMoreData = async () => {
    setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey={props.apikey}&page=1&pageSize=${props.pageSize}`;
   
    let data = await fetch(url)
    let parsedData = await data.json() 
    console.log(parsedData)
    setArticle(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    
      
      
  };

    return (
      <div className ="container my-3 my-2">
        <h1 className='text-center text-success' style={{margin: '35px 0px'}}>NewsJunkie- Top headlines from {capitalizeF(props.category)}</h1>
       {loading &&<Spinner/>}
        {/* console pe articles aajayenge  */}
        {/* {this.state.articles.map((element)=>{console.log(element)})}  */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className="row">
       {/* if loading false hai toh hi content dikhao load hote time content nhi dekhna hai --  !this.state.loading && */}
              
        {articles && articles.map((element)=>{ return <div className="col-md-4" key={element.url}>
         
        <NewsItem title={element.title?element.title:" "} description={element.description?element.description.slice(0,100):" "} imageurl= {element.urlToImage?element.urlToImage:" "} newsurl ={element.url} authorP = {element.author} publishedAtP = {element.publishedAt} sourceP ={element.source.name}/>  
         {/* key yaha par .map function mein deni padti hai jo nique ho every news article ki ki yaha par image of news hai. */}
        </div>})} 
        </div>
        </div>
        </InfiniteScroll> 
        
       
       

        {/* initially when we started with previous and next button */}
         {/* <div className="container d-flex justify-content-between">
         <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePrevClick}>&laquo;Previous</button>
         <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/20)}type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next &raquo;</button>
         </div> */}



      </div>
    )
  
}

//bhul gaye toh see in documentation ke function based components mein defaultprops and prop types last mein aata hai and syntax func_name.default....
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}
   News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News

