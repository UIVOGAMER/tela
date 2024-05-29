import { BsSearch } from "react-icons/bs";


const Search = () => {
    return(
        <div>
            <br/>
            <input type="text" placeholder="Enter your full name"/>
            <button><BsSearch /></button>
             <br/>
             <br/>
            <input type="text" placeholder="Enter your Email"/>
            <button><BsSearch /></button>
            <br/>
            <br/>
            <input type="text" placeholder="Enter Password"/>
            <button><BsSearch /></button>
            <br/>
            <br/>
            <input type="text" placeholder="Confirm password"/>
            <button><BsSearch /></button>
            <br/>
            <br/>
            <br/>
            <br/>
            <input type="text" placeholder="Register"/>
            <button><BsSearch /></button>

        </div>
    )
}

export default Search