const initialState = {
      loading:false,
      list: [
        {
            "id":1,
            title: 'Ant Design Title 1',
            read:false
        },
        {
            "id":2,
            title: 'Ant Design Title 2',
            read:true,
        },
        {
            "id":3,
            title: 'Ant Design Title 3',
            read:false,
        },
        {
            "id":4,
            title: 'Ant Design Title 4',
            read:true
        }
    ]
}

export default (state = initialState, { type,id }) => {
    switch (type) {

    case "ALLMARK":
        var newState = JSON.parse(JSON.stringify(state))
        newState.list.forEach((item)=>{
            item.read=true
        })
        return newState
    case "ALLMARKBYID":
        var newState = JSON.parse(JSON.stringify(state))
        newState.list.forEach((item)=>{
            if(item.id===id){
                item.read=true
            }
        })
        return newState
    case "START":
        return {...state,loading:true}
    case "FINISH":
        return {...state,loading:false}
    default:
        return state
    }
}
