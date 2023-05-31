import { useId } from 'react'

export function Section({ title, dates, children }) {
  let id = useId()

  return (
    <section
      aria-labelledby={id}
      className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-8 md:grid-cols-4">
        <h2
          id={id}
          className="flex flex-col text-sm font-semibold text-zinc-800 dark:text-zinc-100"
        >
          {title}
          <span className="text-xs text-zinc-600 dark:text-zinc-400">
            {dates}
          </span>
        </h2>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}
