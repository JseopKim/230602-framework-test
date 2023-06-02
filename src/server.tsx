import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname,'/build')));

// 모든 요청에 index.html 반환
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.use(express.static(path.join(__dirname)));

app.get('/dist/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname,'../dist/bundle.js'));
});
// 서버 시작
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});