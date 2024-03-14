import { createContext ,useReducer,useEffect} from 'react'
import githubReducer from './GithubReducer'

const GithubContext=createContext()

const GITHUB_URL=import.meta.env.VITE_GITHUB_URL
const GITHUB_TOKEN=import.meta.env.VITE_GITHUB_TOKEN
export const GithubProvider =({children})=>{
   const initialState={
    users: [],
    user:{},
    repos:[],
    loading:false,
   }
    const[state,dispatch]=useReducer(githubReducer,initialState)
    const fetchUsers = async () => {
        setLoading()
        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: { // corrected header typo from `header` to `headers`
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });
        const data = await response.json();
        dispatch({
            type: 'GET_USERS',
            payload:data
        })
    }; 
    const SearchUser=async(text)=>{
        setLoading()
        const params=new URLSearchParams({
            q: text
        })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
            headers: { // corrected header typo from `header` to `headers`
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const {items}=await response.json()
        dispatch({
            type: 'GET_USERS',
            payload:items
        })
    }
    const getUser=async(login)=>{
        setLoading()
        const response = await fetch(`${GITHUB_URL}/users/${login}`,{
            headers: { // corrected header typo from `header` to `headers`
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        if(response.status===404)
        window.location-'/notfound'
        else
        {
        const data =await response.json()
        dispatch({
            type: 'GET_USER',
            payload:data
        })
    }
    }
    const getRepos=async(login)=>{
        setLoading()
        const params=new URLSearchParams({
            sort:'created',
            per_page:10
        })
        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,{
            headers: { // corrected header typo from `header` to `headers`
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        if(response.status===404)
        window.location-'/notfound'
        else
        {
        const data =await response.json()
        dispatch({
            type: 'GET_REPOS',
            payload:data
        })
    }
    }
    
    const setLoading=()=>dispatch({type:'SET_LOADING'})
    const clear=()=>dispatch({type:'SET_CLEAR'})

    return <GithubContext.Provider 
    value={{
        users:state.users,
        loading:state.loading,
        fetchUsers,
        SearchUser,
        clear,
        user:state.user,
        getUser,
        getRepos,
        repos:state.repos
        }}>
        {children}
    </GithubContext.Provider>
}
export default GithubContext