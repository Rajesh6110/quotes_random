let realdata ="";
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");

const getnewquotes = ()=>{
    let randn = Math.floor(Math.random() *10); //0 - 10
    const realquotes = realdata[randn];
    //this xx and 
    let xx="";
    const temp = ()=>{
        for(let i=0; i<realquotes.author.length; i++ ){
            if(realquotes.author[i]==','){
                break;
            }
            xx  = xx + realquotes.author[i];
        }
    };
    temp();

    quotes.innerText = `${realquotes.text}`;
    author.innerText = `${xx}`;
};

const getquotes = async ()=>{
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realdata = await data.json();
        getnewquotes();
    } catch (error) {
        console.log("systumm is showing error");
    }
};

newQ.addEventListener('click', getnewquotes);
getquotes();
