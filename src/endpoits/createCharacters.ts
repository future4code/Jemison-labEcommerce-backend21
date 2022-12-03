import { Request, Response} from "express"
import connection from "../connection"


export default async function createCharacter(
    req:Request,
    resp: Response
):Promise<void>{

    try{
        const {name, gender, description} = req.body

        await connection("character")
            .insert({name, gender, description})

        resp.status(201).end()
    }catch(error){
        resp.status(500).send("Erro inesperado")
    }
    
}