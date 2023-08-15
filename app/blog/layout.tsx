import { PageContaier } from '@/components/misc';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import React from 'react'

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div className="flex-col bg-slate-50">
      <SiteHeader />
      <PageContaier className="min-h-[calc(100vh_-_10rem)]">
        {children}
      </PageContaier>
      <SiteFooter />
    </div>
  )
}

export default Layout;