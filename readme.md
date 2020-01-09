# webpack

## 왜 웹팩을 사용할까

http 커넥션을 최소화 하여 성능을 올려보자

## webpack에서의 역할

## 설치

- 웹팩설치

```bash
> yarn add webpack webpack-cli
```

- babel 설치

```
yarn add @babel/core babel-loader @babel/preset-env -D
```

@babel/preset-env: 최신 자바스크립트 기능을 ES5로 트랜스파일 해주는 라이브러리
@babel/preset-react: 리액트 환경(JSX)을 위한 라이브러리

## 구성요소

### entry

번들링 프로세스가 시작되는 지점
여러개의 엔트리 포인트 지정 가능하고 생략곧 가능 생략시 src/index.js가 기본

### output

번들링된 파일을 저장할 장소와 이름
bundle.[hash].js, bundle.[name].js 등으로 저장 가능

### loader

번들 규칙을 정의
.babelrc를 babel-loader를 이용해 규칙에 적용.

### plugin

#### 사용이유

추가적인 커스텀 기능을 확장하고 사용하기 위해서
파일별로 커스텀 기능을 사용하기 위해서 사용

#### 예시

- css를 밖으로 꺼낸다거나

#### loader vs plugin

로더는 빌드할 때 영향을 주기 위해서고 플러그인은 빌드가 다 되고 난 다음에 처리되는 기능
두개 다 추가적인 기능을 제공한다는 점에서 공통점은 있음

```javascript
module.exports = {
  entry: {},
  output: {},
  module: {},
  plugins: [new webpack.optimize.UglifyJsPlugin()]
};
```

#### 종류

- new ProvidePlugins({});
  라이브러리를 npm으로 install 되고 나면 앱 로직 안에서 로딩하지 않아도 접근자를 통해서 접근 가능하도록 설정해 주는 것
- new webpack.ProvidePlugins({})
  웹팩을 시작할 때의 상수값들을 정의할 수 있음  
  production level, develop level의 자원을 자동화 및 구분할 때 유용
- new ManifestPlugin({})
  번들링에서 생성되는 엄청 많은 모듈 관계를 json 파일로 저장해서 관리
