import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'next-themes'
import ModeToggle from '../ModeToggle'

describe('ModeToggle', () => {
  it('renders theme toggle button', () => {
    render(
      <ThemeProvider>
        <ModeToggle />
      </ThemeProvider>
    )

    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toBeInTheDocument()
  })

  it('has correct ARIA attributes', () => {
    render(
      <ThemeProvider>
        <ModeToggle />
      </ThemeProvider>
    )

    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toHaveAttribute('aria-haspopup', 'menu')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })
}) 