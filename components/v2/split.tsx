import { Children, type CSSProperties, type ReactNode, type ElementType } from 'react'

/* Maketdagi splitOne'ning server varianti: sarlavha so'zlarga bo'linib,
   har biri .mask > i ichiga --wd kechikish bilan o'raladi. Brauzerda
   qayta bo'lish yo'q — til almashishi marshrut orqali bo'ladi. */
export function Split({
  as: Tag = 'h2',
  children,
  ...rest
}: {
  as?: ElementType
  children: ReactNode
  className?: string
  id?: string
  style?: CSSProperties
}) {
  let i = 0
  let key = 0
  const parts: ReactNode[] = []

  Children.forEach(children, child => {
    if (typeof child === 'string') {
      child.split(/(\s+)/).forEach(part => {
        if (!part.trim()) {
          if (part) parts.push(part)
          return
        }
        parts.push(
          <span className="mask" key={key++}>
            <i style={{ '--wd': `${i++ * 70}ms` } as CSSProperties}>{part}</i>
          </span>,
        )
      })
    } else if (child !== null && child !== undefined && child !== false) {
      parts.push(
        <span className="mask" key={key++}>
          <i style={{ '--wd': `${i++ * 70}ms` } as CSSProperties}>{child}</i>
        </span>,
      )
    }
  })

  return (
    <Tag data-split="" {...rest}>
      {parts}
    </Tag>
  )
}

/* Odometr: maketda [data-od] ichini skript quradi, bizda server quradi.
   rollOd (behaviors) ko'rinishga kirganda u'larni data-to raqamigacha buradi. */
export function Odometer({
  value,
  sup,
  className,
}: {
  value: string
  sup?: string
  className?: string
}) {
  return (
    <span className={className} data-od={value} {...(sup ? { 'data-sup': sup } : {})}>
      {value.split('').map((d, k) => (
        <span className="od__d" key={k}>
          <u data-to={d}>
            {Array.from({ length: 10 }, (_, n) => (
              <i key={n}>{n}</i>
            ))}
          </u>
        </span>
      ))}
      {sup ? <sup>{sup}</sup> : null}
    </span>
  )
}
