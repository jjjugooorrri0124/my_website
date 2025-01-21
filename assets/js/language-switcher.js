function changeLanguage(lang) {
  if (lang === 'en') {
    // 영어 페이지로 이동
    window.location.href = 'index.html';
  } else if (lang === 'ko') {
    // 한국어 페이지로 이동
    window.location.href = 'ko_index.html';
  }
}
