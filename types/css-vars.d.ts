/* Maket style atributlarida CSS o'zgaruvchilari ishlatadi (--d, --v, --p…).
   React tiplariga custom property ruxsatini bir joyda beramiz. */
import 'react'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
}
