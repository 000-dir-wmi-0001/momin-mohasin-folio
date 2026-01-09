import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../components/theme-provider'

// Mock next-themes to avoid matchMedia issues
jest.mock('next-themes', () => ({
  ThemeProvider: ({ children, ...props }) => <div {...props}>{children}</div>,
}))

describe('ThemeProvider', () => {
  it('renders children correctly', () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Test Child</div>
      </ThemeProvider>
    )

    expect(screen.getByTestId('child')).toBeInTheDocument()
    expect(screen.getByText('Test Child')).toBeInTheDocument()
  })

  it('passes props to wrapper div', () => {
    const { container } = render(
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <div>Test</div>
      </ThemeProvider>
    )

    // The wrapper div should have the props
    const wrapper = container.firstChild
    expect(wrapper).toHaveAttribute('attribute', 'class')
    expect(wrapper).toHaveAttribute('defaultTheme', 'dark')
  })
})