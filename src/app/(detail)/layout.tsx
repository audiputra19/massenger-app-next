import React from "react";

export default function DetailLayout({ 
    children 
} : { 
    children: React.ReactNode 
}) {
    return (
        <div className="grid lg:grid-cols-[300px_1fr] min-h-screen">
            <div className="border-r border-gray-200">
                {children}
            </div>
        </div>
    )
}