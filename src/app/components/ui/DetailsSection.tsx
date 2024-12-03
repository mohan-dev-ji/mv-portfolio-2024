
import React from 'react';

interface DetailsSectionProps {
    data: Record<string, string>;
}

const DetailsSection: React.FC<DetailsSectionProps> = ({ data }) => {
    return (
        <div className="w-full p-[4px] rounded-[24px] bg-hover mt-8">
            <div className="w-full rounded-[20px] overflow-hidden bg-card">
        <table className="w-full">
        <tbody>
            {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
                <td className="p-8 text-h3-bold text-secondary">{key}</td>
                <td className="p-8 text-h3 text-secondary">{value}</td>
            </tr>
            ))}
        </tbody>
        </table>
        </div>
        </div>
    );
};

export default DetailsSection;