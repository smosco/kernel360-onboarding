const path = require('path');

// webpack 설정
module.exports = {
  mode: 'production',
  entry: './scripts.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'lib',
  },

  // babel 설정
  // 최신 자바스크립트가 구형 브라우저에서도 실행될 수 있도록 변환해줌
  module: {
    rules: [
      {
        // .js, .mjs 확장자 가진 파일에 규칙 적용
        // 자바스크립트 파일을 babel로 코드를 변환하겠다
        test: /\.m?js$/,
        // node_modules 안에 있는 패키지들은 변환하지 않겠다.
        exclude: /node_modules/,
        use: {
          // webpack과 babel을 연결하는 역할
          // webpack이 자바스크립트 파일을 번들링할 때 babel을 통해 코드를 변환할 수있도록 해줌
          loader: 'babel-loader',
          options: {
            // babel에게 어떤 변환 규칙을 사용할지 알려줌
            // 최신 자바스크립트 기능을 자동으로 감지해 브라우저 호환성을 위한 최적의 변환 적용
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
