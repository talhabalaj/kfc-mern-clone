import { Link } from "react-router-dom"

const KFCLogo = ({ small = false }) => {
  return (
    <Link to="/">
      <img src={`/assets/kfc-logo${small ? '-small' : ''}.svg`} />
    </Link>
  )
}

export { KFCLogo }
