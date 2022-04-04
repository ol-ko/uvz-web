export const formatDate = (dateString, locale) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(locale || process.env.lang) || ''
}