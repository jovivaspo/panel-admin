const api = {}

const URL_API = process.env.REACT_APP_URL_API

api.login = `${URL_API}/login`
api.users = `${URL_API}/users`
api.user = `${URL_API}/user`



export {api}