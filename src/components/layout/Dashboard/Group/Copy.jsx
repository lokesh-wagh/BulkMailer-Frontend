import './Group.css';
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";

function Copy(){
    return(<>
    <Navbar />
    <div id='sidebarflex'>
    <Sidebar />
    <div id="manager">
    <h1 id='pagehead2'>Copy/Paste</h1>   
    <p id='intropara3'>Copy and Paste contacts from your file...</p>
    <div id='copyform'>
    <input type="textarea"  placeholder="1. Name , Email , Phone No , Gender" id='textarea'/>
    </div>
    </div>
    </div>
    </>)
}
export default Copy;