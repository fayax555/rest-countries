import React from 'react'
import { styled, keyframes } from '@stitches/react'
import { violet, mauve, blackA } from '@radix-ui/colors'
import { HamburgerMenuIcon, DotFilledIcon } from '@radix-ui/react-icons'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import styledd from 'styled-components'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 220,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
})

const itemStyles = {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: violet.violet9,
    color: violet.violet1,
  },
}

const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, {
  ...itemStyles,
})

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: 'white',
})

// Exports
const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuContent = StyledContent
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
const DropdownMenuRadioItem = StyledRadioItem
const DropdownMenuArrow = StyledArrow

// Your app...
const Box = styledd.div`
  border: 2px solid #444;
`

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
})

export const DropdownMenuDemo = () => {
  const [person, setPerson] = React.useState('pedro')

  return (
    <Box>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconButton aria-label='filter by region'>
            <HamburgerMenuIcon />
          </IconButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={15}>
          <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenuRadioItem value='pedro'>
              Pedro Duarte
            </DropdownMenuRadioItem>
            <Itemm value='colm'>Colm Tuite</Itemm>
          </DropdownMenuRadioGroup>
          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  )
}

const Itemm = styledd(StyledRadioItem)`
  background: #444 !important;
`

export default DropdownMenuDemo
