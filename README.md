- configs: dùng để config url
- redux-saga: luồng saga
    + action_types: các type sử dụng cho action và reducers
    + action: nơi viết các action để call api
    + reducers: lưu trữ state cho stores
    + sagas: 
        + requests: request các api CRUD
        + handlers: trả về dữ liệu khi success/error
        + rootSaga: call các function của handlers
    + stores: initial state
- utils: config or function common
- App.js: render html, selector state, dispatch function
- index.js: config/use saga

===================
**LUỒNG**
- action
- action_types
- reducers
- sagas => requests
- sagas => handlers
- saga => rootSaga
- App.js
