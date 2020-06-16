import { render, cleanup } from '@redwoodjs/testing'

import UserHomePage from './UserHomePage'

describe('UserHomePage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<UserHomePage />)
    }).not.toThrow()
  })
})
