import { fireEvent, render, screen } from '@testing-library/react'
import Acordeon from './Acordeon'

describe('Acordeon', () => {
  beforeEach(() => {
    render(
      <Acordeon title='test'>
        <h3>My content title</h3>
        <p>some content</p>
      </Acordeon>
    )
  })

  test('should show title all the time', () => {
    expect(screen.getByText('test')).toBeDefined()
  })

  test('should not show the content at the start', () => {
    expect(screen.queryByText(/content/i)).toBeNull()
  })

  test('should show content after pressing the show button', () => {
    const button = screen.getByText(/show/i)

    fireEvent.click(button)

    expect(screen.queryAllByText(/content/i)).toBeDefined()
    expect(screen.queryAllByText(/content/i).length).toBeGreaterThanOrEqual(1)
  })
})