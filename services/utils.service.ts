import { v4 as uuidv4 } from 'uuid';
import { Uid } from '../interfaces';

export const utilsService = {
    makeId
}

function makeId(): Uid {
    return uuidv4();
}