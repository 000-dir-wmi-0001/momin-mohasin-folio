import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'

describe('Hero Component', () => {
  it('renders the hero content', () => {
    render(<Hero />)

    // Check if key elements are present
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument()
    expect(screen.getByText(/Momin Mohasin/i)).toBeInTheDocument()
  })

  it('renders action links', () => {
    render(<Hero />)

    // Check for links that look like buttons
    expect(screen.getByRole('link', { name: /View My Work/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Download Resume/i })).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Hero />)

    // Check for alt text on images if any
    const images = screen.queryAllByRole('img')
    images.forEach(img => {
      expect(img).toHaveAttribute('alt')
    })
  })
})