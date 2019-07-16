import './index.scss'
import { Row, Col } from 'antd'
import { Header, Footer } from 'components/organisms'

export default ({ children }) => {
  return (
    <Row>
      <Col xl={3} md={2} xs={1} />
      <Col xl={18} md={20} xs={22}>
        <Header />
        {children}
        <Footer />
      </Col>
      <Col xl={3} md={2} xs={1} />
    </Row>
  )
}
