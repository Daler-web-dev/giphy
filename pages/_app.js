import '/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <html lang="ru" >
      <Component {...pageProps} />
    </html>
  )
}

export default MyApp
