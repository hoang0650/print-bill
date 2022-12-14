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
              <p className="p00000 ft00000">TH??? L??N T??U H???A</p>
              <p className="p00000 ft00000">BOARDING PASS</p>
              <p className="p11111 ft11111">K??nh g???i qu?? kh??ch h??ng,</p>
              <p className="p222222 ft22222">
                Xin tr??n tr???ng c???m ??n qu?? kh??ch ???? l???a ch???n s??? d???ng d???ch v??? v???n
                t???i h??nh kh??ch c???a T???ng c??ng ty ???????ng S???t Vi???t Nam. Qu?? kh??ch ????
                th???c hi???n mua v?? th??nh c??ng v???i th??ng tin nh?? sau:
              </p>
              <table cellPadding={0} cellSpacing={0} className="t0000">
                <tbody>
                  <tr>
                    <td className="tr000 td00000" />
                    <td className="tr000 td1111">
                      <p className="p33333 ft11111">Th??ng tin h??nh tr??nh</p>
                    </td>
                    <td className="tr000 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr1111 td00000" />
                    <td className="tr1111 td1111">
                      <p className="p4444 ft11111">
                        Ga ??i - Ga ?????n: {start} - {des}
                      </p>
                    </td>
                    <td className="tr1111 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2222 td00000" />
                    <td className="tr2222 td1111">
                      <p className="p4444 ft11111">T??u/Train: {train}</p>
                    </td>
                    <td className="tr2222 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2222 td00000" />
                    <td className="tr2222 td1111">
                      <p className="p4444 ft11111">
                        Ng??y ??i/Date: {start_day}/{start_month}/{start_year}
                      </p>
                    </td>
                    <td className="tr2222 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2222 td00000" />
                    <td className="tr2222 td1111">
                      <p className="p4444 ft11111">Gi??? ??i/Time: {time}</p>
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
                        Ch???/Seat: {chair} ({type})
                      </p>
                    </td>
                    <td className="tr2222 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2222 td00000" />
                    <td className="tr2222 td1111">
                      <p className="p33333 ft11111">Th??ng tin h??nh kh??ch</p>
                    </td>
                    <td className="tr2222 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2222 td00000" />
                    <td className="tr2222 td1111">
                      <p className="p4444 ft11111">H??? t??n/Full Name: {name}</p>
                    </td>
                    <td className="tr2222 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2222 td00000" />
                    <td className="tr2222 td1111">
                      <p className="p4444 ft11111">Gi???y t???/Passport: {paper}</p>
                    </td>
                    <td className="tr2222 td2222">
                      <p className="p33333 ft3333">&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr2222 td00000" />
                    <td className="tr2222 td1111">
                      <p className="p4444 ft11111">Lo???i v??/Ticket: Ng?????i l???n</p>
                    </td>
                    <td rowSpan={2} className="tr3333 td2222">
                      <p className="p33333 ft11111">
                        M?? ?????t ch???:{" "}
                        <span className="ft4444">{booking_code}</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr444 td00000" />
                    <td rowSpan={2} className="tr2222 td1111">
                      <p className="p33333 ft11111">
                        Gi?? v??/Price: {price_number} VN??
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr5555 td00000" />
                    <td rowSpan={2} className="tr2222 td2222">
                      <p className="p5555 ft11111">M?? v??: {ticket_code}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr444 td00000" />
                    <td rowSpan={2} className="tr6666 td1111">
                      <p className="p33333 ft55555">
                        (Gi?? v?? tr??n ???? c?? b???o hi???m, d???ch v??? ??i k??m v?? 10% thu???
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
                  Ch?? ??: Qu?? kh??ch vui l??ng truy c???p ?????a ch??? website d?????i ????y ?????
                  tra c???u h??a ????n ??i???n t??? cho giao d???ch mua v?? t??u c???a C??ng ty
                  VT??S H?? N???i - http://hoadon.vtdshn.vn
                </span>
              </p>
              <p className="p7777 ft99999">
                <span className="ft99999">-</span>
                <span className="ft100000">
                  M?? s??? tra c???u h??a ????n: DRPHBCA2
                </span>
              </p>
              <p className="p88888 ft99999">
                <span className="ft99999">-</span>
                <span className="ft100000">
                  Qu?? kh??ch c?? th??? ki???m tra th??ng tin Th??? l??n t??u h???a n??y tr??n
                  website dsvn.vn m???c "Ki???m tra v??"
                </span>
              </p>
              <p className="p9999 ft22222">
                ????? ?????m b???o quy???n l???i c???a m??nh, qu?? kh??ch vui l??ng mang theo v??
                ??i???n t??? c??ng v???i gi???y t??? t??y th??n ghi trong v?? ??i???n t??? trong
                su???t th???i gian h??nh tr??nh v?? xu???t tr??nh cho nh??n vi??n so??t v??
                khi c?? y??u c???u
              </p>
            </div>
            <div id="id1_22222">
              <p className="p1000000 ft11111">
                Ng??y in: {ticket_day}/{ticket_month}/{ticket_year} {time}
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
