import React, { useContext, useState } from "react";
import "./selectCategory.css";
import { MyContext } from "../../../../context/MyContext";
const options = [
  { value: "bug", label: "Bug" },
  { value: "enhacement", label: "Enhacement" },
];
export const SelectCategory = () => {
  const { text, setText } = useContext(MyContext);
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    setText({...text, category : newValue })
    
  };
  
  return (
    <div className="select1">
      <div className="select">
        <select value={selectedValue} onChange={handleSelectChange}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {selectedValue === "bug" && (
        <div>
          <div className="bugfile">
            <span className="bugfile-title">Nom du fichier</span>
            <input type="text" className="input-title" onChange={(e) => setText({...text, filename : e.target.value })}/>
          </div>
          <div className="filepath">
            <span className="filepath-title">Chemin vers le fichier</span>
            <input type="text" className="input-title" onChange={(e) => setText({...text, filepath : e.target.value })}/>
          </div>
        </div>
      )}
    </div>
  );
};
