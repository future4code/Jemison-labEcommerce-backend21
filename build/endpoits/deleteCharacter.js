"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCharacter = void 0;
const data_1 = require("../data");
function deleteCharacter(req, resp) {
    const { id } = req.params;
    const index = data_1.characters.findIndex(character => character.id === Number(id));
    if (index > -1) {
        data_1.characters.splice(index, 1);
    }
    resp.status(200).end();
}
exports.deleteCharacter = deleteCharacter;
//# sourceMappingURL=deleteCharacter.js.map