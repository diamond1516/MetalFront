const routeController = (
    obj: Record<string, any>,
    prefix = "",
): Record<string, any> => {
    const basePath = prefix || prefix
    return {
        BASE: basePath,
        ...Object.fromEntries(
            Object.entries(obj).map(([key, value]) => {
                const newPrefix =
                    prefix ?
                        `${prefix}/${key.toLowerCase()}`
                    :   key.toLowerCase()
                return [
                    key,
                    typeof value === "object" ?
                        routeController(value, newPrefix)
                    :   newPrefix,
                ]
            }),
        ),
    }
}

export default routeController
