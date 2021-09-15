import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext()
  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>setup quiz</h2>
          {/* amount */}
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={quiz.amount}
              onChange={handleChange}
              className='form-input'
              min={1}
              max={50}
            />
          </div>
          {/* category */}

          <div className='form-control'>
            <label htmlFor='category'>category</label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.category}
              onChange={handleChange}
            >
              <option value='any'>any</option>
              <option value='sports'>sports</option>
              <option value='history'>history</option>
              <option value='politics'>politics</option>
              <option value='general_knowledge'>general knowledge</option>
              <option value='books'>books</option>
              <option value='film'>film</option>
              <option value='music'>music</option>
              <option value='musical_theatres'>musical theatres</option>
              <option value='television'>television</option>
              <option value='video_games'>video games</option>
              <option value='board_games'>board games</option>
              <option value='science_nature'>science nature</option>
              <option value='computers'>computers</option>
              <option value='math'>math</option>
              <option value='geography'>geography</option>
              <option value='art'>art</option>
              <option value='celebrities'>celebrities</option>
              <option value='animals'>animals</option>
            </select>
          </div>
          {/* difficulty */}

          <div className='form-control'>
            <label htmlFor='difficulty'>select difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>
          {error && (
            <p className='error'>
              can't generate questions, please try different options
            </p>
          )}
          <button type='submit' onClick={handleSubmit} className='submit-btn'>
            start
          </button>
        </form>
      </section>
    </main>
  )
}

export default SetupForm