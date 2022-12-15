import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

type ConvertDateProps = {
  dateISO: string
}

const ConvertDate = ({ dateISO }: ConvertDateProps) => {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), 'yyyy-MM-dd', {
        locale: ja,
      })}
    </time>
  )
}

export default ConvertDate
