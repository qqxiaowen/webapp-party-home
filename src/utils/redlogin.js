
export function islogin(url,vm){
    if(vm.$store.state.userinfo){
        vm.$router.push(`/${url}`)
    }else{
        vm.$router.push(`/login?redirect=${url}`)
    }
}