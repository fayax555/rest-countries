interface Props {
  title: string
  dataObj?: { name: string }[]
  dataStr?: string[]
}

const ListItem = ({ title, dataObj, dataStr }: Props) => {
  return (
    <p>
      {title}:{' '}
      {dataObj?.map(({ name }, index) => (
        <span key={name}>
          {name}
          {dataObj.length - 1 !== index && ','}{' '}
        </span>
      ))}
      {dataStr?.map((name, index) => (
        <span key={name}>
          {name}
          {dataStr.length - 1 !== index && ','}{' '}
        </span>
      ))}
    </p>
  )
}

export default ListItem
