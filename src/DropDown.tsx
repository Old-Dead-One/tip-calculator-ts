import React, { useState } from "react";

interface Option {
    value: string;
    label: string;
}

interface DropdownProps {
    options: Option[];
    onSelect: (selectedOption: string | number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]?.value || "");
    const [customTip, setCustomTip] = useState<number | "">("");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        if (value !== "custom") {
            onSelect(parseFloat(value));
            setCustomTip("");
        } else {
            onSelect(value);
        }
    };

    const handleCustomTipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const numericValue = value === "" ? "" : parseFloat(value);
        setCustomTip(numericValue);
        onSelect(numericValue);
    };

    return (
        <>
            <select
                value={selectedOption}
                onChange={handleChange}
                style={{
                    width: "150px", height: "32px", fontSize: "14px", padding: "0.5rem", margin: "0.5rem"
                }}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
                <option value="custom">Custom</option>
            </select>
            {selectedOption === "custom" && (
                <input
                    type="number"
                    placeholder="Enter custom tip"
                    value={customTip}
                    onChange={handleCustomTipChange}
                />
            )}
        </>
    );
};

export default Dropdown;
