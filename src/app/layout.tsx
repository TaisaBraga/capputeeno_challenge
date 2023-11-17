"use client"
import { NavegateBar } from '@/components/organisms/NavegateBar'
import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { BeatLoader } from 'react-spinners'

export const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'Generated by create next app',
}

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  return (
    <html lang="en">
      <body className={saira.className}>
        {loading ? (
          <Loader>
            <BeatLoader color="#3C4148" />
          </Loader>
        ) : (
          <>
            <header>
              <NavegateBar />
            </header>
            {children}
          </>
        )}
      </body>
    </html>
  )
}
