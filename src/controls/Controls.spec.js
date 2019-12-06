import React from 'react'
import { render, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Controls from './Controls'


test('Provides buttons to toggle closed/open and locked/unlocked', () => {
    const controls = render(<Controls/>)
    controls.getByText(/lock/i)
    controls.getByText(/close/i)
})

test('Closed toggle button is disabled if gate is locked ', () => {
    const controls = render(<Controls locked={true} closed={false}/>)
    const closeBtn = controls.getByTestId('closeBtn')
    expect(closeBtn).toHaveAttribute('disabled')
})

test('Locked toggle button is disabled if gate is open ', () => {
    const controls = render(<Controls closed={false}/>)
    const lockBtn = controls.getByTestId('lockBtn')
    expect(lockBtn).toHaveAttribute('disabled')
})

// test('Button functionality', () => {
//     const controls = render(<Controls locked={true}/>)
//     const lockBtn = controls.getByTestId('lockBtn')
//     act(() => {
//         fireEvent.click(lockBtn)
//     })
//     expect(lockBtn.textContent).toMatch(/unlock gate/i)
// })

// test('Button functionality', () => {
//     const controls = render(<Controls/>)
//     const closeBtn = controls.getByTestId('closeBtn')
//     act(() => {
//         fireEvent.click(closeBtn)
//     })
//     expect(closeBtn.textContent).toMatch(/close gate/i)
// })