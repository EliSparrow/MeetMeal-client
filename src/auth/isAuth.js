export const isAuth = () => {
    if (sessionStorage.getItem('token'))
        return true;
    return false
}
