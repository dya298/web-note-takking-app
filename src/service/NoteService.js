import http from "../http-common";

class NoteService {
    add(note) {
        return http.post("/note/addNote", note);
    }
    update(note) {
        return http.post("/note/editNote", note);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new NoteService();