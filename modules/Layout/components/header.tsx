'use client'
import { UserProps } from '@/modules/Layout/types';
import React, { useState } from 'react';
import { Search, Plus, Bell, Settings, ChevronDown, Rss } from 'lucide-react';
import UserButton from '@/modules/authentication/components/user-button';
import SearchBar from './search';
import Workspace from './workspace';
import InviteMembers from './invite-members';

interface Props {
    user: UserProps,
}

export default function Header({ user }: Props) {
    return (
        <header className="bg-zinc-950 border-b border-zinc-800/50 select-none">
            <div className="flex items-center justify-between px-6 py-3.5">
                {/* Logo */}
                <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-3 cursor-pointer group">
                        <div className="w-9 h-9 bg-violet-600 rounded-lg flex items-center justify-center group-hover:bg-violet-500 transition-colors">
                            <Rss className="w-5 h-5 text-white" strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-semibold text-white">
                            PostHub
                        </span>
                    </div>

                    {/* Workspace Selector (Hoppscotch-style) */}
                    <Workspace />
                </div>
                {/* Search Bar */}
                <SearchBar />

                {/* Right Section */}
                <div className="flex items-center space-x-2">
                    {/* Invite Member Button */}
                    <InviteMembers />

                    {/* Notifications */}
                    <button
                        className="relative p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-violet-600 rounded-full"></span>
                    </button>

                    {/* Settings */}
                    <button
                        className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <Settings className="w-5 h-5" />
                    </button>

                    {/* Profile Dropdown */}
                    <div className="relative">
                        <UserButton user={user} />
                    </div>
                </div>
            </div>
        </header>
    );
}