import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Display from './Display'


test('Displays if gate is locked', () => {
    const display = render(<Display locked={true} closed={true}/>)
    display.getByText(/locked/i); 
})

test('Displays if gate is unlocked', () => {
    const display = render(<Display locked={false} closed={false}/>)
    display.getByText('Unlocked');
})

test('Displays if gate is open', () => {
    const display = render(<Display closed={false}/>)
    display.getByText(/open/i);
})

test('Displays if gate is closed', () => {
    const display = render(<Display closed={true}/>)
    display.getByText(/closed/i);
})

test('When locked uses class name red-led', () => {
    const display = render(<Display locked={true}/>)
    const panel = display.getByText(/locked/i)
    expect(panel.classList.contains('red-led')).toBe(true)
})

test('When unlocked uses class name green-led', () => {
    const display = render(<Display locked={false} closed={true}/>)
    const panel = display.getByText(/unlocked/i)
    expect(panel.classList.contains('green-led')).toBe(true)
})

test('When closed uses class name red-led', () => {
    const display = render(<Display locked={false} closed={true}/>)
    const panel = display.getByText(/closed/i)
    expect(panel.classList.contains('red-led')).toBe(true)
})

test('When open uses class name green-led', () => {
    const display = render(<Display locked={false} closed={false}/>)
    const panel = display.getByText(/open/i)
    expect(panel.classList.contains('green-led')).toBe(true)
})