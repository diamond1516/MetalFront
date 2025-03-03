type RouteObject<T> = {
    BASE: string
} & {
    [K in keyof T]: T[K] extends object ? RouteObject<T[K]> : string
}

const routeController = <T extends Record<string, any>>(
    obj: T,
    prefix = "",
    appendSlash = false,
): RouteObject<T> => {
    const formattedPrefix = prefix.replace(/\/+/g, "/")

    return {
        BASE: formattedPrefix,
        ...Object.fromEntries(
            Object.entries(obj).map(([key, value]) => {
                const newSegment =
                    typeof value === "string" ? value : (
                        key.toLowerCase().replace("_", "-")
                    )
                let newPrefix = `${formattedPrefix}/${newSegment}`.replace(
                    /\/+/g,
                    "/",
                )

                if (appendSlash) {
                    newPrefix =
                        newPrefix.endsWith("/") ? newPrefix : newPrefix + "/"
                }

                return [
                    key,
                    (
                        typeof value === "object" &&
                        !Array.isArray(value) &&
                        value !== null
                    ) ?
                        routeController(value, newPrefix, appendSlash)
                    :   newPrefix,
                ]
            }),
        ),
    } as RouteObject<T>
}

export default routeController
