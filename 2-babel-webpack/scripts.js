// 색상 및 텍스트 스타일 클래스 맵
const colorClassObj = {
  1: 'bg-red',
  2: 'bg-green',
  3: 'bg-blue',
};

const textClassObj = {
  1: 'text-bold',
  2: 'text-italic',
  3: 'text-strike',
  4: 'text-underline',
};

// 16개의 카드 생성
const cardContainer = document.querySelector('#cardContainer');
for (let i = 1; i <= 16; i++) {
  const newCard = document.createElement('div');
  newCard.id = `id-${i}`;
  newCard.textContent = i;
  newCard.classList.add('card');

  // 랜덤 색상 및 텍스트 스타일 적용
  const colorIdx = Math.ceil(Math.random() * 3);
  const textIdx = Math.ceil(Math.random() * 4);
  newCard.classList.add(colorClassObj[colorIdx]);
  newCard.classList.add(textClassObj[textIdx]);

  cardContainer.appendChild(newCard);
}

// 카드의 색상을 변경하는 함수
export const changeColorById = (e) => {
  console.log('뭐하니');
  const idInputEl = document.querySelector('#idInput');
  const id = idInputEl.value.trim(); // 입력값 앞뒤 공백 제거

  if (!id) {
    alert('Please enter a valid card ID.');
    return;
  }

  const elementById = document.getElementById(id);
  if (!elementById) {
    alert(`No card found with ID: ${id}`);
    return;
  }

  // 기존의 'bg-'로 시작하는 색상 클래스를 제거
  for (const className of elementById.classList) {
    if (className.startsWith('bg-')) {
      elementById.classList.remove(className);
    }
  }

  // 새로운 색상 클래스 추가
  const colorIdx = e.target.className.split('-')[1]; // 클래스에서 색상 인덱스 추출
  elementById.classList.add(colorClassObj[colorIdx]);
};

// 카드의 텍스트 스타일을 변경하는 함수
export const changeTextByClass = (e) => {
  const classInputEl = document.querySelector('#classInput');
  const className = classInputEl.value.trim(); // 입력값 앞뒤 공백 제거

  if (!className) {
    alert('Please enter a valid card CLASS.');
    return;
  }

  const elementsByClass = document.getElementsByClassName(className);
  if (!elementsByClass.length) {
    alert(`No card found with CLASS: ${className}`);
    return;
  }

  Array.from(elementsByClass).forEach((el) => {
    // 기존의 'text-'로 시작하는 텍스트 스타일 클래스를 제거
    for (const className of el.classList) {
      if (className.startsWith('text-')) {
        el.classList.remove(className);
      }
    }

    // 새로운 텍스트 클래스 추가
    const textIdx = e.target.className.split('-')[1]; // 클래스에서 텍스트 인덱스 추출
    el.classList.add(textClassObj[textIdx]);
  });
};

//   카드의 스타일을 초기화하는 함수
export const resetStyleByQuery = () => {
  console.log('reset');
  const queryInputEl = document.querySelector('#queryInput');
  const query = queryInputEl.value;

  const elementsByQuery = document.querySelectorAll(query);
  Array.from(elementsByQuery).forEach((el) => {
    // 현재 요소의 classList를 순회하며 'card'를 제외한 모든 클래스 제거
    el.classList.forEach((className) => {
      if (className !== 'card') {
        el.classList.remove(className);
      }
    });
  });
};

// 색상 버튼에 클릭 이벤트 리스너 추가
const colorBtn = document.querySelectorAll('button.color');
colorBtn.forEach((button) => {
  button.addEventListener('click', changeColorById);
});

// 텍스트 스타일 버튼에 클릭 이벤트 리스너 추가
const textBtn = document.querySelectorAll('button.text');
textBtn.forEach((button) => {
  button.addEventListener('click', changeTextByClass);
});

// 초기화 스타일 버튼에 클릭 이벤트 리스너 추가
const resetBtn = document.querySelector('button.reset');
resetBtn.addEventListener('click', resetStyleByQuery);
