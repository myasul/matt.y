export class DateUtil {
    public static toAbbrevDateTime (date: Date) {
        const dateTimeRegex = /(?<=[\w]{3}[\s])(.+)/g
        const dateString = date.toDateString()

        const match = dateString.match(dateTimeRegex)

        if (!match?.length) throw new Error(`Invalid date: ${dateString}`)

        return match[0].replace(/(?<=\d)\s(?=\d)/g,', ')
    }
}