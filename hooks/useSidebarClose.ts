import { useCallback, useState } from "react";

const useSidebarClose = (onDone: () => void) => {
  const [closing, setClosing] = useState(false)

  const onExit = useCallback(() => {
    if (closing) return;

    setClosing(true)
    setTimeout(() => onDone(), 200)
  }, [])

  return [closing, onExit] as const
}

export default useSidebarClose