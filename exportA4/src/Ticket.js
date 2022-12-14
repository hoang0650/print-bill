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
              <p className="p0 ft0">T???NG C??NG TY ???????NG S???T VI???T NAM</p>
              <p className="p1 ft1">C??NG TY TNHH M???T TH??NH VI??N</p>
              <p className="p2 ft1">V???N T???I ???????NG S???T S??I G??N</p>
              <p className="p3 ft2">TH??? L??N T??U H???A</p>
              <p className="p4 ft3">BOARDING PASS</p>
              <p className="p5 ft4">M?? v??/TicketID : {ticket_code}</p>
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
                        Ga ??i
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
                        Ga ?????n
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
                      <p className="p9 ft0">T??u/Train:</p>
                    </td>
                    <td className="tr2 td1">
                      <p className="p10 ft7">{train}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr3 td0">
                      <p className="p9 ft0">Ng??y ??i/Date:</p>
                    </td>
                    <td className="tr3 td1">
                      <p className="p11 ft7">
                        {start_day}.{start_month}.{start_year}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr4 td0">
                      <p className="p9 ft0">Gi??? ??i/Time:</p>
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
                        Ch???/Seat: <span className="ft7">{chair}</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="tr5 td0">
                      <p className="p9 ft0">Lo???i v??/Ticket:</p>
                    </td>
                    <td className="tr5 td1">
                      <p className="p12 ft4">To??n v??</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="p14 ft9">
                <span className="ft8">Lo???i ch???/Class:</span>
                {type} <span className="ft8">H??? t??n/Name</span>
                {name}
              </p>
              <p className="p15 ft0">
                Gi???y t???/Passport <span className="ft7">{paper}</span>
              </p>
              <p className="p15 ft0">
                Gi??/Price: <span className="ft7">{price_number}VN</span>
              </p>
              <p className="p16 ft10">
                Ghi ch??: Th??? l??n t??u h???a kh??ng ph???i l?? h??a ????n GTGT v?? kh??ng c??
                gi?? tr??? thanh to??n.
              </p>
              <p className="p17 ft10">
                ????? tra c???u h??a ????n ??i???n t??? xin vui l??ng truy c???p ?????a ch??? trang
                web:
              </p>
              <p className="p18 ft11">
                This boarding pass is not an official invoice. To receive
                electronic invoice please visit website address at:
                http://doadon.vantaiduongsathanoi.vn
              </p>
              <p className="p19 ft10">
                ????? ?????m b???o quy???n l???i, qu?? kh??ch vui l??ng mang theo th??? l??n t??u
                kh???a c??ng v???i gi???y t??? t??y
              </p>
              <p className="p20 ft12">th??n trong su???t h??nh tr??nh.</p>
              <p className="p21 ft12">
                Ng??y in/Printed date: {ticket_day}{" "}
                <span className="ft7">/ </span>
                {ticket_month}
                <span className="ft7">/ </span>
                {ticket_year}
              </p>
              <table cellPadding={0} cellSpacing={0} className="t1">
                <tbody>
                  <tr>
                    <td className="tr6 td2">
                      <p className="p9 ft12">Ng??y thanh to??n/Payment date:</p>
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
