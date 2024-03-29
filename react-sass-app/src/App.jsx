import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./App.scss"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React + SASS</h1>
      <header role="banner">
        <h1>중첩예제</h1>
        <h1>Header</h1>
        <p>TEST</p>
        <h2>스타일 중첩 테스트</h2>
      </header>
      <p>Sass Test 1</p>
      <div role="Test">
        <a>TEST 부모참조 작업</a>
      </div>
      <a>보통 a</a>
      <div class="test">
        <a>SASS 중첩 테스트</a>
      </div>
      <div class="test1">
        <a>SASS Mixin Test</a>
      </div>
      <div class="test2">
        <a>SASS Mixin Test 2</a>
      </div>
      <div class="test3">
        <a>SASS Mixin Test 2 기본값 정의</a>
      </div>
      <div class="test4">
        <a>@import</a>
      </div>
      <div class="test5">
        <a>@extend</a>
      </div>
      <div class="test6">
        <a>@extend placeholder</a>
      </div>
      <div >
        <a>@media</a>
      </div>
    </>
  )
}

export default App
