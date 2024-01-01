
const checkUserPlan = (plan,expire_date) => {
    if(plan !== 0){
        const dateNow = new Date();
        const expire = new Date(expire_date);
        console.log(expire_date)
        console.log(expire)
        console.log("datenow: "+dateNow+"||"+"expire:"+expire)
        if(expire > dateNow){
            return plan;
        }else{
            return null
        }
    }else{
        return plan;
    }
}

export {checkUserPlan}