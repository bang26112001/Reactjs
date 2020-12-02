import React from 'react';
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from 'reactstrap';
import {Link} from 'react-router-dom';




const Layout = (props) => {
  return (
    <Container fluid>
      <div className="rainbowLogo">
        <ul class="c-rainbow">
          <li class="c-rainbow__layer c-rainbow__layer--white">BADHABITS</li>
          <li class="c-rainbow__layer c-rainbow__layer--orange">BADHABITS</li>
          <li class="c-rainbow__layer c-rainbow__layer--red">BADHABITS</li>
          <li class="c-rainbow__layer c-rainbow__layer--violet">BADHABITS</li>
          <li class="c-rainbow__layer c-rainbow__layer--blue">BADHABITS</li>
          <li class="c-rainbow__layer c-rainbow__layer--green">BADHABITS</li>
          <li class="c-rainbow__layer c-rainbow__layer--yellow">BADHABITS</li>
        </ul>
      </div>
      <div className="highlightTextIn">
        <Link to="/product">BAD HABITS SHOP</Link>
        <Link to="/product">BAD RABBIT SHOP</Link>
        <Link to="/product">COLLECTION</Link>
        <Link to="/product">SALE END SEASON</Link>
      </div>
      <Row>
        <Col md={12}>
          <Link to="/product">
            <img className='home-items' src="http://theme.hstatic.net/1000351433/1000471586/14/slideshow_1.jpg?v=558"></img>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
        <Link to="/product">
          <img className='home-items' src="http://theme.hstatic.net/1000351433/1000471586/14/slideshow_1cl.jpg?v=558"></img>
        </Link>
        </Col>
      </Row>
      <Row>
        <Col>
        <Link to="/product">
          <img className='home-items' src="http://theme.hstatic.net/1000351433/1000471586/14/banner_index_1.jpg?v=558"></img>
        </Link>
        </Col>
      </Row>
      <Row>
        <Col>
        <Link to="/product">
          <img className='home-items' src="http://theme.hstatic.net/1000351433/1000471586/14/banner_index_2.jpg?v=558"></img>
        </Link>
        </Col>
      </Row>
      <Row>
        <Col>
        <Link to="/product">
          <img className='home-items' src="http://theme.hstatic.net/1000351433/1000471586/14/banner_index_3.jpg?v=558"></img>
        </Link>
        </Col>
      </Row>
      <Breadcrumb>
        <BreadcrumbItem>HỖ TRỢ</BreadcrumbItem>
        <BreadcrumbItem active>MUA HÀNG:  </BreadcrumbItem>
        <a href="#">0907 799 384 - 0902 638 020</a>
      </Breadcrumb>
      <Row className="main-footer">
        <Col xs="6" className="footer-contact">
          <h4>Thông tin liên hệ</h4>
          <ul>
            <li className="contact-1">Hệ thống cửa hàng:
              <br/>Store 1: 93 Rạch Bùng Binh,Phường 9, Quận 3

              <br/>Store 2: 117 Trần Đình Xu, phường Nguyễn Cư Trinh, Quận 1 

              <br/>Store 3: 350 Điện Biên Phủ, phường 17, Quận Bình Thạnh

              <br/>Store 4: Vincom Bà Triêu tầng 7, Booth 28, Hà Nội

              <br/>Store 5: 444 Đường 30/4, thành phố Tây Ninh
              <br/>Store 6: 26 Lý Tự Trọng quận 1
              <br/>Store 7: Central market, Lê Lai, quận 1
              <br/>Store 8: 136 Nguyễn Hồng Đào, phường 9 quận Tân Bình
              <br/>Store 9: 57 Nguyễn Gia Trí ( D2 cũ) phường 25, quận Bình Thạnh
              <br/>
              <br/> Văn phòng đại diện: 152a Trần Quang Khải, quận 1
              </li>
              <li className="contact-2">0907 799 384 - 0902 638 020</li>
              <li className="contact-3">badhabits95.store@gmail.com</li>
          </ul>
        </Col>
        <Col xs="6"></Col>
      </Row>
      <Row>
        <Col className="Copyright">Copyright © 2020 Bad Habits store. Powered by Haravan</Col>
      </Row>
      
    </Container>
    
  );
}

export default Layout;

