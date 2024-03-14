import propTypes from 'prop-types'
import RepoItem from './RepoItem'
function RepoList({repos})
{
return(
    <>
    <div>
        <div className="rounded-lg shadow-lg card bg-base-100 mb-8">
            <div className="card-body">
                <h2 className="text-3xl my-4 font-bold card-title">
                    Latest Repositories
                </h2>
                {repos.map((repo)=><RepoItem key={repos.id} repo={repo}/>)}
            </div>
        </div>
    </div>
    </>
)
            }
RepoList.propTypes = {
  repos: propTypes.array.isRequired
}
export default RepoList