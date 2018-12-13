import { ACTIVE_BOOK } from '../constants';

// Select book
export const selectBook = (book) => {
    return {
        type: ACTIVE_BOOK,
        payload: book
    }
}
