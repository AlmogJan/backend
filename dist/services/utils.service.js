"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilsService = void 0;
const uuid_1 = require("uuid");
exports.utilsService = {
    makeId
};
function makeId() {
    return (0, uuid_1.v4)();
}
