import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']) // let과 달리 state는 내용이 바뀌어도 state 쓰던 html은 자동 재렌더링됨
  let [따봉, 따봉변경] = useState([0,0,0]); // 따봉변경은 state 변경 함수!
  let [modal, setModal] = useState(false); // 모달창이 안 보임
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className = "black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy)
      }}>정렬</button>

      <button onClick={()=>{
        let copy = [...글제목]; // 원본 훼손하지 않도록 카피본 만들기. ...는 괄호 벗기라는 의미.
        copy[0] = '여자 코트 추천'
        글제목변경(copy);
      }}>글수정</button>

      {/* <div className = "list">
        <h4 onClick={()=>{setModal(!modal)}}>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = "list">
        <h4 onClick={()=>{setModal(!modal)}}>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className = "list">
        <h4 onClick={()=>{setModal(!modal)}}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(!modal); setTitle(i)}}>{글제목[i]}
                <span onClick={(e)=>{
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)
                }}>👍</span> {따봉[i]}
              </h4>

              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>

            </div>
          )
        })
      }    

      <input onChange={(e)=>{입력값변경(e.target.value)}}></input>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      }}>글발행</button>

      {
        // html 안에 조건문 쓰려면 삼항 연산자
        modal == true ? <Modal title={title} 글제목={글제목}></Modal> : null
      }

    </div>
  );
}

function Modal(props){
  return (
    <>
      <div className="modal">
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    </>
  )
}

export default App;
