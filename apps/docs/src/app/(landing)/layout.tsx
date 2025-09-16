import { HomeOptions } from '@/lib/layout.shared'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import React, { ReactNode } from 'react'


interface LayoutProps {
    children: ReactNode;
}


export default function Layout({ children }: LayoutProps) {
    return (
        <HomeLayout {...HomeOptions()}>{children}</HomeLayout>
    )
}
