// Test away
import React from 'react'
import { render, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Dashboard from './Dashboard'
import Controls from '../controls/Controls'


test('Renders Control and Display components', () => {
    const dashboard = render(<Dashboard/>)
    const display = dashboard.getByTestId('display')
    const controls = dashboard.getByTestId('controls')
})

test('Button functionality', () => {
    const controls = render(<Dashboard closed={true} locked={false}/>)
    const lockBtn = controls.getByTestId('lockBtn')
    act(() => {
        fireEvent.click(lockBtn)
    })
    expect(lockBtn.textContent).toMatch(/unlock gate/i)
})

test('Button functionality', () => {
    const controls = render(<Dashboard/>)
    const closeBtn = controls.getByTestId('closeBtn')
    act(() => {
        fireEvent.click(closeBtn)
    })
    expect(closeBtn.textContent).toMatch(/open gate/i)
})