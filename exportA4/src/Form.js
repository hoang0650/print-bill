import React, { Component } from "react";
import {
  Form,
  Col,
  Row,
  Input,
  TreeSelect,
  Select,
  Button,
  message,
} from "antd";
import axios from "axios";
import Table from "./Table";
import Template from "./Template";
import Ticket from "./Ticket";
import VerifyTicket from "./VerifyTicket";
async function apiService(endPoint, method, data, headers) {
  const result = await axios({
    url: "http://localhost:8888/api/" + endPoint,
    method,
    data,
    headers,
  });
  if (result.data) return result.data;
  else {
    window.alert("network error");
  }
}

const { Option } = Select;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const dateInputLayout = {
  labelCol: {
    span: 14,
  },
  wrapperCol: {
    span: 10,
  },
};

const treeInputLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 16,
  },
};
const bottomInputLayout = {
  labelCol: {
    span: 11,
  },
  wrapperCol: {
    span: 13,
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }
  state = {
    stationList: [],
    scheduleList: [],
    typeList: [],
    readonly: false,
    showPrintTicket: false,
    showPrintBill: false,
    showPrintVerifyTicket: false,
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
      booking_code: "",
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
  componentDidMount() {
    this.fetchStation();
    this.fetchSchedule();
    this.fetchType();
    this.fetchTicketCode();
  }
  async fetchStation() {
    const result = await apiService("station");
    if (result.status) this.setState({ stationList: result.data });
  }
  async fetchTicketCode() {
    const result = await apiService("bill/ticket_code");
    if (result.status)
      this.formRef.current.setFieldsValue({
        ticket_code: result.data,
      });
  }
  handleBack = () => {
    this.setState({
      showTable: false,
    });
  };
  async fetchSchedule() {
    const result = await apiService("schedule");
    if (result.status) this.setState({ scheduleList: result.data });
  }
  async fetchType() {
    const result = await apiService("type");
    if (result.status) {
      const treeData = result.data.map((item, index) => ({
        title: item.name,
        value: index,
        selectable: false,
        children: item.seatDetail.wagons.map((wagon, indexWagon) => ({
          title: `Toa: ${wagon}`,
          value: `${index}-${indexWagon}`,
          selectable: false,
          children: item.seatDetail.chairs.map((chair, indexChair) => ({
            title: `Gh???: ${chair}`,
            value: `${index}-${indexWagon}-${indexChair}`,
          })),
        })),
      }));
      this.setState({ typeList: result.data, treeData });
    }
  }
  handleChangeTree = (value) => {
    const [indexType, indexWagon, indexChair] = value
      .split("-")
      .map((item) => parseInt(item));
    const type = this.state.typeList[indexType].code;
    const wagon = this.state.typeList[indexType].seatDetail.wagons[indexWagon];
    const chair = this.state.typeList[indexType].seatDetail.chairs[indexChair];
    this.setState({
      treeValue: `Lo???i ch???: ${type} | Toa: ${wagon} | Gh???: ${chair}`,
    });
    this.formRef.current.setFieldsValue({
      wagon,
      chair,
      type: this.state.typeList[indexType].name,
      type_code: type,
    });
  };
  handleChangeSelect = (e, node, { dataSet, field, value }) => {
    this.formRef.current.setFieldsValue({
      [node.name]: e,
      [field]: dataSet[node.index][value],
    });
  };
  changeScheduleList = (value, node) => {
    this.formRef.current.setFieldsValue({
      time: node.time,
      train: node.train,
    });
  };
  handleChange = (e) => {
    this.formRef.current.setFieldsValue({
      ticket_code: this.formRef.current.getFieldsValue().ticket_code,
      [e.target.name]: e.target.value,
    });
  };
  handleOnGetDataTable = (data) => {
    delete data.ticket_code;
    this.formRef.current.setFieldsValue({
      ...data,
    });
    this.setState({
      showTable: false,
    });
  };
  handleSubmit = async (state) => {
    if (state) {
      const check = await apiService(
        "bill",
        "post",
        this.formRef.current.getFieldsValue()
      );
      if (!check.status) {
        message.error("M?? v?? ???? t???n t???i");
        return;
      }
      this.id = check.data;
    } else {
      const result = await apiService("bill", "delete", { id: this.id });
      if (!result.status) {
        message.error(
          result.message || "???? x???y ra l???i. Vui l??ng t???i l???i trang"
        );
        return;
      }
    }
    this.setState({
      readonly: state,
    });
  };
  handleShow = async (type, state) => {
    this.setState({
      [`showPrint${type}`]: state,
    });
  };

  render() {
    const { readonly, showTable } = this.state;
    return (
      <React.Fragment>
        <div style={{ display: showTable ? "none" : "block" }}>
          <Form
            onChange={this.handleChange}
            ref={this.formRef}
            style={{ marginBottom: 0 }}
            {...layout}
          >
            <Row>
              <Col span={7}>
                <Form.Item
                  {...treeInputLayout}
                  label="M?? V??"
                  name="ticket_code"
                  disabled
                >
                  <Input
                    disabled={readonly}
                    name="ticket_code"
                    value={this.state.ticket_code}
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item
                  {...treeInputLayout}
                  label="M?? ?????T CH???"
                  name="booking_code"
                  disabled
                >
                  <Input
                    disabled={readonly}
                    name="booking_code"
                    value={this.state.booking_code}
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item {...treeInputLayout} label="GA ??I" name="start">
                  <Input
                    disabled={readonly}
                    name="start"
                    value={this.state.start}
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item {...bottomInputLayout} name="start">
                  <Select
                    disabled={readonly}
                    onChange={(value, option) =>
                      this.handleChangeSelect(value, option, {
                        dataSet: this.state.stationList,
                        field: "start_code",
                        value: "code",
                      })
                    }
                    value={this.state.start}
                  >
                    {this.state.stationList.map((item, index) => (
                      <Option
                        index={index}
                        name="start"
                        key={item.code}
                        value={item.name}
                      >
                        {item.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item
                  {...treeInputLayout}
                  label="M?? GA ??I"
                  name="start_code"
                >
                  <Input
                    disabled={readonly}
                    type="text"
                    name="start_code"
                    onChange={this.handleChange}
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item {...treeInputLayout} label="GA ?????N" name="des">
                  <Input disabled={readonly} name="des" autoComplete="off" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item {...bottomInputLayout} name="des">
                  <Select
                    disabled={readonly}
                    onChange={(value, option) =>
                      this.handleChangeSelect(value, option, {
                        dataSet: this.state.stationList,
                        field: "des_code",
                        value: "code",
                      })
                    }
                  >
                    {this.state.stationList.map((item, index) => (
                      <Option
                        index={index}
                        key={item.code}
                        value={item.name}
                        name="des"
                      >
                        {item.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item
                  {...treeInputLayout}
                  label="M?? GA ?????N"
                  name="des_code"
                >
                  <Input
                    disabled={readonly}
                    name="des_code"
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item {...treeInputLayout} label="GI??? ??I" name="time">
                  <Input disabled={readonly} name="time" autoComplete="off" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item {...bottomInputLayout}>
                  <Select
                    disabled={readonly}
                    onChange={this.changeScheduleList}
                  >
                    {this.state.scheduleList.map((item) => (
                      <Option
                        key={item._id}
                        value={item._id}
                        train={item.train}
                        time={item.time}
                      >
                        {item.name} | {item.train} | {item.time}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item {...treeInputLayout} label="T??U" name="train">
                  <Input disabled={readonly} name="train" autoComplete="off" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={3} offset={1}>
                <Form.Item
                  {...dateInputLayout}
                  label="NG??Y ??I"
                  name="start_day"
                >
                  <Input disabled={readonly} autoComplete="off" />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item
                  {...dateInputLayout}
                  label="TH??NG ??I"
                  name="start_month"
                >
                  <Input disabled={readonly} autoComplete="off" />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item
                  {...dateInputLayout}
                  label="N??M ??I"
                  name="start_year"
                >
                  <Input disabled={readonly} autoComplete="off" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={3} offset={1}>
                <Form.Item
                  {...dateInputLayout}
                  label="NG??Y IN V??"
                  name="ticket_day"
                >
                  <Input disabled={readonly} autoComplete="off" />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item
                  {...dateInputLayout}
                  label="TH??NG IN V??"
                  name="ticket_month"
                >
                  <Input disabled={readonly} autoComplete="off" />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item
                  {...dateInputLayout}
                  label="N??M IN V??"
                  name="ticket_year"
                >
                  <Input disabled={readonly} autoComplete="off" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item {...treeInputLayout} label="TOA" name="wagon">
                  <Input disabled={readonly} autoComplete="off" />
                </Form.Item>
              </Col>
              <Col span={4}>
                <TreeSelect
                  disabled={readonly}
                  style={{ width: "100%", marginLeft: 10 }}
                  value={this.state.treeValue}
                  dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                  treeData={this.state.treeData}
                  placeholder="Please select"
                  onChange={this.handleChangeTree}
                />
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item {...treeInputLayout} label="GH???" name="chair">
                  <Input disabled={readonly} autoComplete="off" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item {...treeInputLayout} label="LO???I CH???" name="type">
                  <Input disabled={readonly} autoComplete="off" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item
                  {...treeInputLayout}
                  label="K?? HI???U LO???I CH???"
                  name="type_code"
                >
                  <Input disabled={readonly} autoComplete="off" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item {...treeInputLayout} label="H??? T??N" name="name">
                  <Input disabled={readonly} autoComplete="off" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  {...bottomInputLayout}
                  label="GI?? TI???N B???NG S???"
                  name="price_number"
                >
                  <Input
                    disabled={readonly}
                    name="price_number"
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item {...treeInputLayout} label="GI???Y T???" name="paper">
                  <Input disabled={readonly} autoComplete="off" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  {...bottomInputLayout}
                  label="S??? TI???N B???NG CH???"
                  name="price_char"
                >
                  <Input
                    disabled={readonly}
                    name="price_char"
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item {...treeInputLayout} label="M?? S??? THU???" name="mst">
                  <Input disabled={readonly} name="mst" autoComplete="off" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  {...bottomInputLayout}
                  label="GI?? CH??A THU???"
                  name="origin_price"
                >
                  <Input
                    disabled={readonly}
                    name="origin_price"
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item
                  {...treeInputLayout}
                  label="T??N ????N V???"
                  name="name_organization"
                >
                  <Input
                    disabled={readonly}
                    name="name_organization"
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  {...bottomInputLayout}
                  label="THU??? GI?? TR??? GIA T??NG"
                  name="tax"
                >
                  <Input disabled={readonly} autoComplete="off" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item {...treeInputLayout} label="?????A CH???" name="address">
                  <Input
                    disabled={readonly}
                    name="address"
                    autoComplete="off"
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item {...bottomInputLayout} label="S???" name="number">
                  <Input disabled={readonly} autoComplete="off" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Form.Item {...treeInputLayout} label="S??? ??T" name="phone">
                  <Input disabled={readonly} autoComplete="off" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item {...bottomInputLayout} label="ID" name="id">
                  <Input disabled={readonly} autoComplete="off" />
                </Form.Item>
              </Col>
            </Row>
            {this.state.showPrintBill && (
              <Template
                handleShow={this.handleShow}
                show={this.state.showPrintBill}
                data={
                  this.formRef.current
                    ? this.formRef.current.getFieldsValue()
                    : this.state.data
                }
              />
            )}
            }
            <Ticket
              handleShow={this.handleShow}
              show={this.state.showPrintTicket}
              data={
                this.formRef.current
                  ? this.formRef.current.getFieldsValue()
                  : this.state.data
              }
            />
            }
            <VerifyTicket
              handleShow={this.handleShow}
              show={this.state.showPrintVerifyTicket}
              data={
                this.formRef.current
                  ? this.formRef.current.getFieldsValue()
                  : this.state.data
              }
            />
            }
            {!readonly && (
              <Button
                style={{
                  width: 100,
                  height: 100,
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                }}
                type="primary"
                htmlType="submit"
                onClick={() => this.handleSubmit(true)}
              >
                Nh???p v??
              </Button>
            )}
            {readonly && (
              <Button
                style={{
                  width: 100,
                  height: 100,
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                }}
                type="primary"
                htmlType="submit"
                onClick={() => this.handleShow("Bill", true, true)}
              >
                In h??a ????n
              </Button>
            )}
            {readonly && (
              <Button
                style={{
                  width: 100,
                  height: 100,
                  position: "absolute",
                  top: "40%",
                  left: "60%",
                }}
                type="primary"
                htmlType="submit"
                onClick={() => this.handleShow("Ticket", true, true)}
              >
                In v??
              </Button>
            )}
            {readonly && (
              <Button
                style={{
                  width: 100,
                  height: 100,
                  position: "absolute",
                  top: "40%",
                  left: "70%",
                }}
                type="primary"
                htmlType="submit"
                onClick={() => this.handleShow("VerifyTicket", true, true)}
              >
                Th??? l??n t??u
              </Button>
            )}
            {readonly && (
              <Button
                style={{
                  width: 100,
                  height: 100,
                  position: "absolute",
                  top: "40%",
                  left: "80%",
                }}
                type="primary"
                htmlType="submit"
                onClick={() => this.handleSubmit(false)}
              >
                H???y
              </Button>
            )}
            {!readonly && (
              <Button
                style={{
                  width: 130,
                  height: 100,
                  position: "absolute",
                  top: "40%",
                  left: "60%",
                }}
                type="primary"
                htmlType="submit"
                onClick={() =>
                  this.setState({
                    showTable: true,
                  })
                }
              >
                Xem danh s??ch
              </Button>
            )}
          </Form>
        </div>
        {showTable && (
          <Table
            handleBack={this.handleBack}
            handleOnGetDataTable={this.handleOnGetDataTable}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
