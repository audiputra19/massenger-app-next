'use client'
import { CircleFadingPlus, CircleUser, MessageSquareText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div>
            <div className="lg:block hidden">
                <div className="pt-3 border-r border-gray-200 flex flex-col gap-2 min-h-screen">
                    <Link 
                        href='/chat'
                        className={`${pathname === '/chat' 
                        ? `bg-blue-100 text-blue-700` 
                        : `text-gray-400 hover:bg-gray-100 hover:text-gray-700 
                        hover:cursor-pointer`} 
                        flex justify-center items-center mx-3 p-3 rounded-lg`}
                    >
                        <MessageSquareText className="h-6 w-6"/>
                    </Link>
                    <Link
                        href='/contact' 
                        className={`${pathname === '/contact' 
                        ? `bg-blue-100 text-blue-700` 
                        : `text-gray-400 hover:bg-gray-100 hover:text-gray-700 
                        hover:cursor-pointer`} 
                        flex justify-center items-center mx-3 p-3 rounded-lg`}
                    >
                        <CircleUser className="h-6 w-6"/>
                    </Link>
                    <Link
                        href='/status' 
                        className={`${pathname === '/status' 
                        ? `bg-blue-100 text-blue-700` 
                        : `text-gray-400 hover:bg-gray-100 hover:text-gray-700 
                        hover:cursor-pointer`} 
                        flex justify-center items-center mx-3 p-3 rounded-lg`}
                    >
                        <CircleFadingPlus className="h-6 w-6"/>
                    </Link>
                </div>
            </div>
            <div className="lg:hidden">
                <div className="fixed bottom-0 left-0 right-0 grid grid-cols-3 gap-3 border-t border-gray-200">
                    <Link 
                        href='/chat'
                        className={`${pathname === '/chat' 
                        ? `bg-blue-100 text-blue-700` 
                        : `text-gray-400 hover:bg-gray-100 hover:text-gray-700 
                        hover:cursor-pointer`} 
                        flex justify-center items-center mx-3 p-3 rounded-lg`}
                    >
                        <MessageSquareText className="h-6 w-6"/>
                    </Link>
                    <Link
                        href='/contact' 
                        className={`${pathname === '/contact' 
                        ? `bg-blue-100 text-blue-700` 
                        : `text-gray-400 hover:bg-gray-100 hover:text-gray-700 
                        hover:cursor-pointer`} 
                        flex justify-center items-center mx-3 p-3 rounded-lg`}
                    >
                        <CircleUser className="h-6 w-6"/>
                    </Link>
                    <Link
                        href='/status' 
                        className={`${pathname === '/status' 
                        ? `bg-blue-100 text-blue-700` 
                        : `text-gray-400 hover:bg-gray-100 hover:text-gray-700 
                        hover:cursor-pointer`} 
                        flex justify-center items-center mx-3 p-3 rounded-lg`}
                    >
                        <CircleFadingPlus className="h-6 w-6"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}