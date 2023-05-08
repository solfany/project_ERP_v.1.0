import React, { useState } from 'react';
import CustomButton from 'components/Button/CustomButton';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import PropTypes from 'prop-types';

function RunModal({ events, setEvents, className }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const sendData = (e) => {
    e.preventDefault(); // 기본 동작 방지

    const newEvent = {
      title: e.target.elements.Name.value + ' ' + e.target.elements.desc.value, // 입력 필드에서 값을 가져와 이벤트 객체에 추가
      name: e.target.elements.Name.value,
      start: new Date(
        e.target.elements.date.value +
          'T' +
          e.target.elements.startTime.value +
          ':00'
      ), // 시작일과 시간을 결합해 Date 객체 생성하여 이벤트 객체에 추가
      end: new Date(
        e.target.elements.endDate.value +
          'T' +
          e.target.elements.endTime.value +
          ':00'
      ), // 종료일과 시간을 결합해 Date 객체 생성하여 이벤트 객체에 추가
      desc: e.target.elements.desc.value, // 입력 필드에서 값을 가져와 이벤트 객체에 추가
    };
    setEvents([...events, newEvent]); // 이벤트 상태 배열에 새 이벤트 객체 추가
    console.log(events);
    console.log(newEvent);
    toggle();
  };
  return (
    <div>
      <CustomButton
        type="button"
        onClick={toggle}
        className="blue"
        text="일정추가하기"
      />

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>일정 작성</ModalHeader>
        <ModalBody>
          <form onSubmit={sendData}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="Name">이름</Label>
                  <Input
                    id="Name"
                    name="Name"
                    placeholder="작성자"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="startDate">시작날짜</Label>
                  <Input
                    id="startDate"
                    name="date"
                    placeholder="date placeholder"
                    type="date"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="endDate">종료날짜</Label>
                  <Input
                    id="endDate"
                    name="endDate"
                    placeholder="date placeholder"
                    type="date"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="startTime">시작시간</Label>
                  <Input
                    id="startTime"
                    name="startTime"
                    placeholder="time placeholder"
                    type="time"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="endTime">종료시간</Label>
                  <Input
                    id="endTime"
                    name="endTime"
                    placeholder="time placeholder"
                    type="time"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="desc">내용</Label>
                  <Input
                    id="desc"
                    type="textarea"
                    name="desc"
                    placeholder="내용을 기술해주세요."
                  />
                </FormGroup>
              </Col>
            </Row>
            <ModalFooter>
              <CustomButton type="submit" text="저장하기" className="blue" />
              <CustomButton
                type="button"
                onClick={toggle}
                text="취소"
                className="normal"
              />
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

RunModal.propTypes = {
  className: PropTypes.string,
};

export default RunModal;
