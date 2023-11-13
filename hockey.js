// const createElement=(tag,className,id,textContent,styles)=>{
//     const element = document.createElement(tag)
//     element.className=className;
//     element.textContent = textContent;
//     element.id = id;
//     Object.assign(element.style,styles)
//     return element;
// }
// const createInput=(type,value,id,styles)=>{
//     const input = document.createElement('input');
//     input.type = type;
//     input.value = value;
//     input.id = id;
//     input.style = styles;
//     return input;
// }

// const createHockeyPage = ()=>{
//     //Body
//     const body = document.body;
//     Object.assign(body.style, {color: 'whitesmoke',margin: 'auto',backgroundColor: "#000"});
//     //Header
//     const header = createElement('div','header','header','',{backgroundColor:"#000",color:"whitesmoke",margin:'auto'});

//     header.appendChild(createElement('h1','','','Hockey',{ margin:'0px',backgroundColor:'#333',color:'#fff',textAlign: "center",padding:"15px"}))
    
//     header.appendChild(createElement('h3','','matchTime',"Match Time:",{margin:"0px",backgroundColor:"#333",textAlign:"center"}))
//     body.appendChild(header);

//     const inner = createElement('div','inner','inner','',{display:"flex",justifyContent:"space-between",border:"solid 1px white",height: "250px"})
    
//     const left = createElement('div','left','left','','');
//     left.appendChild(createElement('img','','leftImage','',{ height: '25vmin', width: '35vw', maxWidth: '420px', maxHeight: '320px',margin:"10px"}))
//     left.appendChild(createElement('h2','teamOne','teamOne','',{marginTop:"10px",textAlign:"center"}))
//     left.appendChild(createElement('h1','teamOneScore','',{marginTop:"10px",textAlign:"center"}))
//     inner.appendChild(left);

//     const right = createElement('div','right','right','',{});
//     right.appendChild(createElement('img','rightImage','rightImage','',{height: '25vmin', width: '35vw', maxWidth: '420px', maxHeight: '320px',margin:"10px"}))
//     right.appendChild(createElement())
//     inner.appendChild(right)
//     body.appendChild(inner)
// }
// document.addEventListener("DOMContentLoaded",()=>{
//     createHockeyPage();
// })