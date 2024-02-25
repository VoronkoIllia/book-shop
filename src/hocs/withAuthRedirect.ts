import { useSelector } from "react-redux"
import { getIsAuth } from "../utils/selectors"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const useAuthRedirect = () => {
    const isAuth = useSelector(getIsAuth)
    const navigate = useNavigate()
    useEffect(() => {
        if(!isAuth) {navigate("/login")}
    },[isAuth, navigate])
}