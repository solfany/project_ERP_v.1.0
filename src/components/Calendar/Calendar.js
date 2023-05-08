import React, { useState } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import './calendar2.css';
import './calendar.css';
import CustomButton from 'components/Button/CustomButton';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from 'reactstrap';

moment.locale('ko');
BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(
  (k) => BigCalendar.Views[k]
);

const Calendar = ({ isWhiteContent, events, setEvents }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  // const [calendarEvents, setCalendarEvents] = useState(events);

  const handleSelectEvent = (event) => {
    setSelectedEvent({
      title: event.title,
      name: event.name,
      start: event.start,
      end: event.end,
      desc: event.desc,
    });
    console.log(selectedEvent);
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleShowMore = () => {
    toggleModal();
  };

  const handleDeleteEvent = () => {
    const index = events.findIndex(
      (event) =>
        event.title === selectedEvent.title &&
        event.start === selectedEvent.start
    );
    const newEvents = [...events];
    newEvents.splice(index, 1);
    setEvents(newEvents);
    toggleModal();
  };

  return (
    <div className="content">
      <div className="card">
        <div
          className={`calendar calendar-${
            isWhiteContent ? 'themeIsWhite' : 'themeIsBlack'
          }`}
          style={{ height: '700px' }}
        >
          <BigCalendar
            events={events}
            step={60}
            views={allViews}
            defaultDate={new Date()}
            onSelectEvent={handleSelectEvent}
            onShowMore={handleShowMore}
          />
        </div>
      </div>
      <Modal isOpen={showModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>일정</ModalHeader>
        <ModalBody>
          {selectedEvent && (
            <Table hover bordered>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>작성자</td>
                  <td>{selectedEvent.name}</td>
                </tr>
                <tr>
                  <td>시작날짜</td>
                  <td>{moment(selectedEvent.start).format('LL')}</td>
                  <td>종료날짜</td>
                  <td>{moment(selectedEvent.end).format('LL')}</td>
                </tr>

                <tr>
                  <td>시작시간</td>
                  <td>{moment(selectedEvent.start).format('LT')}</td>
                  <td>종료시간</td>
                  <td>{moment(selectedEvent.end).format('LT')}</td>
                </tr>
                <tr></tr>
                <tr>
                  <td>내용</td>
                  <td colSpan={3}>{selectedEvent.desc}</td>
                </tr>
              </tbody>
            </Table>
          )}
        </ModalBody>
        <ModalFooter>
          <div>
            <CustomButton
              color="danger"
              onClick={handleDeleteEvent}
              text="삭제"
              className="red"
            />
            <CustomButton
              color="info"
              onClick={toggleModal}
              className="normal"
              text="확인"
            />
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Calendar;
