
import React from 'react';

interface AppIconProps {
    icon: React.ReactNode;
    label: string;
    href?: string;
    onClick?: () => void;
    isExternal?: boolean;
}

const AppIcon: React.FC<AppIconProps> = ({ icon, label, href, onClick, isExternal }) => {
    const commonClasses = "flex flex-col items-center justify-center p-4 w-32 h-32 md:w-36 md:h-36 gap-2 rounded-2xl transition-all duration-300 ease-in-out cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-blue-400";
    const styleClasses = "bg-gray-800/50 backdrop-blur-lg border border-white/10 text-gray-300 hover:bg-gray-700/70 hover:scale-105 hover:text-white";

    const content = (
        <>
            <div className="w-12 h-12 md:w-16 md:h-16 text-gray-300 group-hover:text-white transition-colors">
                {icon}
            </div>
            <span className="text-sm font-medium text-center">{label}</span>
        </>
    );

    if (href) {
        return (
            <a href={href} target={isExternal ? "_blank" : "_self"} rel={isExternal ? "noopener noreferrer" : ""} className={`${commonClasses} ${styleClasses}`}>
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`${commonClasses} ${styleClasses}`}>
            {content}
        </button>
    );
};

export default AppIcon;
