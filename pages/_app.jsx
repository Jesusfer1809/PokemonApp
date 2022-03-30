import "../styles/globals.css"
import { Provider } from "react-redux"
import { createWrapper } from "next-redux-wrapper"
import store from "../store/store"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

const makestore = () => store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)
