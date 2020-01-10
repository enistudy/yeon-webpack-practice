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
  ES6/ES7 코드를 ECMAScript5 코드로 transpiling 하기 위한 도구

```
yarn add @babel/core babel-loader @babel/preset-env -D
```

@babel/core : 바벨
@babel/preset-env: 최신 자바스크립트 기능을 ES5로 트랜스파일 해주는 라이브러리
@babel/preset-react: 리액트 환경(JSX)을 위한 라이브러리
babel-loader : 웹팩에서 바벨을 돌릴 때 사용

> 😯 balel-loader와 ts-loader의 차이??

### .babelrc

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}

```

`@babel/preset-env` : plugin들을 포함한 번들파일을 포함하는 것, es6 기능을 컴파일할 모든 plugin 들

## 구성요소

### entry

번들링 프로세스가 시작되는 지점
여러개의 엔트리 포인트 지정 가능하고 생략곧 가능 생략시 src/index.js가 기본

### output

번들링된 파일을 저장할 장소와 이름
bundle.[hash].js, bundle.[name].js 등으로 저장 가능

### Modele (loader)

- 번들 규칙을 정의
- .babelrc를 babel-loader를 이용해 규칙에 적용. 분리할 수도 합칠 수도 있음

```json
module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
        options:
        {
            "presets": [
            ["@babel/preset-env", { "targets": { "browsers": ["> 5% in KR"] } }],
            "@babel/preset-react"
          ],
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

```

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

### Resolve

모듈간의 의존성을 고려해서 로딩할 때 어떤 위치에서 어떻게 로딩할지 결정하는 것.

#### 모듈의 경로를 줄일 수 있음

```
alias : {
    Utilities : path.resolve(__dirname,'src/path/utilities/')
}

import Utility from 'Utilities/utility'
```

#### modulse

기본의 모듈 경로를 바꿀수도 있음

```

```

#### extention

확장자 어떤 것만 볼건지 정할 수 있음

```javascript
resolve: {
  extensions: [".ts", ".tsx", ".js"];
}
```

---

- webpack-dev-server
  이거 쓰면 output을 webpack-dev-server 가 따로처리
  경로를 주려면 publicPath를 적어줘야 된다

react-hot-loader

---

주의
webpack config js 변경시 서버는 재시작 해야함
