import { Ghost } from "@gravity-ui/icons"
import { AsideHeader } from "@gravity-ui/navigation"
import { ThemeProvider } from "@gravity-ui/uikit"
import { DEFAULT_THEME } from "./constants/theme"
import Form from "./pages/form"

const App = () => {
    return (
        <ThemeProvider theme={DEFAULT_THEME}>
            <AsideHeader
                logo={{ icon: Ghost, text: "Gravity UI" }}
                compact
                renderContent={() => (
                    <div className="p-4">
                        <Form />
                    </div>
                )}
            />
        </ThemeProvider>
    )
}

export default App
