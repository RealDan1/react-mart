import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

//dynamic color selector based on what color has been handed down from parent via the productData object
function DropDown({ color1, color2, color3 }) {
  const [selectedColor, setSelectedColor] = useState('Choose colour');

  function handleSelect(color) {
    setSelectedColor(color);
  }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedColor}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSelect(color1)}>
          {color1}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect(color2)}>
          {color2}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect(color3)}>
          {color3}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
