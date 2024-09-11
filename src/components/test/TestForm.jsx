import { useState } from 'react';
import { questions } from '../../assets/data/questions';
import Button from '../common/ui/Button';

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
    onSubmit(answers);
    console.log('제출 완료');
  };

  return (
    <form onSubmit={onHandleSubmit} className="w-full space-y-4 TestForm">
      {questions.map((guess, index) => (
        <div key={guess.id} className="mb-4">
          <p className="font-bold">
            {guess.question} <span className="text-customBlue-dark">*</span>
          </p>
          {guess.options.map((opt, idx) => (
            <label key={idx} className="flex gap-2">
              <input
                type="radio"
                name={`question-${index}`}
                value={opt}
                checked={answers[index] === opt}
                onChange={() => onHandleChange(index, opt)}
                className="hidden peer"
                required
              />
              <div className="w-4 h-4 m-2 border-2 border-gray-300 rounded-full peer-checked:border-customPink peer-checked:bg-customPink peer-invalid:border-customBlue-dark"></div>
              <span className="flex text-black peer-checked:text-customPink peer-invalid:text-customBlue-dark">
                {opt}
              </span>
            </label>
          ))}
        </div>
      ))}

      <Button type="submit" className="w-full p-2">
        제출 하기
      </Button>
    </form>
  );
}
