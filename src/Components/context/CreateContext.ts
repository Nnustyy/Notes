import { Dispatch, SetStateAction, createContext } from "react";

interface INote {
  id:number,
  title:string,
  desc:string
}

interface NoteContextType {
  notes:INote[],
  setNotes:Dispatch<SetStateAction<INote[]>>
}


export const NoteContext = createContext<NoteContextType>({
  notes:[],
  setNotes:() =>{}
})