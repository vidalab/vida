import { render, cleanup } from '@testing-library/react'

import AboutPage from './AboutPage'

import { renderTestRoutes } from '../../TestHelper'

describe('AboutPage', () => {
  beforeEach(() => {
    renderTestRoutes()
  })

  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<AboutPage />)
    }).not.toThrow()
  })
})
