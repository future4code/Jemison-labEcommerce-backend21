import { Request, Response } from "express";
import connection from "../connection";


export default async function deleteCharacter (
    req:Request, 
    resp:Response):Promise<void> {
    
        try{
             const {id} = req.params
            
             await connection("character")
                .delete()
                .where({id})
        
            resp.status(200).end()
        }catch(error){
            resp.status(500).send("Erro inesperado")
        }
}