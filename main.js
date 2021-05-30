// let str = `
// 010-1234-5678
// mh03250@gmail.com
// https://www.omdbapi.com/?apikey=de624e7f&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http//localhost:1234
// 동해물과_백두산이 마르고 닳도록
// `;

// const regexp = /fox/gi; //리터럴 방식 / gi: 대소문자 구분없이 해당되는 문자를 검색하여 배열로 반환
// console.log(str.match(regexp));
// console.log(str.replace(regexp, "AAA"));
// str = str.replace(regexp, "AAA");

// console.log(str.match(/\.$/gim));

// \ : 특정한 기호에서 벗어나 단순한 문자로 해석되라는 의미
// $ : 문장이 끝나는 부분을 지칭
// (gi)m : 줄바꿈 문장의 끝에 해당 문자가 있는지를 배열로 반환

// console.log(str.match(/\b\w{2,3}\b/g));

// console.log(str.match(/[가-힣]{1,}/g));

// console.log(str.match(/\bf\w{1,}\b/g));

// console.log(str.match(/\d{1,}/g));

// const h = `  the hello  world       !

// `;

// console.log(h.replace(/\s/g, ""));

const str = `
010-1234-5678
mh03250@gmail.com
https://www.omdbapi.com/?apikey=de624e7f&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccddd
`;

console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));
