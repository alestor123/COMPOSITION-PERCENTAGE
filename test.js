const tap = require('tap')
const cp = require('./App')
tap.test('Error test', async t => {
  await t.rejects(cp(), { message: 'Please enter a vaild package name' })
  await t.rejects(cp(''), { message: 'Please enter a vaild package name' })
  await t.rejects(cp(1), { message: 'Please enter a vaild package name' })
})
tap.test('Output test', async t => {
  const main = await cp('meow')
  t.equal(typeof main, 'object')
  t.equal(Math.round(main.map(mn => mn.depsPercentage).reduce((a, b) => a + b, 0)), 100)
})
