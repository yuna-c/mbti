import { useState } from 'react';
import { questions } from '../../data/querstions';

export default function TestForm({ onSubmit }) {
  // 선택한 답변을 담을 배열을 초기화
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  // 질문에 대한 답변을 선택할 때 호출되는 함수
  const onHandleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // 부모 컴포넌트로 제출 결과 전송
    onSubmit(answers);
  };

  return (
    <form className="TestForm" onSubmit={onHandleSubmit}>
      {questions.map((guess, index) => (
        <div key={guess.id} className="mb-4">
          <p>{guess.question}</p>
          {guess.options.map((opt, idx) => (
            <label key={idx} className="block">
              <input
                type="radio"
                name={`question-${index}`}
                value={opt}
                checked={answers[index] === opt}
                onChange={() => onHandleChange(index, opt)}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        제출하기
      </button>
    </form>
  );
}
