import React from 'react';
import './CentredInput.css';

class CentredInput extends React.Component {
  hidePlaceholder() {
    this.label.style.display = 'none';
  }

  showPlaceholder() {
    this.label.style.display = '';
  }

  setInputPosition = () => {
    if (this.input.value) {
      this.resetInputPosition();
      this.hidePlaceholder();
    } else {
      this.showPlaceholder();
      const { left, x } = this.label.getBoundingClientRect();
      this.input.style.paddingLeft = `${x || left}px`;
    }
  }

  resetInputPosition = () => {
    this.input.style.paddingLeft = '';
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
          onInput={this.setInputPosition} onFocus={this.setInputPosition}
          onBlur={this.resetInputPosition} ref={(el) => { this.input = el; }} />
      </div>
    );
  }
}

export default CentredInput;
