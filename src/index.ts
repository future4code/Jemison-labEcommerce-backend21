import { app } from "./app";
import  createCharacter  from "./endpoits/createCharacters";
import  deleteCharacter  from "./endpoits/deleteCharacter";
import getAllCharacters from "./endpoits/getAllCharacters";



app.get("/character", getAllCharacters)

app.put("/character", createCharacter)

app.delete("/character/:id", deleteCharacter)