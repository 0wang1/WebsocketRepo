import Draggable from 'react-draggable';
import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: {
        title: '',
        text: '',
        x: 0,
        y: 0,
        zIndex: 0,
        isEditing: false,
      },
    };
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.EditClick = this.onEditClick.bind(this);
  }
  onDeleteClick() {
    this.props.onDelete(this.state.id);
  }
  onEditClick() {
    if (this.state.isEditing) {
      this.state.isEditing = false;
      // What do I retern for editing?
      return <div>editing!</div>;
    } else {
      this.state.isEditing = true;
      return <div>the usual stuff</div>;
    }
  }
  render() {
    const { title, x, y, zIndex } = this.props.note;
    return (
      <Draggable
        handle=".note-mover"
        grid={[25, 25]}
        defaultPosition={{ x: 20, y: 20 }}
        position={{ x, y }}
        onStart={this.onStartDrag}
        onDrag={this.onDrag}
        onStop={this.onStopDrag}
      >
        <div className="note">
          <h1>{title}
            <i onClick={this.onDeleteClick} className="fa fa-trash-o" />
            <i id="editButton" type="checkbox" onClick={this.onEditClick} className="fa fa-pencil-square-o" aria-hidden="true" />
            <i className="fa fa-arrows-alt note-mover" aria-hidden="true"></i>
          </h1>
          <textarea />
        </div>
      </Draggable>
    );
  }
}
export default Note;
