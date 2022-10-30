type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="site">{children}</div>
}

export default Container
