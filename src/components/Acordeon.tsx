import { ReactNode, useState } from 'react'

type AcordeonProps = {
  title: string
  children: ReactNode
}

export default function Acordeon({title, children}: AcordeonProps) {
  const [showContent, setShowContent] = useState(true)

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <button onClick={() => setShowContent((prevState) => !prevState)}>
          { showContent ? 'Hide' : 'Show' }
        </button>
      </div>
      {showContent && <div>{children}</div>}
    </div>
  )
}
