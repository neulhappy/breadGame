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
    const [items, setItems] = useState(data);
    const [guess, setGuess] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const inputRefs = useRef([]);
    const [allAnswered, setAllAnswered] = useState(false);


    useEffect(() => {
        if (selectedItem) {
            setGuess(Array(selectedItem.title.length).fill(''));
            inputRefs.current = selectedItem.title.split("").map((_, i) => inputRefs.current[i] ?? React.createRef());
        }
    }, [selectedItem]);


    const resetGame = () => {
        const resetItems = items.map(item => {
            let initialContent = "";
            if (item.id === 0) {
                initialContent = "B▢▢▢▢";
            } else if (item.id === 1) {
                initialContent = "C▢▢▢";
            } else if (item.id === 2) {
                initialContent = "C▢▢▢▢▢";
            }
            return { ...item, content: initialContent, isAnswered: false };
        });
        setItems(resetItems);
        setSelectedItem(null);
        setAllAnswered(false);
    }

    const startGame = () => {
        if (allAnswered) {
            resetGame();
        } else {
            const unansweredItems = items.filter(item => !item.isAnswered);
            if (unansweredItems.length > 0) {
                const randomIndex = Math.floor(Math.random() * unansweredItems.length);
                const randomItem = unansweredItems[randomIndex];
                setSelectedItem(randomItem);
                setGuess(Array(randomItem.title.length).fill(''));
            }
        }
    };

    const handleGuessChange = (value, index) => {
        const newGuess = [...guess];
        newGuess[index] = value;
        setGuess(newGuess);

        if (value && index < selectedItem.title.length - 1) {
            inputRefs.current[index + 1].current.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && index > 0 && guess[index] === '') {
            const newGuess = [...guess];
            newGuess[index - 1] = '';
            setGuess(newGuess);

            setTimeout(() => inputRefs.current[index - 1].current.focus(), 0);
        }
    };


    const checkGuess = () => {
        const userGuess = guess.join('').toLowerCase();
        if (userGuess === selectedItem.title.toLowerCase()) {
            toast.success('정답입니다! 😁', {
                position: "top-center",
                autoClose: 1000,
            });

            setTimeout(() => {
                const updatedItems = items.map(item => {
                    if (item.id === selectedItem.id) {
                        return { ...item, content: userGuess.toUpperCase(), isAnswered: true };
                    }
                    return item;
                });
                setItems(updatedItems);
                setSelectedItem(null);

                const allItemsAnswered = updatedItems.every(item => item.isAnswered);
                setAllAnswered(allItemsAnswered);
            }, 2000);
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
                        <Nav.Link href="#home"><img src="/Logo.png" alt="로고"/> 빵이름 맞추기 게임</Nav.Link>
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
                                    onKeyDown={(e) => handleKeyDown(e,index)}
                                />
                            ))}
                            <button onClick={checkGuess} className="btn">정답</button>
                            <button onClick={startGame}><FontAwesomeIcon icon={faRedo} /> </button>
                            <ToastContainer/>
                        </div>
                    ) : (
                        <button onClick={startGame} className="startBtn">
                            {allAnswered ? "게임 다시하기" : "게임 시작하기"}
                        </button>
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
