import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import {Container, Nav, Navbar} from "react-bootstrap";
import {data} from "./data.js";
import React, {useState, useEffect, useRef} from 'react';
import Typewriter from 'typewriter-effect';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const [items, setItems] = useState(data); // 초기화 시 isAnswered 속성을 추가하지 않음
    const [guess, setGuess] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const inputRefs = useRef([]);

    useEffect(() => {
        if (selectedItem) {
            setGuess(Array(selectedItem.title.length).fill(''));
            inputRefs.current = selectedItem.title.split("").map((_, i) => inputRefs.current[i] ?? React.createRef());
        }
    }, [selectedItem]);

    const startGame = () => {
        const randomIndex = Math.floor(Math.random() * items.length);
        const randomItem = items[randomIndex];
        setSelectedItem(randomItem);
        setGuess(Array(randomItem.title.length).fill(''));
    };

    const handleGuessChange = (value, index) => {
        const newGuess = [...guess];
        newGuess[index] = value;
        setGuess(newGuess);

        if (value && index < selectedItem.title.length - 1) {
            inputRefs.current[index + 1].current.focus();
        }
    };

    const checkGuess = () => {
        const userGuess = guess.join('').toLowerCase();
        if (userGuess === selectedItem.title.toLowerCase()) {
            toast.success('정답입니다! 😁', {
                position: "top-center",
                autoClose: 1000,
            });

            // 정답을 맞춘 항목의 content만 사용자가 입력한 값으로 업데이트
            const updatedItems = items.map(item => {
                if (item.id === selectedItem.id) {
                    // 오직 content만 업데이트합니다. isAnswered 상태는 변경하지 않습니다.
                    return { ...item, content: userGuess.toUpperCase() }; // 이제 isAnswered를 수정하지 않습니다.
                }
                return item;
            });
            setItems(updatedItems);
            // 항목 리스트에서 아무것도 숨기지 않고, 모든 항목을 계속 표시합니다.
            // selectedItem을 null로 설정하거나, 다음 항목을 선택하지 않는 로직을 추가할 수도 있습니다.
            setSelectedItem(null);
        } else {
            toast.error('틀렸습니다. 😓', {
                position: "top-center",
                autoClose: 1000,
            });
        }
    };



    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark" className="nav">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">빵이름 맞추기 게임</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="main_bg">
                <div className="txt">
                    <Typewriter
                        options={{
                            strings: ['빵집에 오신 것을 환영합니다.', '화면을 내려 문제를 맞추세요.'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>

                <div className="container">
                    <div className="row">
                        {items.map((item) => (
                            <Product
                                key={item.id}
                                content={item.content}
                                price={item.price}
                                imageUrl={process.env.PUBLIC_URL + item.imageUrl}
                            />
                        ))}
                    </div>
                </div>
                <div className="game-section">
                    {selectedItem ? (
                        <div className="game">
                            {selectedItem.title.split('').map((_, index) => (
                                <input
                                    key={index}
                                    ref={inputRefs.current[index]}
                                    type="text"
                                    className="letter-input"
                                    maxLength="1"
                                    value={guess[index] || ''}
                                    onChange={(e) => handleGuessChange(e.target.value, index)}
                                />
                            ))}
                            <button onClick={checkGuess} className="btn">정답</button>
                            <button onClick={startGame}><FontAwesomeIcon icon={faRedo} /> </button>
                            <ToastContainer/>
                        </div>
                    ) : (
                        <button onClick={startGame} className="startBtn">게임 시작하기</button>
                    )}
                </div>
            </div>
        </div>
    );
}
function Product({ title, content, price, imageUrl }) {
    return (
        <div className="col-md-4">
            <img className="image-thumbnail" src={imageUrl} alt={title} />
            <h4>{title}</h4>
            <p>{content}</p>
            <p>{price}원</p>
        </div>
    );
}
export default App;
