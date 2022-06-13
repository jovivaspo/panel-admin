import { helpHttp } from './helpHttp'
import { api } from './urlApi'

const auth = {}

auth.login = async (email, password) => {

    try {
        const res = await helpHttp().post(api.login, {
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                email,
                password
            }
        })
        return res
    } catch (err) {
        console.log(err)
    }
}

auth.logOut = () => {
    localStorage.removeItem("token")
}

export {auth}