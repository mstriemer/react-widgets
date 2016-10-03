import React from 'react';
import './CentredInput.css';

class CentredInput extends React.Component {
  hidePlaceholder() {
    this.label.style.display = 'none';
    this.input.style.textAlign = 'center';
  }

  showPlaceholder() {
    this.label.style.display = '';
    this.input.style.textAlign = '';
  }

  setInputPosition = () => {
    if (this.input.value) {
      this.resetInputPosition();
      this.hidePlaceholder();
    } else {
      this.showPlaceholder();
      const { left } = this.label.getBoundingClientRect();
      const paddingLeft = parseFloat(getComputedStyle(this.label).paddingLeft);
      this.input.style.paddingLeft = `${left + paddingLeft}px`;
    }
  }

  resetInputPosition = () => {
    this.input.style.paddingLeft = '';
  }

  render() {
    const { className, placeholder } = this.props;
    return (
      <div className={[className, 'CentredInput'].join(' ')}>
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
