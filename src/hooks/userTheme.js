import { atom, useAtom } from 'jotai';


//pour stoker le token
export const tokenAtom=atom(null)

//stocker l user
export const userAtom=atom(null)

export const isConnectedAtom=atom((get)=>{
    const token = get(tokenAtom)
    return token !==null
})

//hook custom pour simplifier l utilisateur

export function useAuth(){
    const [user,setUser]=useAtom(userAtom)
    const{token,setToken}=useAtom(tokenAtom)

    const login =(userData,jwt)=>{
        setUser(userData)
        setToken(jwt)
    }
    const logout =()=>{
        setUser(null)
        setToken(null)
    }
    return { user, token, login, logout };
}