'use client'

import React, { useEffect, useState } from 'react'
import { LiveProvider, LivePreview, LiveError } from 'react-live'
import { AnimatePresence, motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'
/**
 * <FileRenderer src="/snippets/demo.jsx" />
 * <FileRenderer src="https://raw.githubusercontent.com/your/repo/branch/path/component.jsx" />
 */
export default function FileRenderer({ src }) {
  const [code, setCode] = useState('')

  useEffect(() => {
    if (!src) return
    fetch(src)
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to fetch ${src}: ${r.status}`)
            console.log(src)
        return r.text()               // <-- plain text, not JSON
      })
      .then((code)=>{console.log(code);setCode(code)})
      .catch((err) => {
        console.error(err)
        setCode(`/* Error: ${err.message} */`)
      })
  }, [src])

  if (!code) return <p>Loading snippet…</p>

  return (
    <LiveProvider code={code} noInline scope={{ motion, React,styled,useState,useEffect,AnimatePresence,keyframes }}>
      <LivePreview />
      <LiveError />
    </LiveProvider>
  )
}
