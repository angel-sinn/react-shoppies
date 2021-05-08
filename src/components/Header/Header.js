import { Header } from 'semantic-ui-react'

import './Header.scss';

export default function HeaderTitle(props) {
  return (
  <div className="header">
    <Header size='large'>{props.title}</Header>
  </div>
  )
}
