//인터페이스에서 정의한 속성
interface IAnimal {
  color: string;
  name: string;
}

//인터페이스에 없는 속성의 경우는 쓰면 에러가 난다. 엄청 정확하게 프로퍼티를 검사
const dog: IAnimal = {
  name: "뽀삐",
  color: "white",
  //sort : '말티즈',❌인터페이스에 없는 속성이라서 에러
};

//인터페이스 확장
interface IDog extends IAnimal {
  sort: string;
}

// 기존 인터페이스 에 더해서 새로운 속성들을 추가
const dog2: IDog = {
  name: "초코",
  color: "brown",
  sort: "푸들",
};

//다음과 같이 key가 string인 경우에 한에 모든 속성들을 다 허용할 수도 있다.
interface ICat {
  name: string;
  [key: string]: any; //인덱스 시그니쳐 => 모든 속성들을 다 정의할 수 없을 떄 유용
}

const cat : ICat = {
  name : 'kitty',
  look : 'cute',
  city : 'Seoul',
  age : 4,
}

//인터페이스에 아무 속성도 없는 경우, ts는 해당 인터페이스를 따르는
//객체에 대해 추가 속성 검사를 수행하지 않습니다
interface NoProps {
}

const obj: NoProps = {
  why: "에러 안나ㅋ",
};

const interfaceType = 1;
export default interfaceType;

//클래스는 인터페이스를 사용할 수 있다. type x
