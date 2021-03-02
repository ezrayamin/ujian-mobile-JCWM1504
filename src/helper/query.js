module.exports = {
    loop : (countries) => {
        let result = "["
        countries.map(item => {
            result += `['${item.Country}', '${item.NewConfirmed}', '${item.TotalConfirmed}', '${item.TotalRecovered}', '${item.TotalDeaths}'], `
        }
        )
        let a= result.slice(0, -2)
        return a += ']'
    }
}