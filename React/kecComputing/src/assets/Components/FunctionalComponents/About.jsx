const About=(props)=>{
    return <section>
        <h1>This is my About Page</h1>
        <h2>I am teaching in {props.college} College</h2>
        <h3>Other colleges:{props.clg1}</h3>
    </section>
}
export default About