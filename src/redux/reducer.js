var intialData={
    name:"achyutha",
};

const basicReducer = (storedata=intialData,action)=>{
    if (action.type === "name"){
        return {
            name : action.username};
    }
    return storedata;
}

export default basicReducer;