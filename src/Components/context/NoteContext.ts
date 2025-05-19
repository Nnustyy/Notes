import { Dispatch, SetStateAction, createContext } from "react";

export interface INote {
  id:number,
  title:string,
  desc:string
}

interface NoteContextType {
  notes:INote[],
  setNotes:Dispatch<SetStateAction<INote[]>>,
  setRecentlyDeletedNotes:Dispatch<SetStateAction<INote[]>>,
  recentlyDeletedNotes:INote[],
  setLikedNotes:Dispatch<SetStateAction<INote[]>>,
  likedNotes:INote[],
  toggleLike:(note:INote) => void
}


export const NoteContext = createContext<NoteContextType>({
    notes:[],
    setNotes:() =>{},
    recentlyDeletedNotes:[],
    setRecentlyDeletedNotes:() => {},
    setLikedNotes:() => {},
    likedNotes:[],
    toggleLike:() => {}
})

