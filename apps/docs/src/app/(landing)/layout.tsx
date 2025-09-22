import { HomeOptions } from '@/lib/layout.shared'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: {
        template: '%s | DeepAgent',
        default: 'DeepAgent',
    },
    icons: '/favicon.svg',
    manifest: 'https://deepagent.amardeep.space/site.webmanifest',
}

export default function Layout({ children }: LayoutProps) {
    return (
        <HomeLayout {...HomeOptions()}>{children}</HomeLayout>
    )
}
