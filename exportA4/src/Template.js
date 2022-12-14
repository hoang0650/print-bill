import React, { useRef } from "react";
import background from "./background1.jpg";
import { Button } from "antd";
import "./App.css";
import "./Templete.css";
import PrintComponents from "react-print-components";
import urlBackGround from "./1/1.svg";
import image1 from "./1/img/1.png";
import image2 from "./1/img/2.png";
import svg from "./shapes-and-symbols.svg";
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
  componentDidMount() {
    if (this.ref) {
      setTimeout(() => {
        this.ref.click();
        this.props.handleShow("Bill", false);
      }, 500);
    }
  }
  componentDidUpdate() {
    if (this.props.show) {
      this.ref.click();
      this.props.handleShow("Bill", false);
    }
  }
  render() {
    const {
      number,
      id,
      ticket_code,
      start_code,
      des_code,
      train,
      start_day,
      start_month,
      start_year,
      ticket_day,
      ticket_month,
      ticket_year,
      type_code,
      name,
      price_number,
      price_char,
      mst,
      origin_price,
      name_organization,
      tax,
      address,
      phone,
      wagon,
      chair,
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
          <div
            style={{
              position: "absolute",
              top: 163,
              left: 738,
              zIndex: 1,
            }}
          >
            <QRcode
              id={qrCodeValue}
              value={qrCodeValue}
              size={121}
              level={"H"}
              includeMargin={true}
            />
          </div>
          <div
            id="p1"
            style={{
              position: "relative",
              backgroundColor: "white",
              width: "935px",
              height: "1210px",
            }}
          >
            <div
              id="pg1Overlay"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: 1,
                backgroundColor: "rgba(0,0,0,0)",
                WebkitUserSelect: "none",
              }}
            />
            <img style={{ position: "absolute", top: 0 }} src={urlBackGround} />
            <img
              style={{
                position: "absolute",
                bottom: 287,
                left: 70,
              }}
              src={image1}
              width={46}
            />
            <img
              style={{
                position: "absolute",
                top: 70,
                left: 78,
              }}
              src={image2}
              width={167}
            />
            <div id="t1_1" className="t s1_1">
              ????n v??? cung c???p gi???i ph??p h??a ????n ??i???n t???: T???ng c??ng ty d???ch v???
              vi???n th??ng VNPT Vinaphone, MST:0106869738,{" "}
            </div>
            <div id="t5_1" className="t s3_1">
              ??i
            </div>
            <div id="t6_1" className="t s2_1">
              ???n tho???i:04.37930597
            </div>
            <div id="t7_1" className="t s4_1">
              H??A ????N GI?? TR
            </div>
            <div id="t8_1" className="t s5_1">
              ??? GIA T
            </div>
            <div id="t9_1" className="t s6_1">
              ??NG
            </div>
            <div id="t3t_1" className="t s8_1">
              {ticket_day}
            </div>
            <div id="t3u_1" className="t s8_1">
              {ticket_month}
            </div>
            <div id="t3v_1" className="t s8_1">
              {ticket_year}
            </div>
            <div id="ta_1" className="t s7_1">
              Ng??y{" "}
            </div>
            <div id="tb_1" className="t s7_1">
              th??ng{" "}
            </div>
            <div id="tc_1" className="t s7_1">
              n??m{" "}
            </div>
            <div id="td_1" className="t s8_1">
              01GTKT0/015
            </div>
            <div id="te_1" className="t s8_1">
              BA/15E
            </div>
            <div id="tf_1" className="t s9_1">
              C??NG TY TNHH M???T TH??NH VI??N V???N T???I ???????NG S???T S??I G??N
            </div>
            <div id="tk_1" className="t sa_1">
              S??? 136 H??m Nghi, Ph?????ng B???n Th??nh , Qu???n 1, Th??nh ph??? H??? Ch?? Minh
            </div>
            <div id="tn_1" className="t s8_1">
              0301120371
            </div>
            <div id="to_1" className="t sc_1">
              (84??8) 38290199
            </div>
            <div id="tp_1" className="t s8_1">
              102010000115386{" "}
            </div>
            <div id="tq_1" className="t s8_1">
              sgontd
            </div>
            <div id="tr_1" className="t s8_1">
              SGO32
            </div>
            <div id="ts_1" className="t sb_1">
              Ng??n h??ng TMCP C??ng th????ng VN ?? Chi nh??nh 3, Th??nh ph??? H??? Ch?? Minh
            </div>
            <div id="tv_1" className="t sa_1">
              TI???N M???T
            </div>
            <div id="tx_1" className="t se_1">
              M???u s???:
            </div>
            <div id="ty_1" className="t sd_1">
              K?? hi???u
            </div>
            <div style={{ color: "#6181c2" }} id="t10_1" className="t s7_1">
              ????n v??? b??n h??ng:
            </div>
            <div style={{ color: "#6181c2" }} id="t12_1" className="t sg_1">
              ?????a ch???:
            </div>
            <div style={{ color: "#6181c2" }} id="t14_1" className="t sh_1">
              MST:{" "}
            </div>
            <div style={{ color: "#6181c2" }} id="t15_1" className="t si_1">
              T??i kho
            </div>
            <div style={{ color: "#6181c2" }} id="t16_1" className="t sf_1">
              ???n:{" "}
            </div>
            <div style={{ color: "#6181c2" }} id="t17_1" className="t sh_1">
              T
            </div>
            <div style={{ color: "#6181c2" }} id="t18_1" className="t sf_1">
              ???i ng??n h??ng:
            </div>
            <div style={{ color: "#6181c2" }} id="t19_1" className="t se_1">
              ??i???n tho???i:
            </div>
            <div style={{ color: "#6181c2" }} id="t1a_1" className="t sd_1">
              M?? NV:
            </div>
            <div style={{ color: "#6181c2" }} id="t1b_1" className="t sd_1">
              M?? CV:
            </div>
            <div style={{ color: "#6181c2" }} id="t1c_1" className="t sh_1">
              H
            </div>
            <div style={{ color: "#6181c2" }} id="t1d_1" className="t sf_1">
              ??? t??n kh??ch h??ng:
            </div>
            <div style={{ color: "#6181c2" }} id="t1e_1" className="t s7_1">
              T??n ????n v
            </div>
            <div style={{ color: "#6181c2" }} id="t1f_1" className="t sf_1">
              ???:{" "}
            </div>
            <div style={{ color: "#6181c2" }} id="t1g_1" className="t sg_1">
              ??
            </div>
            <div style={{ color: "#6181c2" }} id="t1h_1" className="t sf_1">
              ???a ch???:{" "}
            </div>
            <div style={{ display: "flex" }} id="t1i_1" className="t sh_1">
              <div style={{ color: "#6181c2" }}>MST </div>:{" "}
              <div style={{ marginLeft: 506 }}>{mst}</div>
            </div>
            <div style={{ color: "#6181c2" }} id="t1j_1" className="t si_1">
              H??nh th
            </div>
            <div style={{ color: "#6181c2" }} id="t1k_1" className="t sf_1">
              ???c thanh to??n:{" "}
            </div>
            <div style={{ color: "#6181c2" }} id="t1l_1" className="t sg_1">
              ??i
            </div>
            <div id="t1m_1" className="t sf_1" style={{ display: "flex" }}>
              <div style={{ color: "#6181c2" }}>???n tho???i</div>:
              <div style={{ marginLeft: 100 }}> {phone}</div>
            </div>
            <div style={{ color: "#6181c2" }} id="t1n_1" className="t si_1">
              T??i kho
            </div>
            <div style={{ color: "#6181c2" }} id="t1o_1" className="t sf_1">
              ???n: {}
            </div>
            <div id="t1p_1" className="t sj_1">
              STT
            </div>
            <div id="t1q_1" className="t sk_1">
              M?? V??
            </div>
            <div id="t1r_1" className="t sk_1">
              N
            </div>
            <div id="t1s_1" className="t sl_1">
              ???i dung
            </div>
            <div id="t1t_1" className="t sl_1">
              ??VT
            </div>
            <div id="t1u_1" className="t sk_1">
              S
            </div>
            <div id="t1v_1" className="t sl_1">
              ???{" "}
            </div>
            <div id="t1w_1" className="t sm_1">
              l??
            </div>
            <div id="t1x_1" className="t sl_1">
              ???ng
            </div>
            <div id="t1y_1" className="t sm_1">
              Gi?? ch??a
            </div>
            <div id="t1z_1" className="t sk_1">
              thu
            </div>
            <div id="t20_1" className="t sl_1">
              ???
            </div>
            <div id="t21_1" className="t sk_1">
              Ti
            </div>
            <div id="t22_1" className="t sl_1">
              ???n thu???
            </div>
            <div id="t23_1" className="t sk_1">
              GTGT
            </div>
            <div id="t24_1" className="t sn_1">
              (thu
            </div>
            <div id="t25_1" className="t so_1">
              ??? su???t 10%)
            </div>
            <div id="t26_1" className="t sk_1">
              Ph?? b
            </div>
            <div id="t27_1" className="t sl_1">
              ???o
            </div>
            <div id="t28_1" className="t sk_1">
              hi
            </div>
            <div id="t29_1" className="t sl_1">
              ???m HK
            </div>
            <div id="t2a_1" className="t sk_1">
              Th??nh ti
            </div>
            <div id="t2b_1" className="t sl_1">
              ???n
            </div>
            <div id="t2c_1" className="t sp_1">
              1
            </div>
            <div id="t2d_1" className="t s9_1">
              V??
            </div>
            <div id="t2e_1" className="t sq_1">
              1
            </div>
            <div id="t2f_1" className="t sq_1">
              2
            </div>
            <div id="t2g_1" className="t sq_1">
              3
            </div>
            <div id="t2h_1" className="t sq_1">
              4
            </div>
            <div id="t2i_1" className="t sq_1">
              5
            </div>
            <div id="t2j_1" className="t sq_1">
              6
            </div>
            <div id="t2k_1" className="t sq_1">
              7
            </div>
            <div id="t2l_1" className="t sq_1">
              8
            </div>
            <div id="t2m_1" className="t sq_1">
              9=6+7+8
            </div>
            <div id="t2n_1" className="t sp_1">
              1
            </div>
            <div id="t2o_1" className="t sp_1">
              1
            </div>
            <div id="t2p_1" className="t sp_1">
              X
            </div>
            <div id="t2q_1" className="t s8_1">
              T
            </div>
            <div id="t2r_1" className="t sa_1">
              ???ng c???ng:
            </div>
            <div id="t2s_1" className="t s8_1">
              S
            </div>
            <div id="t2t_1" className="t sa_1">
              ??? ti???n vi???t b???ng ch???:
            </div>
            <div id="t2u_1" className="t sb_1">
              {name}
            </div>
            <div id="t2v_1" className="t sb_1">
              {name_organization}
            </div>
            <div id="t2w_1" className="t s8_1">
              {address}
            </div>
            <div id="t30_1" className="t s8_1">
              {price_number}
            </div>
            <div id="t32_1" className="t sa_1">
              {price_char}
            </div>
            <div id="t35_1" className="t s8_1">
              {price_number}
            </div>
            <div id="t36_1" className="t s8_1">
              {ticket_code}
            </div>
            <div id="t37_1" className="t s9_1">
              V?? HK: {start_code} - {des_code} - {type_code} {train}{" "}
              {start_year}-{start_month}-{start_day}
            </div>
            <div id="t3h_1" className="t sr_1">
              Signature Valid
            </div>
            <div id="t3i_1" className="t ss_1">
              K?? b
            </div>
            <div id="t3j_1" className="t st_1">
              ???i: C??ng Ty TNHH M???t Th??nh Vi??n V???n
            </div>
            <div id="t3k_1" className="t sr_1">
              T
            </div>
            <div id="t3l_1" className="t st_1">
              ???i{" "}
            </div>
            <div id="t3m_1" className="t su_1">
              ????
            </div>
            <div id="t3n_1" className="t st_1">
              ???ng S???t S??i G??n
            </div>
            <div id="t3o_1" className="t ss_1">
              K?? ng??y:{" "}
            </div>
            <div id="t3p_1" className="t ss_1">
              /{" "}
            </div>
            <div id="t3q_1" className="t ss_1">
              /
            </div>
            <div id="t3r_1" className="t s8_1">
              1.000
            </div>
            <div id="t3s_1" className="t s8_1">
              1.000
            </div>
            <div id="t3w_1" className="t s8_1">
              {origin_price}
            </div>
            <div id="t3x_1" className="t s8_1">
              {tax}
            </div>
            <div id="t3y_1" className="t s8_1">
              {origin_price}
            </div>
            <div id="t3z_1" className="t s8_1">
              {tax}
            </div>
            <div id="t40_1" className="t sv_1">
              {ticket_day} {ticket_month} {ticket_year}
            </div>
            <div id="t41_1" className="t sd_1">
              S
            </div>
            <div id="t42_1" className="t se_1">
              ???:
            </div>
            <div id="t43_1" className="t sp_1">
              {number}
            </div>
            <div id="t44_1" className="t sd_1">
              ID:
            </div>
            <div id="t45_1" className="t sp_1">
              {id}
            </div>
            <div
              style={{
                position: "absolute",
                left: 676,
                bottom: 369,
              }}
            >
              <img width={50} src={svg} />
            </div>
            <div></div>
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
