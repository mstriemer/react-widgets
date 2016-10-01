import React from 'react';
import './CentredInput.css';

class CentredInput extends React.Component {
  hidePlaceholder() {
    this.label.style.display = 'none';
  }

  showPlaceholder() {
    this.label.style.display = '';
  }

  setWidth = () => {
    if (this.input.value) {
      this.clearWidth();
      this.hidePlaceholder();
    } else {
      this.showPlaceholder();
      const { left, x, width } = this.label.getBoundingClientRect();
      this.input.style.width = `${width}px`;
      this.input.style.left = `${x || left}px`;
    }
  }

  clearWidth = () => {
    this.input.style.width = '';
    this.input.style.left = '';
  }

  render() {
    const { placeholder } = this.props;
    return (
      <div className="CentredInput">
        <label className="CentredInput-label" ref={(el) => { this.label = el; }}>
          {placeholder}
        </label>
        <input
          className="CentredInput-input" placeholder={placeholder}
          onInput={this.setWidth} onFocus={this.setWidth}
          onBlur={this.clearWidth} ref={(el) => { this.input = el; }} />
      </div>
    );
  }
}

export default CentredInput;
