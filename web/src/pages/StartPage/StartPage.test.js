import { render, cleanup } from '@testing-library/react'

import StartPage from './StartPage'

describe('StartPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<StartPage />)
    }).not.toThrow()
  })
})
