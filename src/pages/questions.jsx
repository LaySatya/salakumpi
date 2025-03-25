import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { questions } from '../data/data.jsx';

const Questions = () => {
    const { type } = useParams();
    const selectedType = parseInt(type, 10);

    // Filter questions based on type
    const filteredQuestions = selectedType === 0 ? questions : questions.filter(q => q.type === selectedType);

    // State to track the index of the current question
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    // Set the first question when the component mounts or type changes
    useEffect(() => {
        setCurrentIndex(0);
        setShowAnswer(false); // Reset answer visibility
    }, [selectedType]);

    // Function to go to the next question
    const nextQuestion = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredQuestions.length);
        setShowAnswer(false); // Hide answer when moving to next question
    };

    // Function to go to the previous question
    const previousQuestion = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredQuestions.length) % filteredQuestions.length);
        setShowAnswer(false); // Hide answer when moving to previous question
    };

    return (
        <>
            <div className="w-screen h-screen bg-gray-800">
                <div className="navbar flex justify-between">
                    {/* <div className=""> */}
                        <Link to={"/options"}>
                            <a className="btn btn-primary btn-md text-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                </svg>
                                ត្រឡប់
                            </a>
                        </Link>
                        <button onClick={() => setShowAnswer(true)} className="btn btn-success btn-ghost btn-outline text-white">
                            ចម្លើយ
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </button>
                    {/* </div> */}
                </div>

                <div className="hero bg-gray-800 mt-16">
                    <div className="hero-content text-center text-white text-xl letter-spacing">
                        <div className="max-w-md">
                            {filteredQuestions.length > 0 ? (
                                <>
                                    <div className="mb-4">
                                        <strong>{filteredQuestions[currentIndex].question}</strong>
                                    </div>

                                    {showAnswer && (
                                        <p className="mt-4 text-lg text-yellow-400">
                                            {filteredQuestions[currentIndex].answer}
                                        </p>
                                    )}
                                </>
                            ) : (
                                <p>មិនមានសំណួរ</p> // No questions available
                            )}

                            <div className="mt-10 flex justify-center space-x-2">
                                <button onClick={previousQuestion} className="btn btn-ghost bg-gray-700 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                    </svg>
                                    សំណួរចាស់
                                </button>

                                <button onClick={nextQuestion} className="btn btn-ghost bg-gray-700 text-white">
                                    សំណួរបន្ទាប់
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Questions;
