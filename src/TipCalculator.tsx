import React, { useState } from 'react';
import Dropdown from './DropDown';
import { create, all, BigNumber } from 'mathjs';

const config = { precision: 20 };
const math = create(all, config);

const TipCalculator: React.FC = () => {
    const [billAmount, setBillAmount] = useState<BigNumber>(math.bignumber(0));
    const [tipPercent, setTipPercent] = useState<BigNumber>(math.bignumber(0));
    const [partySize, setPartySize] = useState<BigNumber>(math.bignumber(1));
    const [billPlusTip, setBillPlusTip] = useState<BigNumber>(math.bignumber(0));
    const [partyMemberShare, setPartyMemberShare] = useState<BigNumber>(math.bignumber(0));

    const options = [
        { value: '15', label: '15%' },
        { value: '18', label: '18%' },
        { value: '20', label: '20%' },
    ];

    const handleSelect = (selectedOption: string | number) => {
        if (typeof selectedOption === 'number') {
            setTipPercent(math.bignumber(selectedOption));
        } else if (selectedOption !== 'custom') {
            setTipPercent(math.bignumber(parseFloat(selectedOption)));
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const tipAmount = math.multiply(billAmount, math.divide(tipPercent, 100));
        const totalAmount = math.add(billAmount, tipAmount) as BigNumber;
        setBillPlusTip(totalAmount);
        setPartyMemberShare(math.divide(totalAmount, partySize) as BigNumber);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="billAmount">
                        Total Bill:
                        <br />
                        <input
                            type="number"
                            id="billAmount"
                            value={billAmount.isZero() ? '' : billAmount.toString()}
                            placeholder="Total Bill"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setBillAmount(e.target.value === '' ? math.bignumber(0) : math.bignumber(e.target.value))
                            }
                        />
                    </label>

                    <label htmlFor="tipPercent">
                        Tip Percent:
                        <br />
                        <Dropdown options={options} onSelect={handleSelect} />
                    </label>

                    <label htmlFor="partySize">
                        Party Size:
                        <br />
                        <input
                            type="number"
                            id="partySize"
                            value={partySize.isZero() ? '' : partySize.toString()}
                            placeholder="Enter party size"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setPartySize(e.target.value === '' ? math.bignumber(1) : math.bignumber(e.target.value))
                            }
                        />
                    </label>
                </div>
                <div>
                    <button type="submit">Calculate</button>
                    {!billPlusTip.isZero() && (
                        <div>
                            <label>
                                Your total bill with tip is ${billPlusTip.toFixed(2)}. Each party member's share is ${partyMemberShare.toFixed(2)}.
                            </label>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default TipCalculator;
