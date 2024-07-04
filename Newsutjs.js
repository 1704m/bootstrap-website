// const apiKey = '4466fea7e6b04693ae98c53fc8e5d085';
// const blogcontainer = document.getElementById("blog-container"); 

// const searchfeild = document.getElementById("search-input");

// const searchbtn = document.getElementById("search-button");


// async function fetchnewnews(){
//     try{
//         const apiUrl = `https://newsapi.org/v2
//         /top-headlines?country=us&pageSize=12
//         &apiKey=${apiKey}`;
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         return data.articles;
//     }
//     catch(error){
//     console.error("ERROR FETCHINGF RANFDOM NEWS",
//         error);
//     return[];

//     }
// }


// searchbtn.addEventListener('click',async() =>{
//     const query = searchFeild.ariaValueMax.trim
//     ();

//     if(query !== ""){
//         try{
//             const articles = await fetchNewsQuery(query);
//             displayblocks(articles);
//         }catch(error){
//             console.log("error in fetchingf data news by query",error);
//         }
//     }

// });

// async function fetchNewsQuery(query){
//     try{
//         const apiUrl = `https://newsapi.org/v2/
//         everything?q=${query}&pageSize=12
//         &apiKey=${apiKey}`;
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         return data.articles;
//     }
//     catch(error){
//     console.error("ERROR FETCHINGF RANFDOM NEWS",
//         error);
//     return[];

//     }
// }

// function displayblocks(articles){
//     blogcontainer.innerHTML = "";
//     articles.forEach((article)  =>{
//         const blogCard = document.createElement
//         ("div");
//         blogCard.classList.add("blockcard");
//         const img = document.createElement("img");
//         img.src = article.urlToImage;
//         img.alt = article.title;
//         const title = document.createElement("h2");
//         const truncatedTitle= article.title.length
//         >30? article.title.slice(0,30)+ "....":
//         article.title;

//         title.textContent = truncatedTitle;

//         const description = document.createElement("p");

//         const truncateddes= article.description.length
//         >120? article.description.slice(0,120)+ "....":
//         article.description;

//         description.textContent = truncateddes;


//         blogCard.appendChild(img);
//         blogCard.appendChild(title);
//        blogCard.appendChild(description);
       
//        blogcontainer.addEventListener('click',() => {
//         window.open(article.url,"_blank");
//        });
//               blogcontainer.appendChild(blogCard);

//     });
// }




// (async()=> {
// try{
//    const articles = await fetchnewnews();
//    displayblocks(articles);
// } catch(error){
//     console.error("ERROR FETCHINGF RANFDOM NEWS",
//     error);
// }
// })();



const apiKey = '28baeb373dfa4f56990e3f5b958e63f3';

const blogcontainer = document.getElementById("blog-container"); 

const searchfeild = document.getElementById("search-input");

const searchbtn = document.getElementById("search-button");


async function fetchnewnews(){
    try{
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    }
    catch(error){
        console.error("ERROR FETCHINGF RANFDOM NEWS", error);
        return [];
    }
}


searchbtn.addEventListener('click', async() =>{
    const query = searchfeild.value.trim();

    if(query !== ""){
        try{
            const articles = await fetchNewsQuery(query);
            displayblocks(articles);
        }catch(error){
            console.log("error in fetchingf data news by query",error);
        }
    }

});

async function fetchNewsQuery(query){
    try{
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=12&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    }
    catch(error){
        console.error("ERROR FETCHINGF RANFDOM NEWS", error);
        return [];
    }
}

function displayblocks(articles){
    console.log(articles)
    blogcontainer.innerHTML = "";
    articles.forEach((article)  => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blockcard");

        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;

        const title = document.createElement("h2");
        const truncatedTitle= article.title.length > 30? article.title.slice(0,30)+ "....": article.title;
        title.textContent = truncatedTitle;

        const description = document.createElement("p");

        const truncateddes= article.description.length > 120? article.description.slice(0,120)+ "....": article.description;

        description.textContent = truncateddes;


        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
       
        blogcontainer.addEventListener('click',() => {
            window.open(article.url,"_blank");
        });
    
        blogcontainer.appendChild(blogCard);
    });
}




(async()=> {
try{
    const articles = await fetchnewnews();
    displayblocks(articles);
} catch(error){
    console.error("ERROR FETCHINGF RANFDOM NEWS", error);
}
})();