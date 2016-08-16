import Note from '../models/note_model';


export const createNote = (fields) => {
  const note = new Note(fields);
  return note.save();
};

export const getNotes = () => {
  return Note.find({}).then(notes => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const deleteNote = (id) => {
  return Note.findByIdAndRemove(id);
};

export const updateNote = (id, fields, done) => {
  return Note.findByIdAndUpdate(id, fields);
};
