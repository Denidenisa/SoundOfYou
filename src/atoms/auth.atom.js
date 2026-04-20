import {atom} from 'jotai'

export const tokenAtom = atom(null)

export const userAtom=atom(null)

export const isConnectedAtom =atom((get)=>{
    const token =get(tokenAtom)
    return token !==null
})