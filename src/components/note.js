import Draggable from 'react-draggable';
import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onDrag = this.onDrag.bind(this);
  }

  onDeleteClick() {
    this.props.onDelete(this.props.id);
  }

  onEditClick() {
    if (this.state.isEditing) {
      document.getElementById('textspace').disabled = true;
      this.setState({
        isEditing: false,
      });
      return <i className="fa fa-pencil-square-o" onClick={this.onEditClick} />;
    } else {
      document.getElementById('textspace').disabled = false;
      this.setState({
        isEditing: true,
      });
      return <i className="fa fa-check-square-o" onClick={this.onEditClick} />;
    }
  }
  onTextChange(event) {
    this.props.onUpdate(this.props.id, { text: event.target.value });
  }

  onDrag(event, ui) {
    this.props.onUpdate(this.props.id, { x: ui.x, y: ui.y });
  }

  render() {
    const { title, x, y, zIndex } = this.props.note;
    return (
      <Draggable
        handle=".note-mover"
        grid={[25, 25]}
        defaultPosition={{ x: 20, y: 20, zIndex: 0 }}
        position={{ x, y, zIndex }}
        onStart={this.onStartDrag}
        onDrag={this.onDrag}
        onStop={this.onStopDrag}
      >
        <div className="note">
          <h1>{title}
            <i className="fa fa-trash-o" onClick={this.onDeleteClick} />
            <i className="fa fa-arrows-alt note-mover"></i>
            {this.onEditClick()}
          </h1>
          <textarea id="textspace" onChange={this.onTextChange} />
        </div>
      </Draggable>
    );
  }
}
export default Note;
