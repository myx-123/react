export default{
    allmark(){
        return{
            type:"ALLMARK"
        }
    },
    markById(id){
        return (dispatch)=>{
            dispatch({
                type:"START"
            })
            setTimeout(()=>{
               dispatch({
                   type:"ALLMARKBYID",
                   id
               })
               dispatch({
                   type:"FINISH"
               })
            },1000)
        }
    }
}