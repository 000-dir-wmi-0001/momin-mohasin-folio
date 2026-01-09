import { render, screen } from '@testing-library/react'
import Home from '../app/page'

// Mock dynamic imports to avoid loading issues in tests
jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => <div>Dynamic Component</div>
  return DynamicComponent
})

describe('Home Page', () => {
  it('renders the main content', () => {
    render(<Home />)

    // Check if main content is rendered
    const mainElement = screen.getByRole('main')
    expect(mainElement).toBeInTheDocument()
  })

  it('renders hero section', () => {
    render(<Home />)

    // Check for hero section
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    render(<Home />)

    // Check for semantic HTML
    expect(screen.getByRole('main')).toBeInTheDocument()
    // The hero section should be present
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument()
  })
})