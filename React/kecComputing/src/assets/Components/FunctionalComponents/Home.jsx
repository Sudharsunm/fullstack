import '../../css/NavBar.css'
var Home=()=>{
    var styling={
        fontSize:"30px",
        textDecoration:"underline",
        color:"white"
    }
   return (
    <header>
        <h1 style={styling}>This is Home Page</h1>
        <h2 id="idSEg">Testing Styling</h2>
        <p className='box-Model'>Hello</p>
    </header>
   )
}
export default Home