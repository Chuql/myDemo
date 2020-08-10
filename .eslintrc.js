module.exports = {
  root: false,
  env: {
    node: false
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    "no-undef": 0,//不能有未定义的变量
    "no-undef-init": 0,//变量初始化时不能直接给它赋值为undefined
    "no-undefined": 0,//不能使用undefined
    "no-unused-vars": 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
