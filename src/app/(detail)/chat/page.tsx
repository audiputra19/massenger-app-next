import { Plus, Search } from "lucide-react";
import Image from "next/image";

export default function Chat() {
    return (
        <div>
            <div className="py-3 mx-3 border-b border-gray-200">
                <span className="text-lg font-bold text-gray-700">Chat</span>
            </div>
            <div className="p-3">
                <div className="relative">
                    <div className="absolute pl-3 flex items-center h-full">
                        <Search className="h-4 w-4 text-gray-400"/>
                    </div>
                    <input 
                        type="text"
                        className="w-full outline-none pl-10 pr-3 py-2 bg-gray-100 rounded-xl text-sm text-gray-600"
                        placeholder="Search"
                    />
                </div>
            </div>
            <div className="p-3">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="font-semibold text-sm text-gray-400">Last chats</span>
                    </div>
                    <div>
                        <div 
                            className="p-2 bg-blue-100 text-blue-700 rounded-xl cursor-pointer"
                        >
                            <Plus className="h-4 w-4"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <div className="flex flex-col">
                    <div className="flex justify-between bg-gray-100 p-3 w-full cursor-pointer">
                        <div className="flex gap-3">
                            <img 
                                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?semt=ais_hybrid" 
                                alt="avatar"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                            <div className="flex flex-col">
                                <div>
                                    <span className="text-sm font-semibold text-gray-700">John Anderson</span>
                                </div>
                                <div className="max-w-[9rem]">
                                    <span className="text-xs font-semibold text-gray-400 truncate inline-block max-w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <span className="text-xs font-semibold text-gray-400">06:38</span>
                            <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex justify-center items-center">
                                <span className="text-[11px]">3</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between p-3 w-full cursor-pointer hover:bg-gray-100">
                        <div className="flex gap-3">
                            <img 
                                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg" 
                                alt="avatar"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                            <div className="flex flex-col">
                                <div>
                                    <span className="text-sm font-semibold text-gray-700">Jane Alison</span>
                                </div>
                                <div className="max-w-[9rem]">
                                    <span className="text-xs font-semibold text-gray-400 truncate inline-block max-w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <span className="text-xs font-semibold text-gray-400">20:14</span>
                            <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex justify-center items-center">
                                <span className="text-[11px]">12</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between p-3 w-full cursor-pointer hover:bg-gray-100">
                        <div className="flex gap-3">
                            <img 
                                src="https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hair_23-2149436186.jpg" 
                                alt="avatar"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                            <div className="flex flex-col">
                                <div>
                                    <span className="text-sm font-semibold text-gray-700">Sofia Natalie</span>
                                </div>
                                <div className="max-w-[9rem]">
                                    <span className="text-xs font-semibold text-gray-400 truncate inline-block max-w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 items-center">
                            <span className="text-xs font-semibold text-gray-400">15:20</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}