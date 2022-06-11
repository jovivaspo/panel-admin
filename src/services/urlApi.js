const api = {}

const URL_API = process.env.REACT_APP_URL_API

api.login = `${URL_API}/login`

export {api}