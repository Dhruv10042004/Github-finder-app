import spinner from './assets/spinner (1).gif'
function Spinner(){
    return(
        <>
        <div className='text-center mt-20'>
            <img width={180} src={spinner} alt="Loading" />
        </div>
        </>
    )
}
export default Spinner