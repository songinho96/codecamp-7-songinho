import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  //  여기에다가 설정하기

  return <Component {...pageProps} />
}

export default MyApp


// 모든 페이지가 시작되기 전에 맨 처음 1번 시작되는 파일