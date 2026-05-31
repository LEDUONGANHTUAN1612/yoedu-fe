import { RouterProvider } from "react-router-dom"
import { store } from "./app/redux/store"
import { router } from "./app/router/routes"
import { Provider } from "react-redux"
import ThemeProvider from "./app/providers/theme/ThemeProvider"
import AntdProvider from "./app/providers/antd/AntdProvider"


const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AntdProvider>
          <RouterProvider router={router} />
        </AntdProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App