import React, { useState } from "react";
import "./Switch.css";

interface SwitchProps {
  onToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ onToggle }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
    onToggle();
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={handleClick} />
      <span className="switch" />
    </label>
  );
};

export default Switch;
