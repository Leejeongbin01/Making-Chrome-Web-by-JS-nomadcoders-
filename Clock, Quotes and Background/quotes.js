const quotes=[
    {quote: "삶이 있는 한 희망은 있다",
    author: "키케로"},

    { quote: "산다는것 그것은 치열한 전투이다",
    author: "로망로랑"},

    {quote: "언제나 현재에 집중할수 있다면 행복할것이다",
    author: "파울로 코엘료"},

    {quote: "신은 용기있는자를 결코 버리지 않는다",
    author: "켄러"},

    {quote: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "이드리스 샤흐"},
    
    {quote: "먼저핀꽃은 먼저진다 남보다 먼저 공을 세우려고 조급히 서둘것이 아니다",
    author: "채근담"},

    {quote: " 한번의 실패와 영원한 실패를 혼동하지 마라",
    author: "F.스콧 핏제랄드"},

    {quote: "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는것이다",
    author: "L론허바드"},

    {quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다,",
    author: "단테"},

    { quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
    author: "찰스다윈"}
];


const quote=document.querySelector("#quote span:first-child");

const author=document.querySelector("#quote span:last-child");

const todayQuotes=(quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerText=todayQuotes.quote;
author.innerText=todayQuotes.author;
