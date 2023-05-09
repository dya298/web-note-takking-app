import http from "../http-common";

class NoteService {
    add(note) {
        return http.post("/note/addNote", note);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new NoteService();