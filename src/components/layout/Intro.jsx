import "./Intro.css"
function Intro({intro, text}){
    return (
        <div className="intro">
            <h1>{intro}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Intro;