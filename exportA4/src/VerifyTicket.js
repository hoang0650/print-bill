import React, { useRef } from "react";
import background from "./1/verifyticket-background.png";
import "./VerifyTicket.css";
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
      this.props.handleShow("VerifyTicket", false);
    }
  }
  render() {
    const {
      number,
      id,
      ticket_code,
      booking_code,
      start_code,
      des_code,
      train,
      start_day,
      start_month,
      start_year,
      ticket_day,
      type,
      time,
      wagon,
      chair,
      paper,
      ticket_month,
      ticket_year,
      type_code,
      name,
      price_number,
      price_char,
      mst,
      start,
      des,
      origin_price,
      name_organization,
      tax,
      address,
      phone,
    } = this.props.data;
    const qrCodeValue = `${ticket_code};${train};${start_code};${des_code};${ticket_day}${ticket_month}${ticket_year};${start_day}${start_month}${start_year}${wagon}${chair};${name};1;${id};1;33;${type_code};121;${makeid(
      50
    )}`;
    return (
      <React.Fragment>
        <PrintComponents
          trigger={
            <div
              ref={(ref) => (this.ref = ref)}
              type="primary"
              htmlType="submit"
            ></div>
          }
        >
          <div style={{ position: "absolute", zIndex: 1, top: 274, left: 525 }}>
            <QRcode
              id={qrCodeValue}
              value={qrCodeValue}
              size={121}
              level={"H"}
              includeMargin={true}
            />
          </div>
          <div id="page_1222">
            <div id="p1dimg1222">
              <img src={background} id="p1img12222" />
            </div>
            <div className="dclr22222" />
            <div id="id1_12222">
              <p className="p00000 ft00000">THẺ LÊN TÀU HỎA</p>
              <p className="p00000 ft00000">BOARDING PASS</p>
              <p className="p11111 ft11111">Kính gửi quý khách hàng,</p>
              <p className="p222222 ft22222">
                Xin trân trọng cảm ơn quý khách đã lựa chọn sử dụng dịch vụ vận
                tải hành khách của Tổng công ty Đường Sắt Việt Nam. Quý khách đã
                thực hiện mua vé thành công với thông tin như sau:
              </p>
              <table cellPadding={0} cellSpacing={0} className="t0000">
                <tbody>
                  <tr>
                    <td className="tr000 td00000" />
                    <td className="tr000 td1111">
                      <p className="p33333 ft11111">Thông tin hành trình</p>
                    </td>
                    <td className="tr000 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr1111 td00000" />
                    <td className="tr1111 td1111">
                      <p className="p4444 ft11111">
                        Ga đi - Ga đến: {start} - {des}
                      </p>
                    </td>
                    <td className="tr1111 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2222 td00000" />
                    <td className="tr2222 td1111">
                      <p className="p4444 ft11111">Tàu/Train: {train}</p>
                    </td>
                    <td className="tr2222 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2222 td00000" />
                    <td className="tr2222 td1111">
                      <p className="p4444 ft11111">
                        Ngày đi/Date: {start_day}/{start_month}/{start_year}
                      </p>
                    </td>
                    <td className="tr2222 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2222 td00000" />
                    <td className="tr2222 td1111">
                      <p className="p4444 ft11111">Giờ đi/Time: {time}</p>
                    </td>
                    <td className="tr2222 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2222 td00000" />
                    <td className="tr2222 td1111">
                      <p className="p4444 ft11111">Toa/Coach: {wagon}</p>
                    </td>
                    <td className="tr2222 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2222 td00000" />
                    <td className="tr2222 td1111">
                      <p className="p4444 ft11111">
                        Chỗ/Seat: {chair} ({type})
                      </p>
                    </td>
                    <td className="tr2222 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2222 td00000" />
                    <td className="tr2222 td1111">
                      <p className="p33333 ft11111">Thông tin hành khách</p>
                    </td>
                    <td className="tr2222 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2222 td00000" />
                    <td className="tr2222 td1111">
                      <p className="p4444 ft11111">Họ tên/Full Name: {name}</p>
                    </td>
                    <td className="tr2222 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2222 td00000" />
                    <td className="tr2222 td1111">
                      <p className="p4444 ft11111">Giấy tờ/Passport: {paper}</p>
                    </td>
                    <td className="tr2222 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2222 td00000" />
                    <td className="tr2222 td1111">
                      <p className="p4444 ft11111">Loại vé/Ticket: Người lớn</p>
                    </td>
                    <td rowSpan={2} className="tr3333 td2222">
                      <p className="p33333 ft11111">
                        Mã đặt chỗ:{" "}
                        <span className="ft4444">{booking_code}</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr444 td00000" />
                    <td rowSpan={2} className="tr2222 td1111">
                      <p className="p33333 ft11111">
                        Giá vé/Price: {price_number} VNĐ
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr5555 td00000" />
                    <td rowSpan={2} className="tr2222 td2222">
                      <p className="p5555 ft11111">Mã vé: {ticket_code}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr444 td00000" />
                    <td rowSpan={2} className="tr6666 td1111">
                      <p className="p33333 ft55555">
                        (Giá vé trên đã có bảo hiểm, dịch vụ đi kèm và 10% thuế
                        GTGT)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr7777 td00000" />
                    <td className="tr7777 td2222">
                      <p className="p33333 ft666666">&nbsp;</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="p6666 ft88888">
                <span className="ft55555">-</span>
                <span className="ft7777">
                  Chú ý: Quý khách vui lòng truy cập địa chỉ website dưới đây để
                  tra cứu hóa đơn điện tử cho giao dịch mua vé tàu của Công ty
                  VTĐS Hà Nội - http://hoadon.vtdshn.vn
                </span>
              </p>
              <p className="p7777 ft99999">
                <span className="ft99999">-</span>
                <span className="ft100000">
                  Mã số tra cứu hóa đơn: DRPHBCA2
                </span>
              </p>
              <p className="p88888 ft99999">
                <span className="ft99999">-</span>
                <span className="ft100000">
                  Quý khách có thể kiểm tra thông tin Thẻ lên tàu hỏa này trên
                  website dsvn.vn mục "Kiểm tra vé"
                </span>
              </p>
              <p className="p9999 ft22222">
                Để đảm bảo quyền lợi của mình, quý khách vui lòng mang theo vé
                điện tử cùng với giấy tờ tùy thân ghi trong vé điện tử trong
                suốt thời gian hành trình và xuất trình cho nhân viên soát vé
                khi có yêu cầu
              </p>
            </div>
            <div id="id1_22222">
              <p className="p1000000 ft11111">
                Ngày in: {ticket_day}/{ticket_month}/{ticket_year} {time}
              </p>
            </div>
          </div>
        </PrintComponents>
      </React.Fragment>
    );
  }
}
Template.defaultProps = {
  data: {
    number: "",
    ticket_code: "",
    start_code: "",
    des_code: "",
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
    price_char: "",
    mst: "",
    origin_price: "",
    name_organization: "",
    tax: "",
    address: "",
    phone: "",
  },
};
export default Template;
