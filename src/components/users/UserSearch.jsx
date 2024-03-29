import {useState , useContext ,useEffect } from 'react'
import GithubContext from '../../context/Github/GithubContext'
import AlertContext from '../../context/Alert/AlertContext'
function UserSearch(){
    const {users,SearchUser ,clear}=useContext(GithubContext)
    const {setAlert}=useContext(AlertContext)
    const [text,setText]=useState('')
    const handleChange=(e)=>{
       setText(e.target.value)
    }
    const handleSubmit=(e)=>{
       e.preventDefault();

       if(text==='')
       {
        setAlert('Please enter Something','error')
       }
       else
       {
        SearchUser(text)
        setText('')
       }
    }
    const Clear=()=>{
        clear()
    }
    return(
        <>
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="relative">
                    <input className="w-full pr-40 bg-gray-200 input input-lg text-black"
                    placeholder="Search"
                    value={text}
                    onChange={handleChange}
                    />
                    <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                        GO
                    </button>
                </div>
            </div>
          </form>
        </div>
        {users.length>0 &&(
            <div>
            <button className="btn btn-ghost btn-lg" onClick={Clear}>Clear</button>
        </div>
        )}
        </div>
        </>
    )
}
export default UserSearch