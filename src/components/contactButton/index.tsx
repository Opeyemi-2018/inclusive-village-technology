import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';
import type { ReactNode } from 'react';

interface LinkWithArrowProps {
    href: string;
    label: string;
    underlineColor?: string;
    icon?: ReactNode;
    iconColor?: string;
    className?: string;
}

const LinkWithArrow: React.FC<LinkWithArrowProps> = ({
    href,
    label,
    underlineColor = 'bg-black',
    icon,
    iconColor = 'text-orange-600',
    className = '',
}) => {
    return (
        <div className={className}>
            <Link
                href={href}
                className="uppercase flex flex-col items-start gap-1 font-semibold group"
            >
                <div className="flex items-center gap-3">
                    {label}
                    {/* Render passed icon or default */}
                    {icon ?? <MdOutlineArrowOutward className={iconColor} size={30} />}
                </div>
                <span className={`w-10 h-[2px] ${underlineColor}`}></span>
            </Link>
        </div>
    );
};

export default LinkWithArrow;
