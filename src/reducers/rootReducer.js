const initState = {
    posts:[
        {id: '1', title: 'pierwszy tytul'},
        {id: '2', title: 'drugi tytul'},
        {id: '3', title: 'trzeci tytul'},
    ]
}
const rootReducer = (state  = initState, action) => {
    console.log(action)
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post=> post.id !== action.id);
        return{
            ...state,
            posts: newPosts
        }
    }
    return state;
}
export default rootReducer;