var axios = require('axios');
module.exports = async name => {
if (!(name && typeof name === 'string' && name.length > 0)) throw new Error('Please enter a vaild package name')
var data = (await axios.get('https://npm-download-size.seljebu.no/'+name)).data
// return  data.dependencies.length + 
var total = data.dependencies.map(dsiz => dsiz.totalDependencies).reduce((a, b) => a + b, 0) 
return data.dependencies.map(dsiz => {
return {
    name:dsiz.name,
    totalDeps:dsiz.totalDependencies,
    depsPercentage:Number(percentage(dsiz.totalDependencies,total).toFixed(2))
}
})
}
function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
} 