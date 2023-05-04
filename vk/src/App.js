import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import React from 'react';
import DatePicker from "react-datepicker";

const floors = [];
const rooms = [];

for (let i = 3; i < 28; i++) {
  floors.push(i);
};

for (let i = 1; i < 11; i++) {
  rooms.push(i);
};

function App() {
  const [tower, setTower] = React.useState('');
  const [floor, setFloor] = React.useState('');
  const [room, setRoom] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState('')
  const [comment, setComment] = React.useState('');

  const result = {
    tower, floor, room, selectedDate, comment
  };

  function handleTowerSelect(event) {
    setTower(event.target.value);
  }

  function handleFloorSelect(event) {
    setFloor(event.target.value);
  }

  function handleRoomSelect(event) {
    setRoom(event.target.value);
  }

  function handleComment(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(result);
  }

  function handleReset() {
    setComment('');
  }

  return (
    <section className='app'>
      <form className='form' onSubmit={handleSubmit}>
        <select className='form__item' name='towers' value={tower} onChange={handleTowerSelect} required >
          <option value="" defaultValue unselectable='true'>Выберите башню</option>
          <option className='form__option' value='A'>Башня А</option>
          <option className='form__option' value='B'>Башня Б</option>
        </select>

        <select className='form__item' name='floors' value={floor} onChange={handleFloorSelect} required>
          <option value="" defaultValue unselectable='true'>Выберите этаж</option>
          {
            floors.map((floor, i) => {
              return (
                <option key={i} className='form__option' value={`${floor}`}>{floor} этаж</option>
              )
            })
          }
        </select>

        <select className='form__item' name='rooms' value={room} onChange={handleRoomSelect} required>
          <option value="" defaultValue unselectable='true'>Выберите номер переговорной</option>
          {
            rooms.map((room, i) => {
              return (
                <option key={i} className='form__option' value={`${room}`}>{room} комната</option>
              )
            })
          }
        </select>

        <div className='form__item'>
          <DatePicker selected={selectedDate} onChange={setSelectedDate} showTimeSelect dateFormat="Pp" className='form__date' />
        </div>

        <textarea className='form__comment-input' maxLength='500' placeholder='Комментарий' value={comment} onChange={handleComment} />

        <div className='form__buttons'>
          <button className='form__button' type='submit' >Отправить</button>
          <button className='form__button' type='reset' onClick={handleReset}>Очистить</button>
        </div>
      </form>
    </section>
  );
}

export default App;
