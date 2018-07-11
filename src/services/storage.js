export const getUser = () => {
  return {
    token: localStorage.getItem('token'),
    user: localStorage.getItem('user')
  }
}

export const setUser = (token, user) => {
  return {
    token: localStorage.setItem('token', token),
    user: localStorage.setItem('user', user)
  }
}

export const getToken = () => {
  const token = localStorage.getItem('token')
  if (!token) return false
  return `Token ${token}`
}
