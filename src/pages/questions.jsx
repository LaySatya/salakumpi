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

    const getTeacherName = (name) => {
        
        switch (name) {
            case "heng":
                return "ហ៊ួរ សុខហេង"
            case "phon":
                return "ហាន សុផុន"
            case "khom":
                return "ខាន់ សុខុម"
            default:
                return "មិនស្គាល់"

        }
    }
    const getBible = (bible) => {
        switch (bible) {
            case 1:
                return "អែសរ៉ា"
            case 2:
                return "នេហេមា"
            case 3:
                return "អេសធើរ"
            case 4:
                return "កិច្ចការ"
            case 0:
                return "អែសរ៉ាំ, នេហេមា, អេសធើរ, កិច្ចការ"
            default:
                return "មិនស្គាល់"

        }
    }

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
                {/* <div className="text-white flex justify-center"> */}
                    <div className="flex justify-center text-white">
                        <svg height={33} className="mr-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                        <h1 className="text-3xl ml-1">
                            {
                                filteredQuestions.length > 0 ? getTeacherName(filteredQuestions[currentIndex].teacher) : "មិនស្គាល់"
                            }
                        </h1>
                    </div>
                    <div className="flex justify-center text-white mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                        <h1 className="text-xl ml-1">
                            {
                                getBible(selectedType)
                            }
                        </h1>
                    </div>
                {/* </div> */}
                <div className="hero bg-gray-800 mt-16">
                    <div className="hero-content text-center text-white text-xl">
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
