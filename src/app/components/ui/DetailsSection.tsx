import React from 'react';

interface DetailsSectionProps {
    data: Record<string, string>;
}

const DetailsSection: React.FC<DetailsSectionProps> = ({ data }) => {
    return (
        <div className="w-full p-[4px] rounded-custom bg-light-hover dark:bg-dark-hover mt-8">
            <div className="w-full rounded-custom overflow-hidden bg-light-card dark:bg-dark-card">
                <table className="w-full">
                    <tbody>
                        {Object.entries(data).map(([key, value]) => (
                        <tr key={key}>
                            <td className="p-8 text-h3-bold text-light-secondary dark:text-dark-secondary">{key}</td>
                            <td className="p-8 text-h3 text-light-secondary dark:text-dark-secondary">{value}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DetailsSection;
