import React, { useRef } from "react";
import { Button } from "antd";
import "./App.css";
import PrintComponents from "react-print-components";
import QRcode from "qrcode.react";
function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
class Template extends React.Component {
  componentDidUpdate() {
    if (this.props.show) {
      this.ref.click();
      this.props.handleShow("Ticket", false);
    }
  }
  render() {
    const {
      ticket_code,
      start,
      start_code,
      des_code,
      id,
      des,
      time,
      train,
      start_day,
      start_month,
      start_year,
      ticket_day,
      ticket_month,
      ticket_year,
      wagon,
      chair,
      type_code,
      name,
      price_number,
      type,
      paper,
    } = this.props.data;
    const qrCodeValue = `${ticket_code};${train};${start_code};${des_code};${ticket_day}${ticket_month}${ticket_year};${start_day}${start_month}${start_year}${wagon}${chair};${name};1;${id};1;33;${type_code};121;${makeid(
      50
    )}`;
    return (
      <React.Fragment>
        <PrintComponents trigger={<div ref={(ref) => (this.ref = ref)}></div>}>
          <div
            style={{
              color: "black",
              margin: "auto",
              width: "8cm",
            }}
            className="ticket-page"
            id="page_1"
          >
            <div
              style={{
                top: 116,
                margin: "auto",
                left: "calc(4cm - 72px)",
              }}
              id="p1dimg1"
            >
              <QRcode
                id={qrCodeValue}
                value={qrCodeValue}
                size={130}
                level={"H"}
                includeMargin={true}
              />
            </div>
            <div id="id1_1">
              <p className="p0 ft0">TỔNG CÔNG TY ĐƯỜNG SẮT VIỆT NAM</p>
              <p className="p1 ft1">CÔNG TY TNHH MỘT THÀNH VIÊN</p>
              <p className="p2 ft1">VẬN TẢI ĐƯỜNG SẮT SÀI GÒN</p>
              <p className="p3 ft2">THẺ LÊN TÀU HỎA</p>
              <p className="p4 ft3">BOARDING PASS</p>
              <p className="p5 ft4">Mã vé/TicketID : {ticket_code}</p>
              <table cellPadding={0} cellSpacing={0} className="t0">
                <tbody>
                  <tr>
                    <td className="tr0 td0">
                      <p
                        style={{
                          paddingLeft: 24,
                        }}
                        className="p6 ft4"
                      >
                        Ga đi
                      </p>
                    </td>
                    <td className="tr0 td1">
                      <p
                        style={{
                          padding: 0,
                          textAlign: "right",
                        }}
                        className="p7 ft4"
                      >
                        Ga đến
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr1 td0">
                      <p className="p6 ft5">{start}</p>
                    </td>
                    <td className="tr1 td1">
                      <p className="p8 ft6">{des}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2 td0">
                      <p className="p9 ft0">Tàu/Train:</p>
                    </td>
                    <td className="tr2 td1">
                      <p className="p10 ft7">{train}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr3 td0">
                      <p className="p9 ft0">Ngày đi/Date:</p>
                    </td>
                    <td className="tr3 td1">
                      <p className="p11 ft7">
                        {start_day}.{start_month}.{start_year}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr4 td0">
                      <p className="p9 ft0">Giờ đi/Time:</p>
                    </td>
                    <td className="tr4 td1">
                      <p className="p12 ft7">{time}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr3 td0">
                      <p className="p9 ft0">
                        Toa/Coach <span className="ft7">{wagon}</span>
                      </p>
                    </td>
                    <td className="tr3 td1">
                      <p className="p13 ft0">
                        Chỗ/Seat: <span className="ft7">{chair}</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr5 td0">
                      <p className="p9 ft0">Loại vé/Ticket:</p>
                    </td>
                    <td className="tr5 td1">
                      <p className="p12 ft4">Toàn vé</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="p14 ft9">
                <span className="ft8">Loại chỗ/Class:</span>
                {type} <span className="ft8">Họ tên/Name</span>
                {name}
              </p>
              <p className="p15 ft0">
                Giấy tờ/Passport <span className="ft7">{paper}</span>
              </p>
              <p className="p15 ft0">
                Giá/Price: <span className="ft7">{price_number}VN</span>
              </p>
              <p className="p16 ft10">
                Ghi chú: Thẻ lên tàu hỏa không phải là hóa đơn GTGT và không có
                giá trị thanh toán.
              </p>
              <p className="p17 ft10">
                Để tra cứu hóa đơn điện tử xin vui lòng truy cập địa chỉ trang
                web:
              </p>
              <p className="p18 ft11">
                This boarding pass is not an official invoice. To receive
                electronic invoice please visit website address at:
                http://doadon.vantaiduongsathanoi.vn
              </p>
              <p className="p19 ft10">
                Để đảm bảo quyền lợi, quý khách vui lòng mang theo thẻ lên tàu
                khỏa cùng với giấy tờ tùy
              </p>
              <p className="p20 ft12">thân trong suốt hành trình.</p>
              <p className="p21 ft12">
                Ngày in/Printed date: {ticket_day}{" "}
                <span className="ft7">/ </span>
                {ticket_month}
                <span className="ft7">/ </span>
                {ticket_year}
              </p>
              <table cellPadding={0} cellSpacing={0} className="t1">
                <tbody>
                  <tr>
                    <td className="tr6 td2">
                      <p className="p9 ft12">Ngày thanh toán/Payment date:</p>
                    </td>
                    <td className="tr6 td3">
                      <p className="p22 ft12">
                        {ticket_day} <span className="ft7">/ </span>
                        {ticket_month}
                        <span className="ft7">/ </span>
                        {ticket_year}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr4 td2">
                      <p className="p9 ft12">Serial: WEB</p>
                    </td>
                    <td className="tr4 td3">
                      <p className="p9 ft13">&nbsp;</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="p23 ft14">=================</p>
            </div>
          </div>
        </PrintComponents>
      </React.Fragment>
    );
  }
}

Template.defaultProps = {
  data: {
    ticket_code: "",
    start: "",
    des: "",
    time: "",
    train: "",
    start_day: "",
    start_month: "",
    start_year: "",
    ticket_day: "",
    ticket_month: "",
    ticket_year: "",
    wagon: "",
    chair: "",
    type_code: "",
    name: "",
    price_number: "",
    paper: "",
  },
};
export default Template;
