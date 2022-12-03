import { Request, Response } from "express";
import connection from "../connection";
import { character } from "../types";


export default async function (
    req: Request,
    resp:Response
):Promise<void>{

    try{
        
        const name = req.query

        const characters: character[] = await connection("character")


        resp.send(characters)
    }catch(error){
        resp.status(500).send("Erro inesperado")
    }
}