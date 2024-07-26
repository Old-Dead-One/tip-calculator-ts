import React, { useState } from "react";

/**
 * Dropdown component for selecting tip percentage including custom tip.
 */

// Define the Option interface
interface Option {
    value: string;
    label: string;
}

// Define the DropdownProps interface
interface DropdownProps {
    options: Option[];
    onSelect: (selectedOption: string | number) => void;
}

/**
 * Dropdown component for selecting tip percentage including custom tip.
 * @param param0 Options and onSelect function
 * @returns tip percentage dropdown
 */
const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]?.value || "");
    const [customTip, setCustomTip] = useState<number | "">("");

    /**
     * Handle the change event of the dropdown
     * @param event - The change event
     * @returns selectedOption
     */
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

    /**
     * Handle the change event of the custom tip input
     * @param event - The change event
     * @returns customTip
     */
    const handleCustomTipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const numericValue = value === "" ? "" : parseFloat(value);
        setCustomTip(numericValue);
        onSelect(numericValue);
    };


    // Render
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
