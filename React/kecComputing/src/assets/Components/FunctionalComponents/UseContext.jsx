import Component2 from './ContextComponents/Component2'
import { createContext } from 'react'
export var ThemeProvider = createContext()
var ExamResults = () => {
    return (
        <section>
            <ThemeProvider.Provider value={{sgpa:"10.00", cgpa:"8.5"}}>
                <h1>This is an example UseContext - Parent Component</h1>
                <Component2 />
            </ThemeProvider.Provider>
        </section>
    )

}
export default ExamResults