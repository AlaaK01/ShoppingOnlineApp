import React from "react";

const Footer = ({
  fontColor,
  backgroundColor,
  setFontColor,
  setBackgroundColor,
}) => {
  return (
    <footer style={{ backgroundColor: backgroundColor }}>
      <div className="image-footer"></div>

      <div className="text-footer">
        <p style={{ color: fontColor }}>Shop Online</p>
        <div className="change-style">
          <h3>you can try changing your style</h3>
          <label>Change Font Color</label>
          <input
            autoFocus
            type="color"
            placeholder="Change Font Color"
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
          />

          <label>Change Background Color</label>
          <input
            autoFocus
            type="color"
            placeholder="Change Background Color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
      </div>
      <div className="soon">
        <div className="inside-soon"></div>
      </div>
    </footer>
  );
};

export default Footer;
